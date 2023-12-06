import Image from "next/image";
import nasgor from "/public/nasi-goreng.avif";
import ButtonSmall from "./ui/buttonSmall";
import { LiaClockSolid } from "react-icons/lia";
import { createClient } from "contentful";

export const getStaticProps = async () => {
  const client = createClient({
    spaces: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  console.log(client)

  const res = await client.getEntries({ content_type: "recipe" });

  const response = await client.getEntries({ content_type: "recipe" });


  return {
    props: {
      recipes: res.items,
    },
  };
};

const Blog = ({ recipes }) => {
  

  return (
    <>
      <div className="px-4 py-36 lg:px-40 bg-slate-200 text-slate-800">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-lg font-bold">Receipe:</h1>
          <ButtonSmall text="view all" />
        </div>
        <div className="flex flex-col gap-10 items-center justify-center ">
          {/* List Blog */}
          <div className="flex items-center justify-center flex-col">
            <div className="bg-slate-50 lg:flex items-start justify-between gap-16 px-8 py-6 rounded-2xl">
              <div className="mb-4 lg:mb-0">
                <Image
                  className="rounded-xl w-80"
                  src={nasgor}
                  alt="nasgor"
                  priority
                />
              </div>
              <div className="flex flex-col lg:w-1/2 py-3">
                <div className="mb-12 flex justify-between items-center">
                  <span className="text-xs text-slate-400 uppercase">
                    December 13, 2021
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-400">
                    15m
                    <LiaClockSolid size={"1em"} />
                  </span>
                </div>
                <h1 className="text-2xl font-bold mb-3">
                  10 Hilarious Cartoons That Depict Real-Life Problems of
                  Programmers
                </h1>
                <p className="text-slate-600">
                  Redefined the user acquisition and redesigned the onboarding
                  experience, all within 3 working weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
