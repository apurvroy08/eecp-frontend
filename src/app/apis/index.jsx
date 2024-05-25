import { Endpoints } from "../utils/Endpoints";
import { MakeRequest } from "../utils/Makerequest";
import Cookies from "js-cookie";

export const getCenterList = async () => {
  const response = await MakeRequest.GET(Endpoints.GET_CENTER);
  const result = response.data.data;
  return result;
};

export const getAvailableDate = async () => {
  const response = await MakeRequest.GET(Endpoints.GET_DATE);
  const result = response.data.data;
  return result;
};

export const getAvailableTime = async (id) => {
  const postData = {
    date_id: id,
  };
  const response = await MakeRequest.POST(Endpoints.POST_TIME, postData);
  const result = response.data.data;
  return result;
};

export const createAppoinments = async (data) => {
  const utmSource = Cookies.get("utm_source");
  const utmMedium = Cookies.get("utm_medium");
  const utmCampaign = Cookies.get("utm_campaign");
  data.utm_source = utmSource;
  data.utm_medium = utmMedium;
  data.utm_campaign = utmCampaign;
  try {
    const response = await MakeRequest.POST(Endpoints.POST_APPOINMENTS, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createContact = async (data) => {
  const utmSource = Cookies.get("utm_source");
  const utmMedium = Cookies.get("utm_medium");
  const utmCampaign = Cookies.get("utm_campaign");
  data.utm_source = utmSource;
  data.utm_medium = utmMedium;
  data.utm_campaign = utmCampaign;

  console.log("data", data);
  try {
    const response = await MakeRequest.POST(Endpoints.POST_CONTACT, data);
    return response;
  } catch (error) {
    throw error;
  }
};