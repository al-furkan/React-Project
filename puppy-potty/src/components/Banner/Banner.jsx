import React from 'react'
import Globalcontainer from '../GlobalContainer/Globalcontainer';
import { Button } from '../ui/button';

const Banner = () => {
  return (
   <Globalcontainer>
     <div className="grid grid-cols-2 gap-x-3">
         <div className="flex flex-col justify-center items-start gap-4 p-10">
            <h1 className="font-manjari text-[70px] font-bold">Potty train your pup the easy way</h1>
            <p className="font-poppins text-lg text-gray-700">Log your dog’s pees, poops and meals and Puppy Potty Log will use the data to create a custom housetraining schedule unique to your fur baby.</p>
            <Button className="px-4 py-2 bg-[#F9CE3B] text-white rounded-md text-sm hover:bg-blue-600">Join Us</Button>
         </div>
         <div className="flex justify-center items-center relative">
            <div className="absolute top-0 right-0">
                <img src="./img/bannerDog.png" alt="Dog" />
            </div>

            <img src="./img/banner.png" alt="Banner" className="w-full h-auto" />


            <div className="absolute top-0 right-0">
                <img src="./img/bannerDog.png" alt="Dog" />
            </div>
         </div>
     </div>
   </Globalcontainer>
  )
}

export default Banner;