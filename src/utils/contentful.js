import { createClient } from "contentful";

export const getStaticProps = async() => {
  const client = createClient({
    spaces: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const response = await client.getEntries({ content_type: 'recipe'})
  return {
    props: {
      recipes: response.items
    }
  }
}

const Contentful = (recipes) => {
  console.log(recipes)

  return ( 
    <div>
      Contentful
    </div>
   );
}
 
export default Contentful;