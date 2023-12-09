import Blog from "@/components/Blog.module";
import Hero from "@/components/Hero.module";

export default async function Home() {

  return (
    <main>
      <Hero />
      <Blog />
    </main>
  );
}
