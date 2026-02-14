"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [showProposal, setShowProposal] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  // Calculate days together since December 6, 2024
  const startDate = new Date("2024-12-06");
  const today = new Date();
  const daysTogether = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    // Generate floating hearts
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setHearts(newHearts);
  }, []);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoButtonPosition({ x, y });
  };

  const memories = [
    {
      emoji: "💝",
      title: "The Surprise Visits",
      description: "Those days when you didn't go to work, and I wished to see you... then you just appeared as a surprise. You have no idea how much that made my day!",
    },
    {
      emoji: "💇‍♂️",
      title: "The Secret Haircut",
      description: "Remember when you paid for my haircut without me knowing? That moment showed me how thoughtful and caring you truly are.",
    },
    {
      emoji: "🥰",
      title: "Always Checking On Me",
      description: "The way you always ask if I'm okay, how you genuinely care about me... these 'little' things mean the world to me.",
    },
  ];

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-400 to-pink-500 flex items-center justify-center relative overflow-hidden">
        {/* Celebration hearts */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          >
            {["❤️", "💕", "💖", "💗", "💓", "💝", "🥰", "😍"][Math.floor(Math.random() * 8)]}
          </div>
        ))}
        <div className="text-center z-10 p-8 bg-white/90 rounded-3xl shadow-2xl max-w-lg mx-4 animate-pulse">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">YAAAY! 🎉</h1>
          <p className="text-2xl text-gray-700 mb-4">You just made me the happiest person alive!</p>
          <p className="text-6xl mb-4">💑</p>
          <p className="text-xl text-pink-500 font-semibold">I love you, Birago Amoako! ❤️</p>
          <p className="text-lg text-gray-600 mt-4">Here&apos;s to forever together! 🌹</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 relative overflow-hidden">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-2xl opacity-60 animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: "-20px",
            animation: `float ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {["❤️", "💕", "💖", "💗"][heart.id % 4]}
        </div>
      ))}

      {!showProposal ? (
        // Landing page
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center animate-fade-in">
            <p className="text-6xl mb-4">💌</p>
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
              Hey Birago Amoako! 🥰
            </h1>
            <p className="text-xl text-gray-600 mb-2">I have something special for you...</p>
            <p className="text-lg text-pink-400 mb-8">
              {daysTogether} beautiful days together and counting! 💕
            </p>
            <button
              onClick={() => setShowProposal(true)}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              Open My Heart 💝
            </button>
          </div>
        </div>
      ) : (
        // Main proposal page
        <div className="min-h-screen py-12 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <p className="text-5xl mb-4">💖</p>
              <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
                My Dearest Birago Amoako
              </h1>
              <p className="text-gray-600 text-lg">
                Since December 6th, 2024 • {daysTogether} days of happiness
              </p>
            </div>

            {/* Love letter */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                My love, as I sit here thinking about us, I realize how incredibly blessed I am to have you in my life. 
                You are such a thoughtful person, and I want to take this Valentine&apos;s Day to truly appreciate everything you do.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The little things you do might seem small to you, but they mean absolutely everything to me. 
                Your gestures of love speak louder than any words ever could. 💕
              </p>
            </div>

            {/* Memories section */}
            <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
              Moments I Cherish Forever 💭
            </h2>
            <div className="space-y-4 mb-12">
              {memories.map((memory, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{memory.emoji}</span>
                    <div>
                      <h3 className="font-bold text-pink-600 text-lg mb-2">{memory.title}</h3>
                      <p className="text-gray-600">{memory.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* The proposal */}
            <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl shadow-2xl p-8 text-center text-white mb-8">
              <p className="text-5xl mb-4">💍</p>
              <h2 className="text-3xl font-bold mb-4">The Big Question...</h2>
              <p className="text-xl mb-8 opacity-90">
                Birago Amoako, will you be my Valentine? 💝
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setAccepted(true)}
                  className="bg-white text-pink-600 px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                >
                  Yes! 💕
                </button>
                <button
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                  className="bg-gray-200 text-gray-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                  style={{
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  }}
                >
                  No 😢
                </button>
              </div>
            </div>

            {/* Footer message */}
            <div className="text-center text-gray-600">
              <p className="text-lg">Made with all my love, just for you 💖</p>
              <p className="text-2xl mt-2">I love you, Birago Amoako! 🌹</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
