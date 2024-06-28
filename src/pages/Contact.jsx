import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../fonts/stylesheet.css"
import amanimg from '../assets/Images/aman.jpeg'
import adityaimg from '../assets/Images/aditya.jpeg'
import shreyasimgg from '../assets/Images/shreyas.jpeg'
import sachinimg from '../assets/Images/sachin.jpeg'
const Card = ({ name, designation, image, linkedin,  company }) => {
  return (
    <div className="bg-white Apercu-Medium border h-[560px] w-[420px] flex flex-col items-center justify-start border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" p-2">
        <img src={image} alt="" className=" bg-cover h-[400px] w-full rounded-[5px]" />
      </div>
      <div className="  text-black bg-white  h-[200px] rounded-[8px] w-full">
        <div className="mx-4 ">
          <h5 className="mb-2 mt-2 text-3xl Apercu-Medium tracking-tight text-black dark:text-white">
            {name}
          </h5>
          <p className="Apercu-Regular text-base text-gray-600"><span className="font-bold">{designation}</span> at <span className="font-bold">{company}</span></p>
        </div>
        <Link to={linkedin} target="_blank">
          <button className="border mx-4 mt-2 Apercu-Medium border-richblack-700 bg-yellow-300 px-[12px] text-black py-[8px] rounded-md">
            Connect
          </button>
        </Link>
      </div>
    </div>
  );
};

const CardsMapComponent = () => {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
  };

  const alumniData = [
    {
      name: "Aman Shrivastav",
      designation: "Student",
      company: "VESIT",
      linkedin: "https://www.linkedin.com/in/aman-shrivastav-592110253/",
      image: amanimg
    },
    {
      name: "Aditiya Surve",
      designation: "Student",
      company: "VESIT",
      linkedin: "https://www.linkedin.com/in/aditya-surve-b020a525b/",
      image: adityaimg
    },
    {
      name: "Shreyas Naikwadi",
      designation: "Student",
      company: "VESIT",
      linkedin: "https://www.linkedin.com/in/shreyas-naikwadi-050822258/",
      image: shreyasimgg
    },

    {
        name: "Sachin Mishra",
        designation: "Student",
        company: "VESIT",
        linkedin: "https://www.linkedin.com/in/sachin-mishra-107b93229/",
        image: sachinimg,
      }
  ];
 
  

  return (
    <div className="bg-gradient-to-tr from-[#56dfdf] to-[#021cba] px-40 ">
      <div className="py-4 mt-8 mb-10">
      <h1 className="text-left Apercu-Bold ml-16 mb-10 text-4xl gap-4 text-white">Our Alumnis</h1>
        <Slider {...settings}>
          {alumniData.map((card, index) => (
            <div key={index}>
              <Card
                name={card.name}
                designation={card.designation}
                company={card.company}
                linkedin={card.linkedin}
                image={card.image}
                
              />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default CardsMapComponent;