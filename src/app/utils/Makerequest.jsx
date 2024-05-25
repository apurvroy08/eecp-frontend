import axios from "axios";

export const MakeRequest = {
  GET: async (url) => {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error("Get request failed:", error);
      throw error;
    }
  },
  POST: async (url, data) => {
    try {
      const response = await axios.post(url,data);
      return response;
    } catch (error) {
      console.error("POST request failed:", error);
      throw error;
    }
  },
};
