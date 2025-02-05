import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center h-auto mb-10 mt-4">
        <div className=" font-bold text-5xl py-8 text-darkGreen">ABOUT </div>
        <div className=" justify-center text-center text-sm md:text-lg max-w-[80%] mt-4 leading-relaxed text-darkGreen text-clip ">
          At WasteWise, we are committed to revolutionizing waste management
          through innovative solutions that promote efficient waste sorting,
          recycling, and sustainable practices. Our platform connects
          individuals and communities, making it easier to manage waste
          responsibly while contributing to a cleaner, greener planet. With a
          focus on minimizing environmental impact, our mission is to create a
          future where waste is treated as a resource, not a burden. Join us in
          building smarter, waste-conscious communities for a better tomorrow.
        </div>
      </div>
      <div className=" mt-20 sm:mt-0 bg-offWhite h-[500ox] md:h-[300px] lg:h-[500px]">
        <div className="flex flex-col sm:flex-row-reverse justify-center items-center h-full my-auto">
          <div className="bg-[#D4DCD3] text-darkGreen text-center flex flex-col justify-center items-center flex-1 sm:h-full">
            <div className="text-5xl md:text-2xl lg:text-5xl text-center  font-bold mt-4 md:mt-0">
              Mission
            </div>
            <div className="text-center md:text-[10px] lg:text-lg max-w-[80%] mt-4 leading-relaxed mb-4">
              At WasteWise, we are committed to revolutionizing waste management
              through innovative solutions that promote efficient waste sorting,
              recycling, and sustainable practices. Our platform connects
              individuals and communities, making it easier to manage waste
              responsibly while contributing to a cleaner, greener planet. With
              a focus on minimizing environmental impact, our mission is to
              create a future where waste is treated as a resource, not a
              burden. Join us in building smarter, waste-conscious communities
              for a better tomorrow.
            </div>
          </div>
          <div className="flex-1 h-[500ox] md:h-[300px] lg:h-[500px] w-full flex items-center justify-center  ">
            <img
              src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
              className="sm:w-full h-full  "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center  h-[500ox] md:h-[300px] lg:h-[500px] ">
        <div className="bg-offWhite text-darkGreen text-center flex flex-col justify-center items-center flex-1 h-full">
          <div className="text-5xl md:text-2xl lg:text-5xl text-center  font-bold mt-16 md:mt-0">
            Vision
          </div>
          <div className="text-center  max-w-[80%] mt-4 leading-relaxed mb-10 md:text-[10px] lg:text-lg">
            Our vision is a world where waste is no longer a problem but a
            resource, where communities thrive in harmony with nature through
            sustainable waste practices, and where every individual plays a part
            in shaping a cleaner, greener planet.
          </div>
        </div>
        <div className="flex-1 md:h-[300px] lg:h-[500px] flex items-center justify-center  sm:mt-0 ">
          <img
            src="https://plus.unsplash.com/premium_photo-1663088881507-209dbbb1fbc7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" sm:w-full h-full justify-center items-center flex "
          />
        </div>
      </div>
    </>
  );
};

export default About;
