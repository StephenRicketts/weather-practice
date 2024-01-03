import axios from "axios";

export const useWeatherApi = () => {
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
