import { socialLinks } from "../User";
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";

const Footer =()=>{
    const socialIcons = socialLinks.map((social)=>{
        return <a
        href={`${social.link}`} target="_blank" className="text-lg font-mono hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out ">
        <social.icon stroke={1.5} size={25} />
    </a>
    })
    return (
        <div className="mt-20 mb-10 flex flex-col gap-2 items-center font-mono ">
            <div className="text-3xl md-mx:text-2xl sm-mx:text-xl  text-primaryColor font-semibold ">Saranjeet Mondal</div>
            <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-4">{socialIcons}</div>
            <div className="text-textColor xs-mx:flex flex-col text-center text-lg md-mx:text-lg sm-mx:text-base xs-mx:text-sm font-semibold">Copyright &copy; {new Date().getFullYear()} Saranjeet Mondal <span className="xs-mx:hidden">|</span> <span> All Rights Reserved</span></div>
        </div>
    );
}
export default Footer;