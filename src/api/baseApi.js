const ENDPOINT = "https://dev-brand.api.vaultik.com/";

export const apiGet = async (subUrl, params) => {
  try {
    const result = await fetch(
      ENDPOINT + subUrl,
      {
        method: "GET",
        headers: {},
      }
    );
    const response = await result.json();
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};