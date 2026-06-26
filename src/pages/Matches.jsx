import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { seedDemoUsers } from '../utils/seedData';

const SKILL_RESOURCES = {
  // ═══ PROGRAMMING LANGUAGES ═══
  "Python": [
    {title:"Python Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=rfscVS0vtbw",type:"video"},
    {title:"Python Quiz - W3Schools",url:"https://www.w3schools.com/python/python_quiz.asp",type:"quiz"}
  ],
  "JavaScript": [
    {title:"JS Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=PkZNo7MFNFg",type:"video"},
    {title:"JS Quiz - W3Schools",url:"https://www.w3schools.com/js/js_quiz.asp",type:"quiz"}
  ],
  "Java": [
    {title:"Java Full Course - Telusko",url:"https://www.youtube.com/watch?v=GoXwIVyNvX0",type:"video"},
    {title:"Java Quiz - W3Schools",url:"https://www.w3schools.com/java/java_quiz.asp",type:"quiz"}
  ],
  "C": [
    {title:"C Programming Full Course",url:"https://www.youtube.com/watch?v=KJgsSFOSQv0",type:"video"},
    {title:"C Quiz - W3Schools",url:"https://www.w3schools.com/c/c_quiz.asp",type:"quiz"}
  ],
  "C++": [
    {title:"C++ Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=vLnPwxZdW4Y",type:"video"},
    {title:"C++ Quiz - W3Schools",url:"https://www.w3schools.com/cpp/cpp_quiz.asp",type:"quiz"}
  ],
  "Kotlin": [
    {title:"Kotlin Full Course - Telusko",url:"https://www.youtube.com/watch?v=F9UC9DY-vIU",type:"video"},
    {title:"Kotlin Quiz - W3Schools",url:"https://www.w3schools.com/kotlin/kotlin_quiz.asp",type:"quiz"}
  ],
  "Swift": [
    {title:"Swift Full Course for Beginners",url:"https://www.youtube.com/watch?v=comQ1-x2a1Q",type:"video"},
    {title:"Swift Quiz - Hacking with Swift",url:"https://www.hackingwithswift.com/review",type:"quiz"}
  ],
  "Go": [
    {title:"Golang Full Course - TechWorld",url:"https://www.youtube.com/watch?v=yyUHQIec83I",type:"video"},
    {title:"Go Quiz - W3Schools",url:"https://www.w3schools.com/go/go_quiz.asp",type:"quiz"}
  ],
  "Rust": [
    {title:"Rust Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=BpPEoZW5IiY",type:"video"},
    {title:"Rust Quiz - Exercism",url:"https://exercism.org/tracks/rust",type:"quiz"}
  ],
  "TypeScript": [
    {title:"TypeScript Full Course - Traversy",url:"https://www.youtube.com/watch?v=BCg4U1FzODs",type:"video"},
    {title:"TS Quiz - W3Schools",url:"https://www.w3schools.com/typescript/typescript_quiz.php",type:"quiz"}
  ],
  "PHP": [
    {title:"PHP Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=OK_JCtrrv-c",type:"video"},
    {title:"PHP Quiz - W3Schools",url:"https://www.w3schools.com/php/php_quiz.asp",type:"quiz"}
  ],
  "Ruby": [
    {title:"Ruby Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=t_ispmWmdjY",type:"video"},
    {title:"Ruby Quiz - Exercism",url:"https://exercism.org/tracks/ruby",type:"quiz"}
  ],
  "R": [
    {title:"R Programming Full Course",url:"https://www.youtube.com/watch?v=_V8eKsto3Ug",type:"video"},
    {title:"R Quiz - W3Schools",url:"https://www.w3schools.com/r/r_quiz.asp",type:"quiz"}
  ],
  "Dart": [
    {title:"Dart Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=Ej_Pcr4uC2Q",type:"video"},
    {title:"Dart Quiz - Exercism",url:"https://exercism.org/tracks/dart",type:"quiz"}
  ],

  // ═══ WEB DEVELOPMENT ═══
  "React": [
    {title:"React Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=bMknfKXIFA8",type:"video"},
    {title:"React Quiz - W3Schools",url:"https://www.w3schools.com/react/react_quiz.asp",type:"quiz"}
  ],
  "Next.js": [
    {title:"Next.js Full Course - Vercel",url:"https://www.youtube.com/watch?v=mTz0GXj8NN0",type:"video"},
    {title:"Next.js Quiz - Scrimba",url:"https://scrimba.com/learn/nextjs",type:"quiz"}
  ],
  "Vue.js": [
    {title:"Vue.js Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=FXpIoQ_rT_c",type:"video"},
    {title:"Vue Quiz - W3Schools",url:"https://www.w3schools.com/vue/vue_quiz.php",type:"quiz"}
  ],
  "Angular": [
    {title:"Angular Full Course - Mosh",url:"https://www.youtube.com/watch?v=k5E2AVpwsko",type:"video"},
    {title:"Angular Quiz - W3Schools",url:"https://www.w3schools.com/angular/angular_quiz.asp",type:"quiz"}
  ],
  "HTML": [
    {title:"HTML Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=pQN-pnXPaVg",type:"video"},
    {title:"HTML Quiz - W3Schools",url:"https://www.w3schools.com/html/html_quiz.asp",type:"quiz"}
  ],
  "CSS": [
    {title:"CSS Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=OXGznpKZ_sA",type:"video"},
    {title:"CSS Quiz - W3Schools",url:"https://www.w3schools.com/css/css_quiz.asp",type:"quiz"}
  ],
  "Tailwind CSS": [
    {title:"Tailwind CSS Full Course - Traversy",url:"https://www.youtube.com/watch?v=dFgzHOX84xQ",type:"video"},
    {title:"Tailwind Quiz - Scrimba",url:"https://scrimba.com/learn/tailwind",type:"quiz"}
  ],
  "Node.js": [
    {title:"Node.js Full Course - Mosh",url:"https://www.youtube.com/watch?v=TlB_eWDSMt4",type:"video"},
    {title:"Node Quiz - W3Schools",url:"https://www.w3schools.com/nodejs/nodejs_quiz.asp",type:"quiz"}
  ],
  "Express.js": [
    {title:"Express.js Full Course - Traversy",url:"https://www.youtube.com/watch?v=L72fhGm1tfE",type:"video"},
    {title:"Express Quiz - JavaTpoint",url:"https://www.javatpoint.com/expressjs-quiz",type:"quiz"}
  ],

  // ═══ MOBILE DEVELOPMENT ═══
  "Android Dev": [
    {title:"Android Dev Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=fis26HvvDII",type:"video"},
    {title:"Android Quiz - Javatpoint",url:"https://www.javatpoint.com/android-quiz",type:"quiz"}
  ],
  "iOS Dev": [
    {title:"iOS Dev Full Course - Stanford",url:"https://www.youtube.com/watch?v=bqu6BquVi2M",type:"video"},
    {title:"iOS Quiz - Hacking with Swift",url:"https://www.hackingwithswift.com/review",type:"quiz"}
  ],
  "Flutter": [
    {title:"Flutter Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=VPvVD8t02U8",type:"video"},
    {title:"Flutter Quiz - Javatpoint",url:"https://www.javatpoint.com/flutter-quiz",type:"quiz"}
  ],
  "React Native": [
    {title:"React Native Full Course - Mosh",url:"https://www.youtube.com/watch?v=0-S5a0eXPoc",type:"video"},
    {title:"RN Quiz - Scrimba",url:"https://scrimba.com/learn/reactnative",type:"quiz"}
  ],

  // ═══ AI / ML / DATA ═══
  "Machine Learning": [
    {title:"ML by Andrew Ng - Stanford",url:"https://www.youtube.com/watch?v=jGwO_UgTS7I",type:"video"},
    {title:"ML Assessment - Kaggle",url:"https://www.kaggle.com/learn/intro-to-machine-learning",type:"quiz"}
  ],
  "Deep Learning": [
    {title:"Deep Learning Specialization",url:"https://www.youtube.com/watch?v=CS4cs9xVecg",type:"video"},
    {title:"DL Assessment - Kaggle",url:"https://www.kaggle.com/learn/intro-to-deep-learning",type:"quiz"}
  ],
  "AI": [
    {title:"AI For Everyone - Andrew Ng",url:"https://www.youtube.com/watch?v=2ePf9rue1Ao",type:"video"},
    {title:"AI Quiz - W3Schools",url:"https://www.w3schools.com/ai/ai_quiz.asp",type:"quiz"}
  ],
  "Data Science": [
    {title:"Data Science Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=ua-CiDNNj30",type:"video"},
    {title:"DS Assessment - Kaggle",url:"https://www.kaggle.com/learn/data-visualization",type:"quiz"}
  ],
  "Data Analysis": [
    {title:"Data Analysis with Python - FreeCodeCamp",url:"https://www.youtube.com/watch?v=r-uOLxNrNk8",type:"video"},
    {title:"DA Assessment - Kaggle",url:"https://www.kaggle.com/learn/pandas",type:"quiz"}
  ],
  "NLP": [
    {title:"NLP Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=fOvTtapxa9c",type:"video"},
    {title:"NLP Assessment - Kaggle",url:"https://www.kaggle.com/learn/natural-language-processing",type:"quiz"}
  ],
  "Computer Vision": [
    {title:"Computer Vision Full Course",url:"https://www.youtube.com/watch?v=01sAkU_NvOY",type:"video"},
    {title:"CV Assessment - Kaggle",url:"https://www.kaggle.com/learn/computer-vision",type:"quiz"}
  ],
  "Power BI": [
    {title:"Power BI Full Course - Edureka",url:"https://www.youtube.com/watch?v=3u7MQz1EyPY",type:"video"},
    {title:"Power BI Quiz - Javatpoint",url:"https://www.javatpoint.com/power-bi-quiz",type:"quiz"}
  ],
  "Tableau": [
    {title:"Tableau Full Course - Simplilearn",url:"https://www.youtube.com/watch?v=TPMlZxRRaBQ",type:"video"},
    {title:"Tableau Quiz - Javatpoint",url:"https://www.javatpoint.com/tableau-quiz",type:"quiz"}
  ],

  // ═══ DATABASE ═══
  "SQL": [
    {title:"SQL Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=HXV3zeQKqGY",type:"video"},
    {title:"SQL Quiz - W3Schools",url:"https://www.w3schools.com/sql/sql_quiz.asp",type:"quiz"}
  ],
  "MySQL": [
    {title:"MySQL Full Course - Mosh",url:"https://www.youtube.com/watch?v=7S_tz1z_5bA",type:"video"},
    {title:"MySQL Quiz - W3Schools",url:"https://www.w3schools.com/mysql/mysql_quiz.asp",type:"quiz"}
  ],
  "MongoDB": [
    {title:"MongoDB Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=ofme2o29ngU",type:"video"},
    {title:"MongoDB Quiz - W3Schools",url:"https://www.w3schools.com/mongodb/mongodb_quiz.php",type:"quiz"}
  ],
  "PostgreSQL": [
    {title:"PostgreSQL Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=qw--VYLpxG4",type:"video"},
    {title:"PostgreSQL Quiz - Javatpoint",url:"https://www.javatpoint.com/postgresql-quiz",type:"quiz"}
  ],
  "Firebase": [
    {title:"Firebase Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=fgdpvwEWJ9M",type:"video"},
    {title:"Firebase Codelab - Google",url:"https://firebase.google.com/codelabs/firebase-web",type:"quiz"}
  ],

  // ═══ DEVOPS / CLOUD ═══
  "Docker": [
    {title:"Docker Full Course - TechWorld",url:"https://www.youtube.com/watch?v=3c-iBn73dDE",type:"video"},
    {title:"Docker Quiz - Javatpoint",url:"https://www.javatpoint.com/docker-quiz",type:"quiz"}
  ],
  "Kubernetes": [
    {title:"Kubernetes Full Course - TechWorld",url:"https://www.youtube.com/watch?v=X48VuDVv0do",type:"video"},
    {title:"K8s Quiz - Javatpoint",url:"https://www.javatpoint.com/kubernetes-quiz",type:"quiz"}
  ],
  "AWS": [
    {title:"AWS Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=ulprqHHWlng",type:"video"},
    {title:"AWS Practice - Tutorials Dojo",url:"https://tutorialsdojo.com/aws-cheat-sheets/",type:"quiz"}
  ],
  "Git": [
    {title:"Git Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=RGOj5yH7evk",type:"video"},
    {title:"Git Quiz - W3Schools",url:"https://www.w3schools.com/git/git_quiz.asp",type:"quiz"}
  ],

  // ═══ DESIGN ═══
  "UI Design": [
    {title:"UI Design Crash Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=c9Wg6Cb_YlU",type:"video"},
    {title:"Design Quiz - Canva",url:"https://www.canva.com/learn/quiz-graphic-design/",type:"quiz"}
  ],
  "Figma": [
    {title:"Figma Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=FTFaQWZBqQ8",type:"video"},
    {title:"Figma Quiz - DesignCourse",url:"https://designcourse.com",type:"quiz"}
  ],
  "UX Design": [
    {title:"UX Design Full Course - Google",url:"https://www.youtube.com/watch?v=uL2ZB7XXIgg",type:"video"},
    {title:"UX Quiz - Interaction Design",url:"https://www.interaction-design.org/courses",type:"quiz"}
  ],

  // ═══ CYBER SECURITY ═══
  "Cybersecurity": [
    {title:"Cybersecurity Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=hXSFdwIOfnE",type:"video"},
    {title:"Security Quiz - Cybrary",url:"https://www.cybrary.it/catalog/",type:"quiz"}
  ],
  "Ethical Hacking": [
    {title:"Ethical Hacking Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=3Kq1MIfTWCE",type:"video"},
    {title:"CEH Practice - Cybrary",url:"https://www.cybrary.it/course/ethical-hacking/",type:"quiz"}
  ],

  // ═══ BLOCKCHAIN ═══
  "Blockchain": [
    {title:"Blockchain Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=gyMwXuJrbJQ",type:"video"},
    {title:"Blockchain Quiz - Javatpoint",url:"https://www.javatpoint.com/blockchain-quiz",type:"quiz"}
  ],
  "Solidity": [
    {title:"Solidity Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=M576WGiDBdQ",type:"video"},
    {title:"Solidity Quiz - CryptoZombies",url:"https://cryptozombies.io",type:"quiz"}
  ],

  // ═══ DSA ═══
  "DSA": [
    {title:"DSA Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=8hly31xKli0",type:"video"},
    {title:"DSA Practice - LeetCode",url:"https://leetcode.com/studyplan/top-interview-150/",type:"quiz"}
  ],
  "Competitive Programming": [
    {title:"CP Course - Errichto",url:"https://www.youtube.com/watch?v=xAeiXy8-9Y8",type:"video"},
    {title:"CP Practice - Codeforces",url:"https://codeforces.com",type:"quiz"}
  ],

  // ═══ OTHER ═══
  "OBD Sensor": [
    {title:"OBD-II Full Guide",url:"https://www.youtube.com/watch?v=0RvO8GFjWaU",type:"video"},
    {title:"OBD Quiz - Quizlet",url:"https://quizlet.com/subject/obd/",type:"quiz"}
  ],
  "AI Chip Design": [
    {title:"AI Hardware Course - MIT",url:"https://www.youtube.com/watch?v=cdMFcVVl_cs",type:"video"},
    {title:"VLSI Quiz - Javatpoint",url:"https://www.javatpoint.com/vlsi-quiz",type:"quiz"}
  ],
};

function getResources(skill) {
  const key = Object.keys(SKILL_RESOURCES).find(
    k => k.toLowerCase() === skill.toLowerCase()
  );
  if (key) return SKILL_RESOURCES[key];
  return [{
    title: `Learn ${skill} on YouTube`,
    url: `https://www.youtube.com/results?search_query=learn+${encodeURIComponent(skill)}`,
    type: "video"
  }, {
    title: `${skill} Practice - W3Schools`,
    url: `https://www.w3schools.com/search/search_result.php?search=${encodeURIComponent(skill)}`,
    type: "quiz"
  }];
}

// Avatar Style Generator based on name
const getAvatarDetails = (name) => {
  const colors = [
    'bg-red-100 text-red-800 border-red-200',
    'bg-orange-100 text-orange-800 border-orange-200',
    'bg-amber-100 text-amber-800 border-amber-200',
    'bg-green-100 text-green-800 border-green-200',
    'bg-teal-100 text-teal-800 border-teal-200',
    'bg-blue-100 text-blue-800 border-blue-200',
    'bg-indigo-100 text-indigo-800 border-indigo-200',
    'bg-purple-100 text-purple-800 border-purple-200',
    'bg-pink-100 text-pink-800 border-pink-200',
  ];
  let sum = 0;
  const cleanName = name || 'Anonymous';
  for (let i = 0; i < cleanName.length; i++) {
    sum += cleanName.charCodeAt(i);
  }
  const colorClass = colors[sum % colors.length];
  
  const initials = cleanName
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
    
  return { colorClass, initials };
};

export default function Matches() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);

  async function fetchMatches() {
    if (!currentUser) return;
    setLoading(true);

    try {
      // 1. Fetch current user
      const currentUserRef = doc(db, 'users', currentUser.uid);
      const currentUserSnap = await getDoc(currentUserRef);
      
      if (!currentUserSnap.exists()) {
        setLoading(false);
        return;
      }

      const currentUserDoc = { uid: currentUserSnap.id, ...currentUserSnap.data() };
      const userWantedClean = (currentUserDoc.skillsWanted || []).map(s => s.trim().toLowerCase());

      // 2. Fetch all other users
      const usersRef = collection(db, 'users');
      const usersSnap = await getDocs(usersRef);
      
      const allOtherUsers = [];
      usersSnap.forEach((docSnap) => {
        if (docSnap.id !== currentUser.uid) {
          allOtherUsers.push({ uid: docSnap.id, ...docSnap.data() });
        }
      });

      // 3. Compute match scores & label
      const scoredUsers = allOtherUsers.map(otherUser => {
        let score = 0;
        
        (otherUser.skillsOffered || []).forEach(offeredObj => {
          const offeredSkillClean = (offeredObj.skill || '').trim().toLowerCase();
          if (userWantedClean.includes(offeredSkillClean)) {
            let skillScore = 2;
            const proficiency = (offeredObj.proficiency || offeredObj.level || '').trim().toLowerCase();
            if (proficiency === 'expert') {
              skillScore += 1;
            }
            score += skillScore;
          }
        });

        return {
          ...otherUser,
          score
        };
      });

      // 4. Sort matches: score > 0 descending first, then score === 0 after
      const sortedMatches = scoredUsers.sort((a, b) => {
        if (a.score > 0 && b.score > 0) {
          return b.score - a.score;
        }
        if (a.score > 0 && b.score === 0) {
          return -1;
        }
        if (a.score === 0 && b.score > 0) {
          return 1;
        }
        return 0; // both are 0, keep current order
      });

      setMatches(sortedMatches);
      
    } catch (error) {
      console.error("Error fetching matches:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMatches();
  }, [currentUser]);

  const handleSeed = async () => {
    setSeeding(true);
    try {
      await seedDemoUsers(db);
      await fetchMatches();
    } catch (e) {
      console.error("Seeding failed:", e);
    } finally {
      setSeeding(false);
    }
  };

  // Hide the seed button if demo_user_1 is already in the list
  const showSeedButton = !matches.some(user => user.uid === 'demo_user_1');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-xl text-blue-600">SkillSwap</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/profile" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">My Profile</Link>
              <Link to="/matches" className="text-blue-600 font-bold">Matches</Link>
              <Link to="/leaderboard" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Leaderboard</Link>
              <div 
                onClick={logout}
                className="text-gray-600 hover:text-red-600 font-medium transition-colors cursor-pointer"
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Your Skill Matches</h1>
            <p className="text-gray-500 mt-2">Connect with users who teach what you want to learn</p>
          </div>
          {showSeedButton && (
            <div 
              onClick={!seeding ? handleSeed : undefined}
              className={`mt-4 sm:mt-0 px-4 py-2 text-sm font-semibold rounded-lg shadow-sm border transition-colors cursor-pointer text-center ${
                seeding 
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' 
                  : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
              }`}
            >
              {seeding ? 'Loading Demo Users...' : 'Load Demo Users'}
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : matches.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-200">
            <p className="text-lg text-gray-500 font-medium">No other users found. Click 'Load Demo Users' to populate data.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {matches.map((user) => {
              const avatar = getAvatarDetails(user.name);
              return (
                <div key={user.uid} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="p-6">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-base ${avatar.colorClass}`}>
                          {avatar.initials}
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
                          <p className="text-xs text-gray-500">{user.college || 'SkillSwap Member'}</p>
                        </div>
                      </div>
                      
                      {/* Score Badge */}
                      {user.score > 0 ? (
                        <div className="bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                          Score: {user.score}
                        </div>
                      ) : (
                        <div className="bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                          Explore
                        </div>
                      )}
                    </div>

                    {/* Stats & Rating */}
                    <div className="mb-4 flex items-center space-x-3">
                      <div className="flex items-center text-xs font-semibold text-gray-700 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-250">
                        <span className="text-yellow-400 mr-1 text-sm leading-none">★</span>
                        <span>{(user.rating || 0).toFixed(1)}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-500 font-medium">
                        {(user.sessionsCount !== undefined ? user.sessionsCount : (user.sessionCount || 0))} sessions
                      </span>
                    </div>

                    {/* Bio */}
                    {user.bio && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 italic">
                        "{user.bio}"
                      </p>
                    )}

                    {/* Skills Offered & Wanted */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Can Teach You:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {user.skillsOffered && user.skillsOffered.length > 0 ? (
                            user.skillsOffered.map((skillObj, idx) => (
                              <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 border border-blue-100 text-blue-800">
                                {skillObj.skill} <span className="opacity-75 ml-1 text-[10px]">({skillObj.proficiency || skillObj.level})</span>
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-400 text-xs italic">None</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Wants to Learn:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {user.skillsWanted && user.skillsWanted.length > 0 ? (
                            user.skillsWanted.map((skillName, idx) => (
                              <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 border border-green-100 text-green-800">
                                {skillName}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-400 text-xs italic">None</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Resources Section */}
                    {user.skillsOffered && user.skillsOffered.length > 0 && (
                      <div className="mt-4 border-t border-gray-150 pt-4">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Learning Resources:</h4>
                        <div className="space-y-2">
                          {user.skillsOffered.map((skillObj, sIdx) => {
                            const resources = getResources(skillObj.skill);
                            return (
                              <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-2 rounded-lg border border-gray-100">
                                <span className="text-xs font-semibold text-gray-700 mb-1.5 sm:mb-0">
                                  {skillObj.skill}
                                </span>
                                <div className="flex flex-wrap gap-1">
                                  {resources.map((res, rIdx) => (
                                    <a
                                      key={rIdx}
                                      href={res.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                                        res.type === 'video'
                                          ? 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200'
                                          : 'bg-yellow-50 hover:bg-yellow-100 text-yellow-800 border-yellow-250'
                                      }`}
                                    >
                                      <span className="mr-1">{res.type === 'video' ? '🎥' : '📝'}</span>
                                      {res.title}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 border-t border-gray-50 bg-gray-50/50">
                    <div
                      onClick={() => navigate(`/chat/${user.uid}`)}
                      className="w-full flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors"
                    >
                      Connect & Chat
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
