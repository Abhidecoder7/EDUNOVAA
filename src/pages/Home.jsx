// import React from "react";
// import { useRef } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import HighlightText from "../components/core/Homepage/HighlightText";
// import CTAButton from "../components/core/Homepage/Button";
// import Banner from "../assets/Images/banner.mp4";
// import CodeBlocks from "../components/core/Homepage/CodeBlocks";
// import TimelineSection from "../components/core/Homepage/TimelineSection";
// import LearningLanguageSection from "../components/core/Homepage/LearningLanguageSection";
// import InstructorSection from "../components/core/Homepage/InstructorSection";
// import WavyBackground from "../ui/wavy-background";
// import ExploreMore from "../components/core/Homepage/ExploreMore";
// import "../fonts/stylesheet.css";
// import { TypeAnimation } from "react-type-animation";
// import "../fonts/stylesheet.css";
// import "./Style/SexyStyle.css";
// import { motion } from "framer-motion";

// {
//   /* <WavyBackground className="max-w-4xl  pb-40 z-10 ">
// <p className="text-10xl Apercu-Pro-Bold text-8xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
//   EDUNOVA
// </p>
// <div>
//   <TypeAnimation
//     sequence={[
//       "Learn. Practice. Evaluate.",
//       2000,
//       "Build Your Tech Career.",
//       2000,
//     ]}
//     wrapper="span"
//     speed={10}
//     style={{
//       fontFamily: "Apercu Mono",
//       fontSize: "2em",
//       display: "inline-block",
//       textAlign: "center",
//     }}
//     repeat={Infinity}
//   />
// </div>
// </WavyBackground> */
// }
// const Home = () => {
//   const ref = useRef();

//   React.useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // If the component is in view, animate it
//           ref.current.style.opacity = "1";
//         } else {
//           // If the component is out of view, reset its opacity
//           ref.current.style.opacity = "0";
//         }
//       });
//     });

//     observer.observe(ref.current);

//     // Cleanup function
//     return () => observer.disconnect();
//   }, []);
//   return (
//     <div className="bg-gradient-to-tr from-[#56dfdf] to-[#021cba]">
//       <div className="h-[820px] bg- flex flex-col items-center justify-center ">
//         <h1 className="text-9xl ">
//           Edu<span>NOVA</span>
//         </h1>
//         <br />
//         <TypeAnimation
//           sequence={[
//             "Learn. Practice. Evaluate.",
//             2000,
//             "Build Your Tech Career.",
//             2000,
//           ]}
//           wrapper="span"
//           speed={10}
//           style={{
//             fontFamily: "Apercu Mono",
//             fontSize: "2em",
//             display: "inline-block",
//             textAlign: "center",
//           }}
//           repeat={Infinity}
//         />
//       </div>
//       <div className=" Apercu-Medium px-80 bg-[#000814]">
//         {/*Section1  */}
//         <div
//           className="relative mx-auto flex flex-col items-center 
//       text-white justify-between "
//         >
//           <div
//             className="relative mx-auto px-120 flex flex-col items-center 
//       text-white justify-between"
//           >
//             <Link to={"/signup"}>
//               <div
//                 className=" group mt-16 p-1 mx-auto rounded-[5px]  font-bold text-white
//             transition-all duration-200 hover:scale-98 w-fit"
//               >
//                 <div
//                   className="flex flex-row items-center bg-richblack-800 gap-2 h-12 rounded-[5px] px-10 py-[5px]
//                 transition-all duration-200 group-hover:bg-yellow-300 hover:text-richblack-900"
//                 >
//                   <p>Become an Instructor</p>
//                   <FaArrowRight />
//                 </div>
//               </div>
//             </Link>

//             <div className="text-center text-4xl font-semibold mt-7">
//               Empower Your Future with
//               <HighlightText text={" Coding Skills"} />
//             </div>

//             <div className=" mt-4 w-[90%] text-center text-lg Apercu-Regular text-richblack-300">
//               Explore our online coding courses, where you dictate the pace and
//               learn from anywhere globally.
//               <br /> Benefit from a library of resources, such as interactive
//               projects, quizzes, and <br /> tailored guidance from experienced
//               instructors.
//             </div>

//             <div className="flex flex-row gap-7 mt-8">
//               <CTAButton active={true} linkto={"/signup"}>
//                 Learn More
//               </CTAButton>

//               <CTAButton active={false} linkto={"/login"}>
//                 Book a Demo
//               </CTAButton>
//             </div>

//             {/* <div className="mx-3 my-12 shadow-blue-200">
//               <video muted loop autoPlay>
//                 <source src={Banner} type="video/mp4" />
//               </video>
//             </div> */}

//             {/* Code Section 1 */}
//             <motion.div
//               initial={{ opacity: 0 }} // Initial opacity is 0
//               animate={{ opacity: 1 }} // Animate to opacity 1
//               exit={{ opacity: 0 }} // Fade out on exit
//               transition={{ duration: 3.0 }} // Animation duration
//             >
//               <div>
//                 <CodeBlocks
//                   position={"lg:flex-row"}
//                   heading={
//                     <div className="text-4xl font-semibold">
//                       Learn Coding with our Online Integrated Development
//                       Environment.
//                     </div>
//                   }
//                   subheading={
//                     "Our IDE enables users to write and execute code seamlessly across 10 popular programming languages enhancing their coding proficiency."
//                   }
//                   ctabtn1={{
//                     btnText: "Try It",
//                     linkto: "/ide",
//                     active: true,
//                   }}
//                   ctabtn2={{
//                     btnText: "Learn More",
//                     linkto: "/login",
//                     active: false,
//                   }}
//                   codeblock={`#include <iostream>
//                 using namespace std;

//                 int main() {
//                     std::cout << "Hello, world!" << std::endl;
//                     return 0;
//                 } `}
//                   codeColor={"text-yellow-25"}
//                 />
//               </div>
//             </motion.div>
//             <ExploreMore />
//           </div>

//           {/*Section 2  */}

//           {/*Section 3 */}
//         </div>
//       </div>
//       <div className=" text-white bg-gradient-to-tr from-[#56dfdf] to-[#021cba]">
//         <div className="homepage_bg h-[310px]">
//           <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
//             <div className="h-[150px]"></div>
//             <div className="flex flex-row gap-7 mt-10 text-white ">
//               <CTAButton active={true} linkto={"/signup"}>
//                 <div className="Apercu-Bold flex items-center gap-3">
//                   Explore Full Catalog
//                   <FaArrowRight />
//                 </div>
//               </CTAButton>
//               <CTAButton active={false} linkto={"/signup"}>
//                 <div className="Apercu-Medium">Learn more</div>
//               </CTAButton>
//             </div>
//           </div>
//         </div>

//         <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
//           <LearningLanguageSection />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import{ TypeAnimation} from "react-type-animation";
import CTAButton from "../components/core/HomePage/Button.jsx";
import CodeBlocks from "../components/core/HomePage/CodeBlocks.jsx";
import TimelineSection from "../components/core/HomePage/Timeline.jsx";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection.jsx";
import InstructorSection from "../components/core/HomePage/InstructorSection.jsx";
import ExploreMore from "../components/core/HomePage/ExploreMore.jsx";
import Banner from "../assets/Images/banner.mp4";
import "../fonts/stylesheet.css";
import Chatbot from "../chatbot/chatbot";

const Home = () => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the component is in view, animate it
          ref.current.style.opacity = "1";
        } else {
          // If the component is out of view, reset its opacity
          ref.current.style.opacity = "0";
        }
      });
    });

    observer.observe(ref.current);

    // Cleanup function
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-[#56dfdf] to-[#021cba]">
      <div className="h-[820px] bg- flex flex-col items-center justify-center ">
      <motion.div
              ref={ref}
              initial={{ opacity: 0 }} // Initial opacity is 0
              animate={{ opacity: 1 }} // Animate to opacity 1
              exit={{ opacity: 0 }} // Fade out on exit
              transition={{ duration: 1.0 }} // Animation duration
            >
        <h1 className="text-9xl ">
          Edu<span>NOVA</span>
        </h1>
        </motion.div>
        <br />
        <TypeAnimation
          sequence={[
            "Learn. Practice. Evaluate.",
            2000,
            "Build Your Tech Career.",
            2000,
          ]}
          wrapper="span"
          speed={10}
          style={{
            fontFamily: "Apercu Mono",
            fontSize: "2em",
            display: "inline-block",
            textAlign: "center",
          }}
          repeat={Infinity}
        />
      </div>
      <div className=" Apercu-Medium px-80 bg-[#000814]">
        {/*Section1  */}
        <div
          className="relative mx-auto flex flex-col items-center 
      text-white justify-between "
        >
          <div
            className="relative mx-auto px-120 flex flex-col items-center 
      text-white justify-between"
          >
            <Link to={"/signup"}>
              <div
                className=" group mt-16 p-1 mx-auto rounded-[5px]  font-bold text-white
            transition-all duration-200 hover:scale-98 w-fit"
              >
                <div
                  className="flex flex-row items-center bg-richblack-800 gap-2 h-12 rounded-[5px] px-10 py-[5px]
                transition-all duration-200 group-hover:bg-yellow-300 hover:text-richblack-900"
                >
                  <p>Become an Instructor</p>
                  <FaArrowRight />
                </div>
              </div>
            </Link>

            <div className="text-center text-4xl font-semibold mt-7">
              Empower Your Future with Coding skills
            </div>

            <div className=" mt-4 w-[90%] text-center text-lg Apercu-Regular text-richblack-300">
              Explore our online coding courses, where you dictate the pace and
              learn from anywhere globally.
              <br /> Benefit from a library of resources, such as interactive
              projects, quizzes, and <br /> tailored guidance from experienced
              instructors.
            </div>

            <div className="flex flex-row gap-7 mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>

              <CTAButton active={false} linkto={"/login"}>
                Book a Demo
              </CTAButton>
            </div>

            {/* <div className="mx-3 my-12 shadow-blue-200">
              <video muted loop autoPlay>
                <source src={Banner} type="video/mp4" />
              </video>
            </div> */}

            {/* Code Section 1 */}
            
              <div>
                <CodeBlocks
                  position={"lg:flex-row"}
                  heading={
                    <div className="text-4xl font-semibold">
                      Learn Coding with our Online Integrated Development
                      Environment.
                    </div>
                  }
                  subheading={
                    "Our IDE enables users to write and execute code seamlessly across 10 popular programming languages enhancing their coding proficiency."
                  }
                  ctabtn1={{
                    btnText: "Try It",
                    linkto: "/ide",
                    active: true,
                  }}
                  ctabtn2={{
                    btnText: "Learn More",
                    linkto: "/login",
                    active: false,
                  }}
                  codeblock={`#include <iostream>
                using namespace std;

                int main() {
                    std::cout << "Hello, world!" << std::endl;
                    return 0;
                } `}
                  codeColor={"text-yellow-25"}
                />
              </div>
            
            <ExploreMore />
          </div>

          {/*Section 2  */}

          {/*Section 3 */}
        </div>
      </div>
      <div className=" text-white bg-gradient-to-tr from-[#56dfdf] to-[#021cba]">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 mt-10 text-white ">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="Apercu-Bold flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div className="Apercu-Medium">Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <LearningLanguageSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
