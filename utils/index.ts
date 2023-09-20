import { CarCardProps, FilterProps } from "@/types";
import { API_KEY, CarImage_KEY } from "@/api_key";

//function to call the api
export async function fetchCars(filter: FilterProps) {
  const headers = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const { manufacturer, model, year, fuel, limit } = filter;
  const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");

  url.searchParams.append("make", manufacturer);
  url.searchParams.append("model", model);
  url.searchParams.append("year", `${year}`);
  url.searchParams.append("fuel_type", fuel);
  url.searchParams.append("limit", `${limit}`);


  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  return result;
}

//function to calculate rental price based on the year
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

//generate car image URL
export const generateCarImageURL = (
  car: CarCardProps["car"],
  angle?: string
) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", CarImage_KEY);
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

//update search params
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
}