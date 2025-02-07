const FloatingInput = (props: any) => {
    return (
        <div>

        <div className="relative">
            {props.id!="message"?<input type="text" id={props.id} value={props.value} onChange={(e)=>props.handleChange(props.id, e.target.value)} className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-base text-white bg-transparent rounded-xl border ${props.error?"border-red-500":""} border-textColor appearance-none  focus:outline-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:ring-0 focus:border-primaryColor peer`} placeholder=" " />:
            <textarea rows={4} name={props.id} id={props.id}  value={props.value} onChange={(e)=>props.handleChange(props.id, e.target.value)} className="block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-base text-white bg-transparent rounded-xl border border-textColor appearance-none  focus:outline-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:ring-0 focus:border-primaryColor peer" placeholder=" "></textarea>}
            <label htmlFor={props.id} className={`absolute text- text-textColor sm-mx:text-base duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-primaryColor  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2    ${props.id!="message"?"peer-placeholder-shown:top-1/2":"peer-placeholder-shown:top-6"} peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}>{props.name}</label>
        </div>
        {props.error && <p className="text-red-500 text-sm ml-1">{props.error}</p>}
            </div>
    );
}
export default FloatingInput;