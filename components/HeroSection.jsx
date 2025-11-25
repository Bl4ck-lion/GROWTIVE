import { GlassCard } from './GlassCard'
import { GradientButton } from './GradientButton'

export default function HeroSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <GlassCard className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-[#f093fb] bg-clip-text text-transparent mb-6">
            Belajar Jadi Menyenangkan
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Platform belajar kolaboratif dengan Virtual Study Room, gamifikasi, dan komunitas supportif
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton>
              🚀 Mulai Belajar Sekarang
            </GradientButton>
            <GradientButton variant="success">
              📚 Jelajahi Materi
            </GradientButton>
          </div>
        </GlassCard>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { number: "500+", label: "Study Rooms Aktif" },
          { number: "10K+", label: "Pelajar Bergabung" },
          { number: "95%", label: "Kepuasan Pengguna" }
        ].map((stat, index) => (
          <GlassCard key={index} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
