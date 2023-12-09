import Image from "next/image";
import ButtonSmall from "./ui/buttonSmall";
import { LiaClockSolid } from "react-icons/lia";
import Link from "next/link";
import axiosInstance from "@/utils/axios";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function fetchBlogs() {
  try {
    const res = await axiosInstance.get("/entries", {
      params: {
        content_type: "recipe",
        include: 2,
      },
    });

    const recipes = res.data.items.map((item) => {
      const date = new Date(item.sys.createdAt);
      const datePost = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date)

      return {
        title: item.fields.title,
        desc: item.fields.method,
        slug: item.fields.slug,
        cookingTime: item.fields.cookingTime,
        datePost: datePost,
        imgId: item.fields.thumbnail.sys.id
      };
    });

    const assets = res.data.includes.Asset.map((item) => {
      return {
        imgId: item.sys.id,
        img: item.fields.file.url,
        imgTitle: item.fields.title
      }
    })

    const recipesWithImages = recipes.map((recipe) => {
      // Find the corresponding asset for the current recipe
      const matchingAsset = assets.find((asset) => asset.imgId === recipe.imgId);
    
      // If a matching asset is found, add the image information to the recipe
      if (matchingAsset) {
        return {
          ...recipe,
          img: matchingAsset.img,
        };
      }
    
      // If no matching asset is found, return the original recipe
      return recipe;
    });
    
    return recipesWithImages
    // return recipesWithImages;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

const Blog = async () => {
  const recipes = await fetchBlogs();

  return (
    <>
      <div className="px-4 py-36 lg:px-40 bg-slate-200 text-slate-800">
        <div className="flex items-center justify-between xl:w-[1280px] mx-auto w-[80vw] sm:w-[540px] md:w-[720px] lg:w-[900px]  mb-10">
          <h1 className="text-lg font-bold">Recipe:</h1>
          <ButtonSmall text="view all" />
        </div>
        <div className="flex flex-col gap-10 items-center justify-center ">
          {recipes.map((recipe, i) => {
            // console.log(assets[0])
            return (
              <Link key={recipe.slug} href={`/recipe/${recipe.slug}`}>
                <figure className="bg-slate-50 lg:flex items-start justify-between gap-16 px-8 py-6 rounded-2xl w-[80vw] sm:w-[540px] md:w-[720px] lg:w-[900px] xl:w-[1280px] hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
                  <div className="mb-4 lg:mb-0 max-w-sm">
                    <Image
                      className="rounded-xl max-w-[inherit] w-auto"
                      src={`https:${recipe.img}`}
                      alt={`this is picture ${recipe.imgAlt}`}
                      width={500}
                      height={500}
                      priority
                    />
                  </div>
                  <div className="flex flex-col lg:w-1/2 py-3">
                    <div className="mb-12 flex justify-between items-center">
                      <span className="text-xs text-slate-400 uppercase">
                        {recipe.datePost}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-slate-400">
                        {recipe.cookingTime}m
                        <LiaClockSolid size={"1em"} />
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold mb-3">{recipe.title}</h1>
                    {documentToReactComponents(recipe.desc)}
                  </div>
                </figure>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
