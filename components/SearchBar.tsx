"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SearchManufacturer } from ".";

import { useRouter } from "next/navigation";

interface SearchBarProps {
  otherClasses?: string;
}
const SearchButton = ({ otherClasses }: SearchBarProps) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="/magnifying-glass.svg" alt="Search" width={40} height={40} />
  </button>
);
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search fields");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string , manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(model){
      searchParams.set("model", model); //update
    } else {
      searchParams.delete("model"); //remove
    }

    if(manufacturer){
      searchParams.set("manufacturer", manufacturer); //update
    } else { 
      searchParams.delete("manufacturer"); //remove
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathName, {scroll: false})
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Car Model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-8"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="eg. Tiguan"
          className="searchbar__input rounded-full ml-4"
        />
        <SearchButton otherClasses="" />
      </div>
    </form>
  );
};

export default SearchBar;
