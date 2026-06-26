import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export async function seedDemoUsers(db) {
  try {
    const checkRef = doc(db, 'users', 'demo_user_1');
    const checkSnap = await getDoc(checkRef);
    if (checkSnap.exists()) {
      console.log('Demo users already seeded. Skipping.');
      return;
    }
  } catch (error) {
    console.error('Error checking demo user status:', error);
  }

  const demoUsers = [
    {
      uid: "demo_user_1",
      name: "Arjun Kumar",
      college: "IIT Madras",
      skillsOffered: [
        { skill: "Python", proficiency: "Expert" },
        { skill: "Machine Learning", proficiency: "Expert" }
      ],
      skillsWanted: ["UI Design", "Figma"],
      rating: 4.8,
      sessionsCount: 12,
      sessionCount: 12,
      badges: ["⭐ Top Mentor", "🎓 First Session"],
      bio: "Demo user for SkillSwap",
      createdAt: serverTimestamp()
    },
    {
      uid: "demo_user_2",
      name: "Priya Sharma",
      college: "NIT Trichy",
      skillsOffered: [
        { skill: "UI Design", proficiency: "Expert" },
        { skill: "Figma", proficiency: "Intermediate" }
      ],
      skillsWanted: ["Python", "Data Science"],
      rating: 4.5,
      sessionsCount: 8,
      sessionCount: 8,
      badges: ["⭐ Top Mentor", "🎓 First Session"],
      bio: "Demo user for SkillSwap",
      createdAt: serverTimestamp()
    },
    {
      uid: "demo_user_3",
      name: "Rahul Verma",
      college: "VIT Vellore",
      skillsOffered: [
        { skill: "React", proficiency: "Expert" },
        { skill: "JavaScript", proficiency: "Expert" }
      ],
      skillsWanted: ["Machine Learning", "Python"],
      rating: 4.2,
      sessionsCount: 6,
      sessionCount: 6,
      badges: ["🎓 First Session"],
      bio: "Demo user for SkillSwap",
      createdAt: serverTimestamp()
    },
    {
      uid: "demo_user_4",
      name: "Sneha Patel",
      college: "BITS Pilani",
      skillsOffered: [
        { skill: "Data Science", proficiency: "Expert" },
        { skill: "Python", proficiency: "Expert" }
      ],
      skillsWanted: ["React", "UI Design"],
      rating: 4.9,
      sessionsCount: 15,
      sessionCount: 15,
      badges: ["⭐ Top Mentor", "🎓 First Session"],
      bio: "Demo user for SkillSwap",
      createdAt: serverTimestamp()
    },
    {
      uid: "demo_user_5",
      name: "Karthik Raja",
      college: "Anna University",
      skillsOffered: [
        { skill: "Android Dev", proficiency: "Expert" },
        { skill: "Kotlin", proficiency: "Intermediate" }
      ],
      skillsWanted: ["AI", "Machine Learning"],
      rating: 4.0,
      sessionsCount: 4,
      sessionCount: 4,
      badges: ["🎓 First Session"],
      bio: "Demo user for SkillSwap",
      createdAt: serverTimestamp()
    },
    {
      uid: "demo_user_6",
      name: "Divya Menon",
      college: "PSG Tech",
      skillsOffered: [
        { skill: "AI", proficiency: "Expert" },
        { skill: "Deep Learning", proficiency: "Expert" }
      ],
      skillsWanted: ["Android Dev", "React"],
      rating: 4.7,
      sessionsCount: 10,
      sessionCount: 10,
      badges: ["⭐ Top Mentor", "🎓 First Session"],
      bio: "Demo user for SkillSwap",
      createdAt: serverTimestamp()
    },
    {
      uid: "demo_user_7",
      name: "Vikram Singh",
      college: "DTU Delhi",
      skillsOffered: [
        { skill: "Blockchain", proficiency: "Expert" },
        { skill: "Solidity", proficiency: "Intermediate" }
      ],
      skillsWanted: ["Python", "Data Science"],
      rating: 3.9,
      sessionsCount: 3,
      sessionCount: 3,
      badges: ["🎓 First Session"],
      bio: "Demo user for SkillSwap",
      createdAt: serverTimestamp()
    },
    {
      uid: "demo_user_8",
      name: "Ananya Iyer",
      college: "SASTRA University",
      skillsOffered: [
        { skill: "Figma", proficiency: "Expert" },
        { skill: "UI Design", proficiency: "Expert" }
      ],
      skillsWanted: ["JavaScript", "React"],
      rating: 4.3,
      sessionsCount: 5,
      sessionCount: 5,
      badges: ["🎓 First Session"],
      bio: "Demo user for SkillSwap",
      createdAt: serverTimestamp()
    }
  ];

  for (const user of demoUsers) {
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, user);
      console.log(`Successfully seeded ${user.name}`);
    } catch (e) {
      console.error(`Error seeding ${user.name}:`, e);
    }
  }
}
