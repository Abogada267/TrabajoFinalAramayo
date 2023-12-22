import axios from "axios";

const searchImages = async (term) => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID YUcbnO0ur5fXZUrhINIZO3DenWrx_7xn_Uy-JfS2noY",
      },
      params: {
        query: term,
      },
    });

   
      return response.data.results 
  } 

export default searchImages;
