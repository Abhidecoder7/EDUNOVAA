import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../fonts/stylesheet.css"

const Card = ({ title, content, image, link }) => {
  return (
    <div className="max-w-sm bg-white border h-[430px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-[240px] p-1">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div>
        <div className="mx-4 ">
          <h5 className="mb-2 mt-2 text-3xl Apercu-Bold tracking-tight text-black dark:text-white">
            {title}
          </h5>
          <p className="Apercu-Regular text-base text-gray-600">{content}</p>
        </div>
        <Link to={link}>
          <button className="border mx-4 mt-2 Apercu-Medium border-richblack-700 bg-[#2e3c52] px-[12px] py-[8px] text-white rounded-md">
            View Course
          </button>
        </Link>
      </div>
    </div>
  );
};

const Courses = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
  };

  const cardsData = [
    {
      title: "DevOps",
      content:
        "Operating systems manage computer resources, enable user interaction, and ensure efficient hardware utilization.",
      image: require("../assets/Images/operating-system-t.jpg"),
      link: "http://localhost:3000/view-course/661210a1277bffca5aa2709f/section/661210a9277bffca5aa270a4/sub-section/66121197277bffca5aa270a9",
    },
    {
      title: "Python",
      content:
        "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum",
      image: require("../assets/Images/computer-networks.jpg"),
      link: "http://localhost:3000/view-course/66119e8e2a41cd42b42e254f/section/66119e922a41cd42b42e2553/sub-section/66119ea32a41cd42b42e2557",
    },
    {
      title: "Database Management",
      content:
        "Database management systems (DBMS) handle storage, retrieval, and manipulation of data, ensuring data integrity and security.",
      image: require("../assets/Images/database-management.jpg"),
      link: "/login",
    },
    {
      title: "C Programming",
      content:
        "C is a procedural programming language used for system programming, embedded programming, and application development.",
      image: require("../assets/Images/c-programming.jpg"),
      link: "/login",
    },
    {
      title: "Java Programming",
      content:
        "Java is an object-oriented programming language used for developing cross-platform applications and web applications.",
      image: require("../assets/Images/java.png"),
      link: "/login",
    },
    {
      title: "Computer Architecture",
      content:
        "Computer architecture encompasses the design and organization of computer systems, including CPU, memory, and I/O subsystems.",
      image: require("../assets/Images/computer-architecture.png"),
      link: "/login",
    },
    // Add more card data as needed
  ];
  const cardsData2 = [
    {
      title: "Time and Work",
      content: "Time and work problems involve calculating the time taken to complete a task by individuals or groups working together.",
      image: require("../assets/Images/time-and-work.jpg"),
      link: "/time-and-work",
    },
    {
      title: "Time, Speed, and Distance",
      content: "Time, speed, and distance problems involve calculating the relationship between time, speed, and distance traveled by an object.",
      image: require("../assets/Images/time-speed-distance.jpg"),
      link: "/time-speed-distance",
    },
    {
      title: "Averages",
      content: "Averages problems involve finding the average or mean value of a set of numbers, often by summing them and dividing by the count.",
      image: require("../assets/Images/averages.jpg"),
      link: "/averages",
    },
    {
      title: "Ratio and Proportion",
      content: "Ratio and proportion problems involve comparing quantities and finding proportional relationships between them.",
      image: require("../assets/Images/ratio-and-proportion.jpg"),
      link: "/ratio-and-proportion",
    },
    // Add more card data as needed
  ];
  

  return (
    <div className="bg-gradient-to-tr from-[#56dfdf] to-[#021cba] px-40 ">
      <div className="py-4 mt-8 mb-10">
      <h1 className="text-left Apercu-Bold ml-16 mb-10 text-4xl gap-4 text-white">Core Concepts</h1>
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index}>
              <Card
                title={card.title}
                content={card.content}
                image={card.image}
                link={card.link}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="py-4 mt-8 mb-20">
      <h1 className="text-left Apercu-Bold ml-16 mb-10 text-4xl gap-4 text-white">Aptitude & Reasoning</h1>
        <Slider {...settings}>
          {cardsData2.map((card, index) => (
            <div key={index}>
              <Card
                title={card.title}
                content={card.content}
                image={card.image}
                link={card.link}
              />
            </div>
          ))}
        </Slider>
      </div>


    </div>
  );
};

export default Courses;