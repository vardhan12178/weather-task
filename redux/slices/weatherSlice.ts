import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import mockData from '@/public/mockData.json';

interface WeatherState {
  temperature: string | null;
  humidity: string | null;
  windSpeed: string | null;
  windDirection: string | null;
  rainIntensity: string | null;
  rainAccumulation: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  errorMessage: string | null;
}

const initialState: WeatherState = {
  temperature: null,
  humidity: null,
  windSpeed: null,
  windDirection: null,
  rainIntensity: null,
  rainAccumulation: null,
  status: 'idle',
  errorMessage: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (locality: string) => {
    const localityData = mockData.find((loc) => loc.locality === locality);
    if (!localityData) throw new Error('Locality not found');

    const options = {
      method: 'GET',
      url: 'https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data',
      params: { locality_id: localityData.localityId },
      headers: { 'X-Zomato-Api-Key': '99a3c8a9e6ccb3c1faebc0330515b044' },
    };

    const { data } = await axios.request(options);

    return {
      temperature: data.locality_weather_data.temperature,
      humidity: data.locality_weather_data.humidity,
      windSpeed: data.locality_weather_data.wind_speed,
      windDirection: data.locality_weather_data.wind_direction,
      rainIntensity: data.locality_weather_data.rain_intensity,
      rainAccumulation: data.locality_weather_data.rain_accumulation,
    };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.temperature = action.payload.temperature;
        state.humidity = action.payload.humidity;
        state.windSpeed = action.payload.windSpeed;
        state.windDirection = action.payload.windDirection;
        state.rainIntensity = action.payload.rainIntensity;
        state.rainAccumulation = action.payload.rainAccumulation;
        state.errorMessage = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.errorMessage = action.error.message || 'Failed to fetch weather data';
      });
  },
});

export default weatherSlice.reducer;
