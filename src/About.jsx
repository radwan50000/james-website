import "aos/dist/aos.css";


export default function About(){

    return(
        <>
            <div className='relative overflow-hidden flex flex-col items-center gap-15 py-30 bg-[url("")] bg-center bg-size-[120%]'>
                <h1 className='text-5xl font-[cairo]' data-aos='fade-up'>
                    ABOUT US
                </h1>
                <p className='font-[cairo] text-md w-[35%] font-light text-center' data-aos='fade-up' data-aos-delay='100'>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <p className='font-[cairo] text-md w-[35%] font-light text-center' data-aos='fade-up' data-aos-delay='150'>
                    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                </p>
                <span data-aos='fade-up' data-aos-delay='200'>
                    <div className='select-none border-2 border-black py-4 px-6 cursor-pointer hover:bg-black hover:text-white' style={{transition: '.4s'}}>
                        Learn More
                    </div>
                </span>
                <div className='absolute z-[-1] top-0 left-0 w-full h-full bg-[#dcecffc5] backdrop-blur-[1px]'></div>
                <div className='absolute z-[-2] bg-[url("./assets/mountain.jpg")] top-0 left-0 w-full h-full bg-center saturate-0 bg-fixed'></div>
            </div>
        </>

    )
}