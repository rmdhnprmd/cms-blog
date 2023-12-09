import client from "./contentful";

export const fetchServices = async (contentType, params = {}) => {
  try {
    const response = await client.getEntries({
      content_type: contentType,
      ...params,
    })

    return response.items
  } catch (error) {
    console.error('Error fetching content from Contentful:', error.message);
    return [];
  }
}