import React from 'react'
import image from "../../assets/default.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function AboutCard(props) {
  return (
    <div >
            <div
              onClick={() => popup(item)}
              className="pcard  h-[400px] w-[275px] backdrop-blur-md backdrop-brightness-[80%] hover:backdrop-brightness-[60%] border-2 rounded-xl border-[#E1E1E1] border-opacity-30 flex justify-around items-center flex-col text-[#d0f0ea] hover:text-[#ffffff] hover:scale-[1.05] transform transition duration-500 ease-in-out"
            >
              <div className="mt-3 rounded-full h-[195px] w-[195px]">
                <img className="h-[195px] w-[195px] rounded-full" src={image} />
              </div>
              <div className="flex items-center flex-col">
                <p className=" text-3xl">{props.named}</p>
                <p className=" text-2xl">{props.id}</p>
                <p className=" text-2xl">{props.work}</p>
              </div>
              <div className="flex w-[210px] justify-around">
                {/* <FontAwesomeIcon className="size-7" icon={faInstagram} /> */}
                <FontAwesomeIcon className="size-7 hover:text-[#ccfff0] duration-500 ease-in-out hover:scale-[1.1] transform" icon={faInstagram} />
                <FontAwesomeIcon className="size-7 hover:text-[#ccfff0] duration-500 ease-in-out hover:scale-[1.1] transform " icon={faGithub} />
                <FontAwesomeIcon className="size-7 hover:text-[#ccfff0] duration-500 ease-in-out hover:scale-[1.1] transform" icon={faLinkedin} />
                <FontAwesomeIcon className="size-7 hover:text-[#ccfff0] duration-500 ease-in-out hover:scale-[1.1] transform" icon={faEnvelope} />
              </div>
            </div>
            </div>
  )
}

export default AboutCard