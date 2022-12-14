import React from 'react'
import { LocationMarker, Mail, Phone } from 'heroicons-react'
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {}
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};


function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {window.location.href = `mailto:samnansiddique@yandex.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. 
    ${formData.message}`;
};
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-5'>
            <h4 className='text-2xl font-semibold text-center'>
                Got any Queries?
                <span className='decoration-[#0FFF50]/50 underline'> Let Me Know.</span>
            </h4>

            <div className='space-y-5'>
                <div className='flex items-center space-x-2 justify-center'>
                    <Phone className='text-[#0FFF50] h-7 w-7 animate-pulse' />
                    <p className='text-1xl'>+91 8420-480-716</p>
                </div>

                <div className='flex items-center space-x-2 justify-center'>
                    <LocationMarker className='text-[#0FFF50] h-7 w-7 animate-pulse' />
                    <p className='text-1xl'>Bangalore, Karnataka, India</p>
                </div>

                <div className='flex items-center space-x-2 justify-center'>
                    <Mail className='text-[#0FFF50] h-7 w-7 animate-pulse' />
                    <p className='text-1xl'>samnansiddique@yandex.com</p>
                </div>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-1 w-fit'>
                <div className='flex space-x-1 w-fit flex-row'>
                    <input {...register('name')} placeholder="Name" className='contactInput' type='text' />
                    <input {...register('email')} placeholder="Email" className='contactInput' type='email' />
                </div>

                <input {...register('subject')} placeholder="Subject" className='contactInput' type='text' />

                <textarea {...register('message')} placeholder="Message" className='contactInput' />
                <button 
                type="submit"
                className='bg-[#0FFF50] py-5 px-5 rounded-md text-black font-bold text-lg'>
                    Submit
                </button>
            </form>
        </div>
    </div>

  )
}

export default Contact
