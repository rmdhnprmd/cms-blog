
import Image from "next/image";
import ButtonSmall from "./ui/buttonSmall";
import { LiaClockSolid } from "react-icons/lia";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Blog = ({ recipes }) => {
  // console.log("ini ID nya:", recipes.id)
  const date = recipes.datePost;
  const datePost = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <>
      <div
        className="px-4 py-36 lg:px-40 bg-slate-200 text-slate-800"
      >
        <div className="flex items-center justify-between xl:w-[1280px] mx-auto w-[80vw] sm:w-[540px] md:w-[720px] lg:w-[900px]  mb-10">
          <h1 className="text-lg font-bold">Recipe:</h1>
          <ButtonSmall text="view all" />
        </div>
        <div className="flex flex-col gap-10 items-center justify-center ">
          {/* List Blog */}

          {recipes.map((recipe) => {
            
            return (
              <Link key={recipe.slug} href={`/recipe/${recipe.slug}`}>
                <figure
                  
                  className="bg-slate-50 lg:flex items-start justify-between gap-16 px-8 py-6 rounded-2xl w-[80vw] sm:w-[540px] md:w-[720px] lg:w-[900px] xl:w-[1280px] hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
                >
                  <div className="mb-4 lg:mb-0 max-w-sm">
                    <Image
                      className="rounded-xl max-w-[inherit] w-auto"
                      src={`https:${recipe.thumbnail}`}
                      alt="nasgor"
                      width={500}
                      height={500}
                      priority
                    />
                  </div>
                  <div className="flex flex-col lg:w-1/2 py-3">
                    <div className="mb-12 flex justify-between items-center">
                      <span className="text-xs text-slate-400 uppercase">
                        {datePost}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-slate-400">
                        {recipe.cookingTime}m
                        <LiaClockSolid size={"1em"} />
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold mb-3">{recipe.title}</h1>
                    <div>
                      {documentToReactComponents(recipe.method)}
                    </div>
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
