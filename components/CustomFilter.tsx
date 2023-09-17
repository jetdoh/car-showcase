"use client";
import { CustomFilterProps } from "@/types";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, option }: CustomFilterProps) => {
  const [selected, setSelected] = useState(option[0]);

  const router = useRouter();
  const handleUpdateSearchParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateSearchParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron up down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {option.map((item) => (
                <Listbox.Option
                  key={item.title}
                  value={item}
                  className={({ active }) =>
                    `${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    } cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-bold" : "font-normal"
                      }`}
                    >
                      {item.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
