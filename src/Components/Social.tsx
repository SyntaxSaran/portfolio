import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import { socialLinks } from "../User";
const Social=()=>{
    const socialIcons = socialLinks.map((social)=>{
        return <a
        href={`${social.link}`} target="_blank" className="text-lg font-mono hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out -rotate-90">
        <div data-aos="fade-up-right" data-aos-duration="800"><social.icon /></div>
    </a>
    })
    return <div className="flex md-mx:hidden text-textColor items-center gap-9 fixed bottom-40 -left-36 rotate-90">
        {socialIcons}
        <hr className="border-[1px] border-textColor bg-textColor w-40 rounded-full " />
    </div>
}
export default Social;      