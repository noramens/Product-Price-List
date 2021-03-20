import axios from "axios";

export default async function fetchPriceList(setData) {
  try {
    const { data } = await axios.get(
      "http://www.mocky.io/v2/5c3e15e63500006e003e9795",
      {
        withCredentials: true,
      }
    );
    setData(data && data.products);
  } catch (error) {
    console.log("error: ", error);
  }
}
