import axios from "axios";
import { useEffect, useState } from "react";

export const useWeatherApi = () => {
  const [token, setToken] = useState<string | null>();

  const fetchToken = async () => {
    const username = import.meta.env.VITE_API_USERNAME;
    const password = import.meta.env.VITE_API_PASSWORD;
    console.log("this is username,", username);
    console.log("this is password", password);
    const tokenUrl = "https://login.meteomatics.com/api/v1/token";
    let headers = new Headers();

    const config = {
      headers: {
        header1: headers,
      },
    };
    try {
      const response = await axios.get(tokenUrl, {
        headers: {
          Authorization: "Basic " + btoa(username + ":" + password),
        },
      });
      console.log("this is token response", response);
    } catch (error) {
      console.log("error fetching token", error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  // fetch("https://login.meteomatics.com/api/v1/token", {
  //   method: "GET",
  //   headers: headers,
  // })
  //   .then(function (resp) {
  //     return resp.json();
  //   })
  //   .then(function (data) {
  //     var token = data.access_token;
  //     console.log("token", token);
  //   })
  //   .catch(function (err) {
  //     console.log("something went wrong", err);
  //   });

  const fetchWeatherData = async () => {
    try {
      const url =
        "https://api.meteomatics.com/2024-01-03T00:00:00Z--2024-01-03T03:00:00Z:PT1H/t_2m:C,relative_humidity_2m:p/50.23,10.23+40.23,20.12/json";
      const response = await axios.get(url);
      console.log("this is response", response);
      const parsedData = JSON.parse(response.data);
      console.log("this is parsedData", parsedData);
    } catch (error) {
      throw error;
    }
  };

  return { fetchWeatherData };
};
