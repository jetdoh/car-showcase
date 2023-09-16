import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  btnType?: "button" | "submit";
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
  car: {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  };
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: {
        city_mpg: number;
        class: string;
        combination_mpg: number;
        cylinders: number;
        displacement: number;
        drive: string;
        fuel_type: string;
        highway_mpg: number;
        make: string;
        model: string;
        transmission: string;
        year: number;
      };
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}