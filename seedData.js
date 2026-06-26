// seedData.js
const admin = require("firebase-admin");

// HOW TO RUN THIS SCRIPT:
// 1. Go to Firebase Console > Project Settings > Service Accounts
// 2. Click "Generate new private key"
// 3. Save the downloaded JSON file as "serviceAccountKey.json" in the same folder as this script
// 4. Run `npm install firebase-admin`
// 5. Run `node seedData.js`

try {
  const serviceAccount = require("./serviceAccountKey.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (error) {
  console.error("❌ CRITICAL ERROR: Could not load serviceAccountKey.json.");
  console.error("Please download your service account key from Firebase Console and save it as 'serviceAccountKey.json'.");
  process.exit(1);
}

const db = admin.firestore();
const auth = admin.auth();

const usersToSeed = [
  {
    name: "Aarav Sharma",
    college: "IIT Bombay",
    email: "aarav@skillswap.demo",
    password: "demo1234",
    skillsOffered: [{ skill: "Python", level: "Expert" }],
    skillsWanted: ["UI Design"],
    rating: 0,
    sessionCount: 0,
    badges: []
  },
  {
    name: "Priya Patel",
    college: "NIT Trichy",
    email: "priya@skillswap.demo",
    password: "demo1234",
    skillsOffered: [{ skill: "UI Design", level: "Expert" }],
    skillsWanted: ["Python"],
    rating: 0,
    sessionCount: 0,
    badges: []
  },
  {
    name: "Rohan Gupta",
    college: "BITS Pilani",
    email: "rohan@skillswap.demo",
    password: "demo1234",
    skillsOffered: [{ skill: "React", level: "Intermediate" }],
    skillsWanted: ["Machine Learning"],
    rating: 0,
    sessionCount: 0,
    badges: []
  },
  {
    name: "Ananya Singh",
    college: "Delhi Technological University",
    email: "ananya@skillswap.demo",
    password: "demo1234",
    skillsOffered: [{ skill: "Machine Learning", level: "Expert" }],
    skillsWanted: ["React"],
    rating: 0,
    sessionCount: 0,
    badges: []
  },
  {
    name: "Karan Verma",
    college: "IIIT Hyderabad",
    email: "karan@skillswap.demo",
    password: "demo1234",
    skillsOffered: [{ skill: "DSA", level: "Expert" }],
    skillsWanted: ["System Design"],
    rating: 4.8,
    sessionCount: 5,
    badges: ["Top Contributor"]
  }
];

async function seedData() {
  console.log("🚀 Starting data seed process...");

  for (const userData of usersToSeed) {
    try {
      // 1. Create Auth User
      const userRecord = await auth.createUser({
        email: userData.email,
        password: userData.password,
        displayName: userData.name,
      });

      console.log(`✅ Auth user created: ${userData.name} (${userData.email})`);

      // 2. Create Firestore Document
      await db.collection("users").doc(userRecord.uid).set({
        name: userData.name,
        college: userData.college,
        email: userData.email,
        skillsOffered: userData.skillsOffered,
        skillsWanted: userData.skillsWanted,
        rating: userData.rating,
        sessionCount: userData.sessionCount,
        badges: userData.badges,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });

      console.log(`✅ Firestore document created for: ${userData.name}`);

    } catch (error) {
      if (error.code === 'auth/email-already-exists') {
        console.log(`⚠️ User ${userData.email} already exists. Skipping creation.`);
      } else {
        console.error(`❌ Error creating user ${userData.email}:`, error);
      }
    }
  }

  console.log("🎉 Seeding complete!");
  process.exit();
}

seedData();
