import Blog from '@/components/Blog.module'
import Hero from '@/components/Hero.module'
import Navbar from '@/components/Navbar.module'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Blog />
    </main>
  )
}
