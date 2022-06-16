import axios from "axios";
import { BaseUrl } from "../Baseurl";

export default async (url, method = "GET", data = null, id = null) => {
  const token = localStorage.getItem("setToken");
  const path = id ? url + /id/ + id : url;
  if (url) {
    try {
      return await axios({
        method: method,
        url: BaseUrl + path,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
};
