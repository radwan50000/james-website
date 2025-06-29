import React from 'react'

const InputField = ({fieldName,fieldId,width}) => {

    return(
        <>
            <div className='flex flex-col justify-start text-sm text-white font-[cairo] font-light' style={{width: width}}>
                <p className='mb-2'>{fieldName}</p>
                <input type="text" name={fieldName} id={fieldId} className='w-full text-xl font-[cairo] outline-none border-b-1 border-white'/>
            </div>
        </>

    )
}

const Contact = () => {
  return (
    <>
        <div className='flex flex-col py-4 mx-auto items-center bg-[#0c3c60]'>
            <h1 className='font-[cairo] text-4xl text-white my-12'>
                CONTACT
            </h1>
            <div className='w-[50vw] relative flex flex-row items-center justify-between gap-10 my-5'>
                <InputField fieldId={'first-name'} fieldName={'First Name*'}  width={'80%'}/>
                <InputField fieldId={'last-name'} fieldName={'Last Name*'} width={'80%'}/>
            </div>
             <div className='w-[50vw] relative flex flex-row items-center justify-between gap-10 my-5'>
                <InputField fieldId={'email'} fieldName={'Email*'}  width={'80%'}/>
                <InputField fieldId={'subject'} fieldName={'Subject*'} width={'80%'}/>
            </div>
            <div className='w-[50vw] relative flex flex-row items-center justify-between gap-10 my-5'>
                <InputField fieldId={'message'} fieldName={'Message*'}  width={'100%'}/>
            </div>
            <div className='w-[50vw] relative flex flex-row items-center justify-end gap-10 my-5 '>
                <div className='bg-white text-[#0c3c60] px-32 py-1 transition-[.4s] cursor-pointer select-none rounded-sm border-1 border-white hover:bg-[#0c3c60] hover:text-white '>
                    SUBMIT
                </div>
            </div>
            <div style={{width: '50vw'}}><iframe style={{width: "100%",height:"250px",frameBorder:"0", scrolling:"no", marginHeight:"0", marginWidth:"0"}}    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/calcular-la-población-en-un-mapa">Calcular Población en el Mapa</a></iframe></div>
        </div>
    </>
  )
}

export default Contact