import Hero from '@/components/Hero.module'
import Navbar from '@/components/Navbar.module'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}
