import { Separator } from "@heroui/react";


const Banner = () => {
  return (
    <div className="bg-[url('/Banner.png')] flex justify-between flex-col items-center  gap-5 h-150">
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl font-bold">
      Get Appointemt <br />Easy And Fast
        </h1>

        <p className="text-2xl">
       Book appointments with trusted doctors anytime,<br /> anywhere. Fast, secure, and easy healthcare services for you and your family.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
            Appointment
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
        See More
          </button>
        </div>
      </div>

      <div className="flex justify-start gap-5 w-8/12 items-center">
        <div className="px-3 text-blue-500 ">

          
          
          <h3 className="text-2xl font-bold">50K+</h3>
          <p className="text-xs">Happy Patients</p>
        </div>


        <div>
          <h3 className="text-xl text-blue-500 font-bold">350K+</h3>
          <p className="text-xs text-blue-500">Specialist Doctor</p>
        </div>

        <div>
          <h3 className="text-xl text-blue-500 font-bold">98%</h3>
          <p className="text-xs text-blue-500 ">Our Success</p>
        </div>

         
        
          <Separator variant="tertiary" orientation="horizontal" />


           
      



        
      </div>
    </div>
  );
};

export default Banner;