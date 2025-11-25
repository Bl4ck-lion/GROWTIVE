import { GlassCard } from './GlassCard'
import { GradientButton } from './GradientButton'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function StudyRoom() {
  const router = useRouter()
  const { roomId } = router.query
  
  const [messages, setMessages] = useState([
    { user: "Andi", text: "Hai, ready belajar matematika?", isMe: false },
    { user: "Kamu", text: "Ready! Ayo mulai dari soal nomor 1", isMe: true }
  ])
  
  const [newMessage, setNewMessage] = useState('')
  
  const participants = [
    { name: "Kamu", online: true, isMe: true },
    { name: "Andi", online: true, isMe: false },
    { name: "Sari", online: true, isMe: false },
    { name: "Rina", online: false, isMe: false }
  ]

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages(prev => [...prev, {
        user: "Kamu",
        text: newMessage,
        isMe: true
      }])
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Room Header */}
        <GlassCard className="mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Study Room: {roomId || 'Loading...'}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm md:text-base">
                <span>👥 4/5 Anggota</span>
                <span>⏰ 45 menit tersisa</span>
                <span>🎯 Algebra Dasar</span>
              </div>
            </div>
            <GradientButton className="mt-4 md:mt-0">
              📞 Mulai Video Call
            </GradientButton>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video & Whiteboard Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Container */}
            <GlassCard>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Video Call</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-video bg-black/30 rounded-xl flex items-center justify-center">
                  <span className="text-white">Video Kamu</span>
                </div>
                <div className="aspect-video bg-black/30 rounded-xl flex items-center justify-center">
                  <span className="text-white">Partner Belajar</span>
                </div>
              </div>
            </GlassCard>

            {/* Collaborative Whiteboard */}
            <GlassCard>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Whiteboard Kolaboratif</h3>
              <div className="bg-white/10 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-white/20">
                <span className="text-white/60">Whiteboard Area - Mulai menggambar!</span>
              </div>
            </GlassCard>
          </div>

          {/* Chat & Participants Sidebar */}
          <div className="space-y-6">
            {/* Chat Box */}
            <GlassCard className="h-96 flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">💬 Chat Room</h3>
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`p-3 rounded-xl ${
                    msg.isMe ? 'bg-[#667eea]/30 ml-4' : 'bg-white/10 mr-4'
                  }`}>
                    <div className="font-medium text-white text-sm">{msg.user}</div>
                    <div className="text-white/80 text-sm">{msg.text}</div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ketik pesan..."
                  className="flex-1 glass-card rounded-xl px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#667eea] text-sm"
                />
                <button 
                  onClick={sendMessage}
                  className="glass-card rounded-xl px-3 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  📤
                </button>
              </div>
            </GlassCard>

            {/* Participants */}
            <GlassCard>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">👥 Participants</h3>
              <div className="space-y-2">
                {participants.map((user, i) => (
                  <div key={i} className="flex items-center space-x-3 p-2 rounded-lg bg-white/10">
                    <div className={`w-2 h-2 rounded-full ${
                      user.online ? 'bg-[#4fd1c7]' : 'bg-gray-400'
                    }`}></div>
                    <div className="text-white text-sm flex-1">{user.name}</div>
                    {user.isMe && <span className="text-xs bg-[#667eea] px-2 py-1 rounded-full">Kamu</span>}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
