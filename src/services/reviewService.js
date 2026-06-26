// reviewService.js
import { collection, addDoc, doc, updateDoc, query, where, getDocs, getDoc, serverTimestamp, arrayUnion, increment } from 'firebase/firestore';
import { db } from '../firebase';

export async function submitReview(matchId, reviewerId, revieweeId, stars, text) {
  try {
    // 1. Create Firestore doc at reviews/{auto-id}
    const reviewData = {
      matchId,
      reviewerId,
      revieweeId,
      stars,
      text,
      createdAt: serverTimestamp()
    };
    await addDoc(collection(db, 'reviews'), reviewData);

    // 2. Update matches/{matchId} status to "completed"
    const matchRef = doc(db, 'matches', matchId);
    await updateDoc(matchRef, {
      status: 'completed'
    });

    // 3. Recalculate reviewee's average rating
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, where('revieweeId', '==', revieweeId));
    const querySnapshot = await getDocs(q);
    
    let totalStars = 0;
    let reviewCount = 0;
    
    querySnapshot.forEach((docSnap) => {
      totalStars += docSnap.data().stars;
      reviewCount++;
    });

    const newAvg = reviewCount > 0 ? (totalStars / reviewCount) : 0;

    // We also need the current sessionCount and badges to check for new badges
    const userRef = doc(db, 'users', revieweeId);
    const userSnap = await getDoc(userRef);
    let currentSessionCount = 0;
    let currentBadges = [];
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      currentSessionCount = (userData.sessionCount || 0) + 1; // we're incrementing it
      currentBadges = userData.badges || [];
    }

    // 4. Badge Logic
    const newBadgesEarned = [];

    // "Rising Mentor": sessionCount >= 1 and rating >= 4
    if (currentSessionCount >= 1 && newAvg >= 4 && !currentBadges.includes("Rising Mentor")) {
      newBadgesEarned.push("Rising Mentor");
    }

    // "Verified Mentor": sessionCount >= 3 and rating >= 4
    if (currentSessionCount >= 3 && newAvg >= 4 && !currentBadges.includes("Verified Mentor")) {
      newBadgesEarned.push("Verified Mentor");
    }

    // "Top Contributor": sessionCount >= 5 and rating >= 4.5
    if (currentSessionCount >= 5 && newAvg >= 4.5 && !currentBadges.includes("Top Contributor")) {
      newBadgesEarned.push("Top Contributor");
    }

    // Prepare user updates
    const userUpdates = {
      rating: newAvg,
      sessionCount: increment(1)
    };

    if (newBadgesEarned.length > 0) {
      // Using arrayUnion directly with spread elements
      userUpdates.badges = arrayUnion(...newBadgesEarned);
    }

    await updateDoc(userRef, userUpdates);

    // 5. Return success result
    return { 
      success: true, 
      badgesEarned: newBadgesEarned 
    };

  } catch (error) {
    console.error("Error submitting review:", error);
    return {
      success: false,
      error: error.message
    };
  }
}
