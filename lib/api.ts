import axios from 'axios';

export const fetchWeatherData = async (localityId: string) => {
  const options = {
    method: 'GET',
    url: 'https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data',
    params: { locality_id: localityId },
    headers: { 'X-Zomato-Api-Key': '99a3c8a9e6ccb3c1faebc0330515b044' },
  };

  const { data } = await axios.request(options);
  return data;
};
