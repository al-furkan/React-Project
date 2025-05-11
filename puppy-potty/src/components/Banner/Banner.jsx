import React from 'react'
import Globalcontainer from '../GlobalContainer/Globalcontainer';
import { Button } from '../ui/button';

const Banner = () => {
  return (
    <Globalcontainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-10 py-10">
        
        {/* Left Side: Text */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-manjari text-4xl md:text-6xl font-bold leading-tight">
            Potty train your pup the easy way
          </h1>
          <p className="font-poppins text-base md:text-lg text-gray-700">
            Log your dog’s pees, poops and meals and Puppy Potty Log will use the data to create a custom housetraining schedule unique to your fur baby.
          </p>
          <Button className="w-fit px-6 py-3 bg-[#F9CE3B] text-white rounded-md text-sm hover:bg-blue-600">
            Join Us
          </Button>
        </div>

        {/* Right Side: Images */}
        <div className="relative flex justify-center items-center">
          <img
            src="./img/banner.png"
            alt="Banner"
            className="w-full h-auto max-w-[500px]"
          />
          <img
            src="./img/bannerDot.png"
            alt="Dog"
            className="absolute -top-10 right-0 w-24 md:w-40"
          />
        </div>
        
      </div>
    </Globalcontainer>
  );
};

export default Banner;
