import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home( { searchParams } ) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    limit: searchParams.limit || 10,
    fuel: searchParams.fuel || "",
    year: searchParams.year || 2022,
  });

  console.log(allCars);

  const isDataEmpty =
    !Array.isArray(allCars) || allCars.length === 0 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore cars you might like</p>

          <div className="home__filter "></div>
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" option = {fuels}/>
            <CustomFilter title="year" option = {yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
