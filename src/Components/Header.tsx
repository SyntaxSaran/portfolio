import { IconHexagonLetterS } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { em, useMatches } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

const Links = ["About", "Projects", "Skills", "Experience",  "Contact"];
const navLinks = (col: Boolean, clicked:any) => {
    const handleClick =()=>{
        if (clicked) clicked();
    }
    return Links.map((link, index) => {
        return <a key={index} onClick={handleClick} className={`${col ? 'flex flex-col items-center' : ''} text-textColor text-lg dm-mono-regular hover:text-primaryColor`} href={`#${link}`}> <span className="text-primaryColor"> 0{index + 1}. </span> {link} </a>
    })
}
// color variables stored in tailwind.config.js
const Header = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    const [show, setShow] = useState(true);
    const [shadow, setShadow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 70) {
            setShow(false);
        } else {
            setShow(true);
        }
        if (window.scrollY > 70) {
            setShadow(true);
        } else {
            setShadow(false);
        }
        setLastScrollY(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll', controlNavbar);
        return()=>window.removeEventListener('scroll',controlNavbar);
    })
    const sz = useMatches({
            xs:52,
            lg:56,
            xxl:60,
    
        })
    return (
        <nav className={`fixed w-full flex ${show?"translate-y-0":"-translate-y-[15vh]"} ${shadow? "shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out bg-bgColor h-[15vh] bs-mx:h-[10vh] sm-mx:h-[8vh] px-10 sm-mx:px-4  items-center justify-between z-10`}>
            <IconHexagonLetterS className="z-10" color="#64ffda" size={sz} stroke={1.5} />
            <div className="bs:flex gap-8 hidden" >
                {navLinks(false,null)};
            </div>
            <SideBar />
        </nav>
    );
}
export default Header;
export { navLinks };