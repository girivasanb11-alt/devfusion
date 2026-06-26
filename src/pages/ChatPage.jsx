// ChatPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, onValue, push, serverTimestamp } from 'firebase/database';
import { db, rtdb } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function ChatPage() {
  const { matchId } = useParams();
  const { currentUser } = useAuth();
  
  const [loading, setLoading] = useState(true);
  const [matchDoc, setMatchDoc] = useState(null);
  const [otherUser, setOtherUser] = useState(null);
  
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Scheduling State
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [sessionDate, setSessionDate] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [meetLink, setMeetLink] = useState('');
  const [scheduleLoading, setScheduleLoading] = useState(false);

  // 1. Fetch Match & User Info
  useEffect(() => {
    async function fetchMatchDetails() {
      if (!currentUser || !matchId) return;
      
      try {
        const matchRef = doc(db, 'matches', matchId);
        const matchSnap = await getDoc(matchRef);
        
        if (matchSnap.exists()) {
          const mData = matchSnap.data();
          setMatchDoc(mData);
          
          // Determine who the other person is
          const otherUserId = mData.user1 === currentUser.uid ? mData.user2 : mData.user1;
          
          const otherUserSnap = await getDoc(doc(db, 'users', otherUserId));
          if (otherUserSnap.exists()) {
            setOtherUser({ uid: otherUserId, ...otherUserSnap.data() });
          }
        }
      } catch (error) {
        console.error("Error fetching match details:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchMatchDetails();
  }, [matchId, currentUser]);

  // 2. Real-time Messages Listener
  useEffect(() => {
    if (!matchId) return;
    
    const messagesRef = ref(rtdb, `chats/${matchId}/messages`);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to array and sort by timestamp
        const msgList = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        
        setMessages(msgList);
      } else {
        setMessages([]);
      }
    });

    return () => unsubscribe();
  }, [matchId]);

  // 3. Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle Send Message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !currentUser) return;

    try {
      const messagesRef = ref(rtdb, `chats/${matchId}/messages`);
      await push(messagesRef, {
        senderUid: currentUser.uid,
        text: newMessage.trim(),
        timestamp: serverTimestamp() // RTDB server timestamp
      });
      setNewMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Handle Scheduling
  const handleScheduleSession = async (e) => {
    e.preventDefault();
    if (!sessionDate || !sessionTime || !meetLink) return alert("Please fill all fields");

    setScheduleLoading(true);
    try {
      const matchRef = doc(db, 'matches', matchId);
      await updateDoc(matchRef, {
        sessionDate,
        sessionTime,
        meetLink,
        status: 'scheduled'
      });
      
      // Update local state
      setMatchDoc(prev => ({
        ...prev,
        sessionDate,
        sessionTime,
        meetLink,
        status: 'scheduled'
      }));
      setIsPanelOpen(false);
    } catch (error) {
      console.error("Error scheduling:", error);
      alert("Failed to schedule session.");
    } finally {
      setScheduleLoading(false);
    }
  };

  // Time formatter
  const formatTime = (ts) => {
    if (!ts) return '';
    const date = new Date(ts);
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  if (loading) {
    return <div className="flex h-screen items-center justify-center bg-gray-50">Loading chat...</div>;
  }

  if (!matchDoc || !otherUser) {
    return <div className="flex h-screen items-center justify-center bg-gray-50">Match not found.</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 max-w-4xl mx-auto shadow-xl">
      {/* HEADER */}
      <div className="bg-white px-4 py-3 border-b flex justify-between items-center shadow-sm z-10">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{otherUser.name}</h2>
          <p className="text-xs text-gray-500">{otherUser.college}</p>
        </div>
        <button 
          onClick={() => setIsPanelOpen(!isPanelOpen)}
          className="text-sm px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 font-medium transition-colors"
        >
          {isPanelOpen ? 'Close Panel' : 'Schedule Session'}
        </button>
      </div>

      {/* SCHEDULED BANNER */}
      {matchDoc.status === 'scheduled' && (
        <div className="bg-green-50 border-b border-green-200 px-4 py-3 flex items-center justify-between z-10">
          <div>
            <p className="text-sm text-green-800 font-medium">
              Session scheduled for {matchDoc.sessionDate} at {matchDoc.sessionTime}
            </p>
          </div>
          <a 
            href={matchDoc.meetLink.startsWith('http') ? matchDoc.meetLink : `https://${matchDoc.meetLink}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 font-medium"
          >
            Join Link
          </a>
        </div>
      )}

      {/* CHAT MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          const isOwn = msg.senderUid === currentUser.uid;
          
          return (
            <div key={msg.id} className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] sm:max-w-[60%] flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
                
                {/* Sender Name */}
                <span className="text-xs text-gray-500 mb-1 ml-1 mr-1">
                  {isOwn ? 'You' : otherUser.name.split(' ')[0]}
                </span>
                
                {/* Bubble & Timestamp Wrapper */}
                <div className={`flex items-end gap-2 ${isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Bubble */}
                  <div 
                    className={`px-4 py-2 rounded-2xl ${
                      isOwn 
                        ? 'bg-purple-600 text-white rounded-br-sm' 
                        : 'bg-gray-200 text-gray-800 rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  
                  {/* Timestamp */}
                  <span className="text-[10px] text-gray-400 mb-1">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* SCHEDULING PANEL (COLLAPSIBLE) */}
      {isPanelOpen && (
        <div className="bg-white border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-10 transition-all">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Schedule a Learning Session</h3>
          <form onSubmit={handleScheduleSession} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="date" 
              required
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
              className="flex-1 border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" 
            />
            <input 
              type="time" 
              required
              value={sessionTime}
              onChange={(e) => setSessionTime(e.target.value)}
              className="flex-1 border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" 
            />
            <input 
              type="text" 
              placeholder="Session link (Meet/Zoom)"
              required
              value={meetLink}
              onChange={(e) => setMeetLink(e.target.value)}
              className="flex-[2] border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" 
            />
            <button 
              type="submit" 
              disabled={scheduleLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
            >
              {scheduleLoading ? 'Saving...' : 'Schedule session'}
            </button>
          </form>
        </div>
      )}

      {/* MESSAGE INPUT BOX */}
      <div className="bg-white px-4 py-3 border-t z-10">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-100 border-transparent rounded-full px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="bg-purple-600 text-white rounded-full p-2 h-10 w-10 flex items-center justify-center hover:bg-purple-700 disabled:opacity-50 transition-colors"
          >
            <svg className="w-5 h-5 transform rotate-90 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 0l-7 7m7-7l7 7" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
