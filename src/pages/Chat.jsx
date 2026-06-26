import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { ref, onValue, push } from 'firebase/database';
import { db, rtdb } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function Chat() {
  const { uid } = useParams(); // other user's uid
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [otherUser, setOtherUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const messagesEndRef = useRef(null);

  // Fetch other user's info
  useEffect(() => {
    async function fetchOtherUser() {
      if (!uid) return;
      try {
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setOtherUser(userSnap.data());
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchOtherUser();
  }, [uid]);

  // Subscribe to messages
  useEffect(() => {
    if (!currentUser || !uid) return;

    const roomId = [currentUser.uid, uid].sort().join('_');
    const messagesRef = ref(rtdb, `chats/${roomId}/messages`);

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
      setLoading(false);
    }, (error) => {
      console.error("Error fetching messages:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser, uid]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim() || !currentUser || !uid) return;

    try {
      const roomId = [currentUser.uid, uid].sort().join('_');
      const messagesRef = ref(rtdb, `chats/${roomId}/messages`);
      await push(messagesRef, {
        senderUid: currentUser.uid,
        text: newMessage.trim(),
        timestamp: Date.now()
      });
      setNewMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center space-x-3">
          <div 
            onClick={() => navigate('/matches')}
            className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">{otherUser ? otherUser.name : 'Loading...'}</h2>
            {otherUser && (
              <p className="text-xs text-gray-500">{otherUser.college || 'SkillSwap Member'}</p>
            )}
          </div>
        </div>

        {messages.length >= 3 && (
          <div 
            onClick={() => navigate(`/review/${uid}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors shadow-sm"
          >
            Rate Session
          </div>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 px-4 text-center">
            <svg className="w-12 h-12 mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-sm font-medium">No messages yet. Send a message to start swapping skills!</p>
          </div>
        ) : (
          messages.map((msg) => {
            const isOwn = msg.senderUid === currentUser?.uid;
            return (
              <div key={msg.id} className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] sm:max-w-[60%] flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
                  <div className={`px-4 py-2.5 rounded-2xl shadow-sm text-sm break-words whitespace-pre-wrap ${
                    isOwn 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-gray-200 text-gray-800 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Rate notice if >= 3 messages */}
      {messages.length >= 3 && (
        <div className="bg-blue-50 border-t border-blue-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-blue-800">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium">Have you finished your learning session? You can now rate it.</span>
          </div>
          <div 
            onClick={() => navigate(`/review/${uid}`)}
            className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 rounded-lg cursor-pointer transition-colors shadow-sm whitespace-nowrap"
          >
            Rate Session
          </div>
        </div>
      )}

      {/* Input Box */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center space-x-2 max-w-4xl mx-auto">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            className="flex-1 bg-gray-100 border border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          <div
            onClick={handleSend}
            className={`rounded-xl p-3 flex items-center justify-center cursor-pointer transition-colors ${
              newMessage.trim() 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 0l-7 7m7-7l7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
