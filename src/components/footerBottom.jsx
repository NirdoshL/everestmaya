import React from "react";

export function FooterBottom() {
  return (
    <div className="w-full text-white bg-gray-600 group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          Restaurant Technologies
          <a href="https://mydvls.com/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Supported by Delta V Logics & Solutions
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
