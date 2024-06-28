import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import "../../../fonts/stylesheet.css"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="bg-gradient-to-tr from-[#56dfdf] to-[#021cba] Apercu-Pro-Medium grid min-h-[calc(100vh-3.5rem)] place-items-center">
      
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent align-center justify-center gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-5xl font-semibold  text-white">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem]">
              <span className="text-white">{description1}</span>{" "}
              <span className=" text-white">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          
        
        </div>
      )}
    </div>
  )
}

export default Template