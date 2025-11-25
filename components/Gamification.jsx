import { GlassCard } from './GlassCard'
import { useState } from 'react'

export default function Gamification() {
  const [badges] = useState([
    { emoji: "🔥", name: "7 Days Streak", earned: true },
    { emoji: "🏆", name: "Study Master", earned: true },
    { emoji: "🤝", name: "Helpful Buddy", earned: false },
    { emoji: "⚡", name: "Fast Learner", earned: true }
  ])

  return (
    <GlassCard>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">🎮 Progress Belajar</h2>
      
      {/* Level Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-white mb-2 text-sm md:text-base">
          <span>Level 5</span>
          <span>450/1000 XP</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3 md:h-4">
          <div 
            className="bg-gradient-to-r from-[#4fd1c7] to-[#81e6d9] h-3 md:h-4 rounded-full transition-all duration-500"
            style={{ width: '45%' }}
          ></div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {badges.map((badge, i) => (
          <div key={i} className={`
            glass-card rounded-xl p-3 text-center transition-all duration-300
            ${badge.earned ? 'scale-100 opacity-100' : 'scale-90 opacity-50'}
          `}>
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">{badge.emoji}</div>
            <div className="text-white font-medium text-xs md:text-sm">{badge.name}</div>
            {badge.earned && (
              <div className="text-[#4fd1c7] text-xs mt-1">✓ Earned</div>
            )}
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
