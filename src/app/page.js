import Blog from '@/components/Blog.module'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero.module'
import Navbar from '@/components/Navbar.module'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Blog />
      <Footer />
    </main>
  )
}
