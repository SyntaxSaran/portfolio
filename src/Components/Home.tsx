import { Loader } from "./Loader";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{setLoading(false)},4000)
    },[])   
    return (
        <div className={`focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center `}>
        {loading !==true?
        <>
        <Toaster/>
        <Header/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Mail/>
        <Social/>
        <Footer/>
        </>:
        <Loader/>}
        </div>
    );
}
export default Home;