// changes from server-side component(default) to client-side component

"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton = ({title, btnType, containerStyle, handleClick}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type = {btnType || "button"}
        className = {`custom-btn ${containerStyle}`}
        onClick={handleClick}
    >
        <span className = {'flex-1'}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton