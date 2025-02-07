import { Timeline, Text, useMatches } from "@mantine/core";
import { IconBriefcaseFilled, IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";

const TimeLineItem = (items:any) => {
    const sz = useMatches({
        xs: 15,
        md:20,

    })
    return (
        items.map((item:any,index:number)=>
        <Timeline.Item  data-aos="fade-up" data-aos-duration="800"  className="!pt-10 !mb-2 sm-mx:!p-1"  key={index} bullet={<IconBriefcaseFilled className="!text-bgColor " size={sz} />}>
            <div  className="border shadow-[0_0_10px_0_#64FFDA50] flex flex-col gap-2 border-primaryColor p-5 rounded-xl sm-mx:p-2">
                <div className="flex gap-3 items-center">
                    <img className="rounded-lg w-16 md-mx:w-14 xs-mx:w-10" src={`${item.company}.png`} alt="company"/>
                    <div className="flex flex-col">
                        <div className="text-white text-2xl sm-mx:text-xl xs-mx:text-lg font-semibold">{item.role}</div>
                        <div className="text-textColor text-lg md-mx:text-base xs-mx:text-sm font-semibold">{item.company} &#x2022; {item.duration}</div>
                    </div>
                </div>
                <div className="text-textColor sm-mx:text-sm leading-6 text-justify">{item.description}</div>
                <div className="text-lg md-mx:text-base sm-mx:text-sm font-medium text-textColor flex gap-1"><div className=" text-white font-semibold">Skills: </div>
                <div className="flex flex-wrap gap-1">
                    {
                        item.skills.map((skill:any,index:number)=><div key={index}> &#x2022; {skill}</div>)
                    }
                    </div>
                </div>
            </div>
        </Timeline.Item>)
    );
}
const Experience = () => {
    const sz = useMatches({
        xs: 15,
        md:20,

    })
    const dot = useMatches({
        xs: 25,
        md:30,

    })
    return (
        <div className="px-16 md-mx:px-6 sm-mx:px-2 mx-20 lg-mx:mx-0 my-10 mb-28 font-mono" id="Experience">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white"><span className="text-primaryColor">04.&nbsp;</span>Experience</h1>

            <Timeline active={4} bulletSize={dot} lineWidth={2} color="#64FFDA">
                {TimeLineItem(ExperienceInfo)}
                <Timeline.Item bullet={<IconBriefcaseFilled className="!text-bgColor" size={sz} />}></Timeline.Item>
            </Timeline>
        </div>
    );
}
export default Experience;