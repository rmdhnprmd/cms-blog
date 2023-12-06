
import Blog from "@/components/Blog.module";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero.module";
import Navbar from "@/components/Navbar.module";
import client from "@/utils/contentful";

const fetchServices = async () => {
  const response = await client.getEntries({ content_type: "recipe" });
  // console.log("fetching:", response.items[0].fields.method.content);

  const recipes = response.items.map((item) => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      method: item.fields.method.content,
      slug: item.fields.slug,
      thumbnail: item.fields.thumbnail.fields.file.url,
      thumbnailAlt: item.fields.thumbnail.fields.title,
      featuredImage: item.fields.featuredImage.fields.file.url,
      featuredImageAlt: item.fields.featuredImage.fields.title,
      ingredients: item.fields.ingredients,
      cookingTime: item.fields.cookingTime,
      datePost: item.sys.createdAt,
    };
  });

  return recipes;
};

export default async function Home() {
  const recipes = await fetchServices();
  // console.log("fetchService", recipes)

  return (
    <main>
      <Navbar />
      <Hero />
      <Blog recipes={recipes} />
      <Footer />
    </main>
  );
}
