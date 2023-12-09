import axiosInstance from "@/utils/axios";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { LiaClockSolid } from "react-icons/lia";

export const getBlog = async (slug) => {
  try {
    const res = await axiosInstance.get("/entries", {
      params: {
        content_type: 'recipe',
        "fields.slug": slug,
        limit: 1,
      }
    })

    const date = new Date(res.data.items[0].sys.createdAt);
    const datePost = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
    

    const items = {
      datePost,
      title: res.data.items[0].fields.title,
      ingredients: res.data.items[0].fields.ingredients,
      desc: res.data.items[0].fields.method,
      cookingTime: res.data.items[0].fields.cookingTime,
    }

    const assets = {
      img: res.data.includes.Asset[0].fields.file.url,
      alt: res.data.includes.Asset[0].fields.title
    }

    return {items, assets}
    
  } catch (error) {
    console.error("Error fetching blog data:", error.message);
    return null; // Return null or handle the error appropriately
  }
};

const Recipe = async ({params}) => {
  const {items: blogData, assets} = await getBlog(params.slug)
  const {desc} = blogData
  // console.log("ini desc", desc)

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
              src={`https:${assets.img}`}
              width={500}
              height={500}
              alt={assets.alt}
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
            <h2 className="text-xl font-semibold uppercase">Ingredients:</h2>

            <div className="mb-8">
              <ul>
                {blogData.ingredients.map((item, i) => (
                  <li
                    key={`list-${i}`}
                    className="leading-loose list-disc ml-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section>
            <figure>
              {documentToReactComponents(desc)}
            </figure>
          </section>
        </section>
      </div>
    </article>
  );
};

export default Recipe;
