import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import Gamification from '../components/Gamification'
import MaterialLibrary from '../components/MaterialLibrary'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <MaterialLibrary />
        </div>
        <div>
          <Gamification />
        </div>
      </div>
    </Layout>
  )
}
