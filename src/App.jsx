import './App.css'
import {useEffect} from 'react'
import userImg from './assets/user.png'
import arrow from './assets/arrow.gif'
import AOS from "aos";
import "aos/dist/aos.css";

window.addEventListener('scroll',() => {
  document.getElementById('header').style.cssText = `background-size: calc(140% + ${window.pageYOffset}px)`;
  if(window.pageYOffset >= 50){
    if(!document.getElementById('arr-cont').classList.contains('fading')){
      if(document.getElementById('arr-cont').classList.contains('appearing')) document.getElementById('arr-cont').classList.remove('appearing');
      document.getElementById('arr-cont').classList.add('fading')
    }
  }else{
    if(document.getElementById('arr-cont').classList.contains('fading')){
      document.getElementById('arr-cont').classList.remove('fading');
      document.getElementById('arr-cont').classList.add('appearing');
    }
  }
  
})

function Header(){
  
  return (
    <>
      <header id='header' className='w-full h-dvh bg-[url(./assets/snow-bg.jpg)] bg-size-[140%] bg-center flex flex-col justify-between items-center overflow-hidden relative max-xl:bg-size-[250%]'>
        <nav  className="w-full px-30 py-5 bg-[#0C3C60] flex justify-between items-center fixed z-50">
          <h1 className='text-white font-light font-[cairo] text-2xl cursor-default'>
            JAMES CONSULTING
          </h1>
          <div className="flex flex-row justify-center items-center gap-12 max-xl:hidden">
            <ul className='flex flex-row justify-center items-center gap-8 '>
              <li className='font-light transition-[.4s] font-[cairo] text-white text-lg cursor-pointer hover:scale-105'>Projects</li>
              <li className='font-light transition-[.4s] font-[cairo] text-white text-lg cursor-pointer hover:scale-105'>Services</li>
              <li className='font-light transition-[.4s] font-[cairo] text-white text-lg cursor-pointer hover:scale-105'>Plan & Pricing</li>
              <li className='font-light transition-[.4s] font-[cairo] text-white text-lg cursor-pointer hover:scale-105'>Tool & Tips</li>
              <li className='font-light transition-[.4s] font-[cairo] text-white text-lg cursor-pointer hover:scale-105'>Contact</li>
            </ul>
            <div className="flex flex-row justify-center items-center gap-4">
              <img src={userImg} alt="user-image" className='w-10'/>
              <p className='text-lg transition-[.4s] font-light font-[cairo] text-white cursor-pointer hover:scale-105'>Log In</p>
            </div>
          </div>
        </nav>
        <div id='arr-cont' className='p-3 bg-white rounded-t-sm translate-y-3 absolute bottom-0 left-3/6 translate-x-[-50%]'>
          <img src={arrow} alt="arrow-gif" className='rotate-90 w-8'/>
        </div>
      </header>
    </>

  )
}

function Card({header,paragraph,delay}){
  return(
    <>
      <div className='flex items-center flex-col gap-10 my-3' data-aos="fade-up"  data-aos-delay={delay}>
        <h1 className='text-[40px] font-[cairo] font-[300] text-black'>
          {header}
        </h1>
        <p className='w-[50%] text-center text-[16px] font-[cairo] font-light '>
          {paragraph}
        </p>
        <div className='border-1 border-black px-8 py-2 font-medium transition-[.4s] text-md cursor-pointer select-none hover:bg-black hover:text-white'>
          More Info
        </div>
      </div>
    </>

  )
}

function EachService(){
  return(
    <>
     <div className='w-[90%] mx-auto flex justify-between items-center flex-row my-30 max-lg:flex-wrap'>
        <Card header={'SERVICES'} paragraph={"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."} delay={'0'}/>
        <Card header={'PROJECTS'} paragraph={"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."} delay={'150'}/>
        <Card header={'CLIENTS'} paragraph={"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}  delay={'300'}/>

     </div>
    </>
  )
}

function App(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    },[]);
  })

  return (
    <>
      <Header/>
      <EachService/>
    </>
  )
}

export default App

/**


*/