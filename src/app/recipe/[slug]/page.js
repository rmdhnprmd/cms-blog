import Image from "next/image";
import { LiaClockSolid } from "react-icons/lia";
import client from "@/utils/contentful";

const fetchServices = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "recipe",
      limit: 1,
      "fields.slug": slug,
    });
    const item = response.items[0];
    // console.log("FetchServiceBlog", item.fields.method.content[0])

    const date = item.datePost;
    const datePost = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
    
   
    return {
      datePost: datePost,
      title: item.fields.title,
      thumbnail: item.fields.thumbnail.fields.file.url,
      thumbnailAlt: item.fields.thumbnail.fields.title,
      featuredImage: item.fields.featuredImage.fields.file.url,
      featuredImageAlt: item.fields.featuredImage.fields.title,
      ingredients: item.fields.ingredients,
      method: item.fields.method.content,
      cookingTime: item.fields.cookingTime,
    };
  } catch (error) {
    console.error("Error fetching blog data:", error.message);
  }
};

const Recipe = async ({ params }) => {
  const blogData = await fetchServices(params.slug);

  return (
    <article className="pt-40 pb-20 px-[8rem] bg-slate-100 text-slate-700">
      <div className="min-w-[600px] min-h-[600px]  rounded-full top-[30%] left-[50%] translate-x-[-50%] bg-gradient-to-r from-fuchsia-600 to-pink-600 absolute z-1 blur-[90px] "></div>
      <div className="bg-slate-300/40 py-20 rounded-2xl z-10 backdrop-blur-2xl relative">
        <div className="flex flex-col justify-center items-center text-center mx-auto w-1/2 mb-28">
          <h1 className="text-5xl font-extrabold mb-6">{blogData.title}</h1>
          <p>
            {blogData.datePost} •{" "}
            <span className=" font-bold uppercase">Recipe</span>
          </p>
        </div>

        <div className="w-4/5 mx-auto">
          <div className="max-w-fit mx-auto mb-16 ">
            <Image
              src={`https:${blogData.featuredImage}`}
              width={700}
              height={700}
              alt={blogData.featuredImageAlt}
              className=" rounded-xl w-auto h-auto"
              priority
            />
          </div>
        </div>

        <section className=" bg-slate-50/40 p-20 md:max-w-[800px] rounded-3xl mx-auto">
          <div className="flex flex-col gap-1">
            <div className=" text-sm flex gap-1 items-center mb-6 text-slate-50 px-3 md:ml-auto py-1 w-fit bg-slate-500 border-1 rounded-lg">
              <LiaClockSolid size={"1.5em"} />
              <p>Cooking {blogData.cookingTime}m</p>
            </div>
            <h2 className="text-xl font-semibold uppercase">
              Ingridients:
            </h2>

            <div className="mb-8">
              <ul>
                {
                  blogData.ingredients.map((item, i) => (
                    <li key={`list-${i}`} className="leading-loose list-disc ml-4">{item}</li>                 
                  ))
                }
              </ul>
            </div>
          </div>

          <section>
            <figure>
              {
                blogData.method.map((item, i) => (
                  <div key={`itemIndex-${i}`} className="mb-3">
                    {item.content && item.content[0].value}
                  </div>
                ))
              }
            </figure>
          </section>
        </section>
      </div>
    </article>
  );
};

export default Recipe;
