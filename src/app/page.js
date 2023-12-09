import Blog from "@/components/Blog.module";
import Hero from "@/components/Hero.module";
import client from "@/utils/contentful";

export const fetchServices = async () => {
  const response = await client.getEntries({ content_type: "recipe" });
  // console.log("fetching:", response.items[0]);

  try {
    const recipes = response.items.map((item) => {
      return {
        id: item.sys.id,
        title: item.fields.title,
        method: item.fields.method,
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
  } catch (error) {
    console.log(error.message);
  }
};

export default async function Home() {
  const recipes = await fetchServices();
  // console.log("fetchService", recipes)

  return (
    <main>
      <Hero />
      <Blog recipes={recipes} />
    </main>
  );
}
