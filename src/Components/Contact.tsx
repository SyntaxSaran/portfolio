import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import validateForm from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from ".././Firebase";
import toast from "react-hot-toast";

const Contact = () => {
    const form = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const [formData, setFormData] = useState<{ [key:string]:string }>(form);
    const [formError, setFormError] = useState<{ [key:string]:string }>(form);
    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
        setFormError({ ...formError, [id]: validateForm(id,value)});
    }
    const handleSubmit = async() => {
        let valid= true;
        let newFormError:{[key:string]:string}={};
        for(let key in formData){
            const error = validateForm(key, formData[key]);
            if(error.length>0){
                newFormError[key]=error;
                valid= false;
            }
        }
        setFormError(newFormError);
        if(valid){
            setFormData(form);
            try {
                await addDoc(collection(db, "portfolio"), formData);
                toast.success("Submitted Successfully!", { duration: 4000 });
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error("Error submitting form. Check console for details.", { duration: 4000 });
            }
        }else{
            console.log("Validation errors:", newFormError);
            toast.error('Error submitting form', {duration: 4000}); 
        }
    }
    const sz = useMatches({
        xs: 20,
        md: 30,
    })
    const asz = useMatches({
        xs: 10,
        sm:15,
        md: 20,
    })
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    })
    return (
        <div className="px-16 md-mx:px-6 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono" id="Contact">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white"><span className="text-primaryColor">05.&nbsp;</span>Contact</h1>
            <div data-aos="flip-left" data-aos-duration="2000" className="w-[70%] lg-mx:w-full m-auto p-8 flex flex-col gap-6 border shadow-[0_0_10px_0_#64FFDA70]  border-primaryColor rounded-3xl ">
                <div className="flex gap-2 items-center font-semibold text-3xl md-mx:text-2xl sm-mx:text-xl text-white">Let&apos;s Connect<IconTopologyStar3 size={sz} className="text-primaryColor" /> </div>
                <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} error={formError.name}/>
                <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} error={formError.email}/>
                <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} error={formError.phone}/>
                <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} error={formError.message}/>
                <Button onClick={handleSubmit} variant="filled" size={btn} radius="lg" color="#64ffda" fullWidth className="!text-bgColor !font-bold" rightSection={<IconArrowRight size={asz} />}>Send</Button>
            </div>
        </div>
    );
}
export default Contact;