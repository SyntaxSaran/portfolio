import { Button, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import { Particles } from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
const stack = ["Electrical Engineer", "Stock Trader", "Web Developer", "Market Research Analyst", "Competitive Programmer", "Freelancer"];
const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const btn = useMatches({
    xs:'xs',
    sm:'sm',
    md:'md',
    lg:'lg',
  })
  return (
    <>
      <div data-aos="zoom-out-up" data-aos-duration="800" className="mt-[15vh] flex relative overflow-hidden px-10 py-10 md-mx:px-6 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 lg:h-[80vh] h-fit justify-around items-center lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse lg-mx:!overflow-visible bs-mx:gap-6 " id="About">
        <Particles
          className="absolute inset-0 -z-20"
          quantity={800}
          ease={80}
          vx={.3}
          // vy={.5}
          color="#64ffda"
          refresh
        />
        <div className="bs:ml-20 font-mono bs:w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center">
          <div className="text-primaryColor text-3xl lg-mx:text-2xl sm-mx:text-xl">Hi, I am</div>
          <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl">Saranjeet Mondal</div>
          <div className="text-white text-4xl flex font-bold lg-mx:text-[27px] md-mx:text-2xl sm-mx:text-xl xs-mx:text-lg ">I'm a&nbsp;<span className="text-primaryColor">
            <Typewriter options={{ strings: stack, autoStart: true, loop: true }} /></span>
          </div>
          <div className="text-textColor font-semibold my-8 lg-mx:my-0 text-xl w-[90%] text-justify lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">specialized
            in crafting efficient and scallable solutions.
            Besides that, I'm a Full Stack (MERN) developer
            and AI enthusiast. I like to do problem solving
            and Data Structures.My hobby is Stock Trading.</div>
          <div className="flex gap-3">
            <Button onClick={open} className="!w-fit !text-bgColor" variant="filled" size={btn} color="#64ffda" radius="md">Check Resume</Button>
            <Button component="a" href="/saranjeetCV.pdf" download="Saranjeet Mondal" className="!w-fit" variant="outline" size={btn} color="#64ffda" radius="md" rightSection={<IconDownload size={20} />} >Download</Button>
          </div>
        </div>
        <div className="w-fit h-fit flex justify-center items-center  bs:mr-14  rounded-full" id="photo">
          <NeonGradientCard className="w-[360px] h-[360px] lg-mx:w-64 lg-mx:h-64 items-center justify-center text-center rounded-full  ">
            <img className=" rounded-full " src="/myPic5.jpg" alt="profile" />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  )

}
export default About;