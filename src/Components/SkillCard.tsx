import { Avatar } from "@mantine/core";

const SkillCard=(props:any)=>{
    return(
        <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-[49%] rounded-2xl border border-primaryColor shadow-[0_0_10px_0_#64FFDA50] p-5 bs-mx:p-3 sm-mx:w-full">
            <h1 className="mb-4 font-bold text-white text-3xl bs-mx:text-2xl sm-mx:text-xl text-center">{props.title}</h1>
            <div className="flex flex-wrap gap-3 justify-center bs-mx:gap-2 ">{SkillBadge(props.skills)}</div>
        </div>
    );
}
const SkillBadge=(skills:[])=>{
    return(
        skills.map((skill:any, index:number)=> 
        <div key={index} className="flex gap-2 items-center border rounded-2xl border-textColor py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1">
            <img className="w-[48px] bs-mx:w-[38px] xsm-mx:w-[24px] !p-1" src={`icons/${skill}.png`}/>
            <div className="text-textColor text-xl font-medium">{skill}</div>
        </div>)
    );
}
export default SkillCard;