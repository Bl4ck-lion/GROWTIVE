import { GlassCard } from './GlassCard'
import { useState, useEffect } from 'react'

export default function MaterialLibrary() {
  const [materials, setMaterials] = useState([])

  useEffect(() => {
    // Load materials from JSON file
    fetch('/data/materials.json')
      .then(response => response.json())
      .then(data => setMaterials(data.materials))
      .catch(error => console.error('Error loading materials:', error))
  }, [])

  return (
    <div className="py-8">
      <GlassCard className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">📚 Library Materi</h2>
        <p className="text-white/80">Pilih materi yang ingin kamu pelajari</p>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {materials.map((material, index) => (
          <GlassCard key={index} className="text-center hover:scale-105 transition-transform duration-300">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${material.color} flex items-center justify-center text-white text-2xl`}>
              {material.level === 'SD' ? '👦' : material.level === 'SMP' ? '👨‍🎓' : '👩‍🎓'}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{material.title}</h3>
            <p className="text-white/70 text-sm mb-3">{material.level} • {material.lessons} Pelajaran</p>
            <button className="glass-card px-4 py-2 text-white text-sm rounded-lg hover:bg-white/20 transition-colors">
              Pelajari →
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
