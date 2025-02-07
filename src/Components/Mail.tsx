const Mail = () => {
    return <div className="flex md-mx:hidden text-textColor items-center gap-9 fixed bottom-32 -right-48 rotate-90">
        <div className="flex" data-aos="fade-down-left" data-aos-duration="800">
        <a
            href="mailto:saranjeetmondal2002@gmail.com"
            className="text-lg font-mono tracking-widest hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
            saranjeetmondal2002@gmail.com
        </a>
        </div>
        <hr className="border-[1px] border-textColor bg-textColor w-40 rounded-full " />
    </div>
}
export default Mail;