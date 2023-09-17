import React from "react";

export function Story() {
  return (
    <div className="h-[70vh] w-full bg-white text-black">
      <div className="flex justify-center items-center text-[30px] font-serif font-semibold mt-14 mb-6">
        OUR STORY
      </div>
      <div className="flex flex-col justify-center items-center">
        <hr className="mx-4 w-full bg-gray-400 h-0.5" />
        <hr className="w-[300px] bg-red-500 h-1 border-red-500 " />
      </div>

      <div className=" flex flex-col justify-center items-center p-2 mt-4">
        <p>
          Everest Maya is born out of our love to Mt. Everest, literally meaning
          "Everest Love.”{" "}
        </p>
        <span>
          Our team is proud to bring you the taste of Himalayas; from the
          footsteps of Everest to food-loving neighborhood of Firestone &
          Longmont Colorado. We are delighted to present you a unique
          combination of culinary mixtures that are tailored to your liking. You
          will surely taste the excitement of Mt. Everest food that everyone
          enjoys when they visit the Mt. Everest.
        </span>
      </div>
    </div>
  );
}
