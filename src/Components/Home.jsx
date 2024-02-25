import Banner from '../Shared/Banner'
import banner from '../assets/image/banner.png';
import man from '../assets/image/man.jpg';
import hidhes from '../assets/image/hidhes.png';
import Service from './ServiceHome'
import expert from '../assets/image/expert.png';

import alfa from '../assets/image/alfa.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import riri from '../assets/image/riri.mp4';



const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow: <div className="slick-arrow slick-prev  bg-black">Previous</div>,
    // nextArrow: <div className="slick-arrow slick-next  text-black">Next</div>,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint based on your design needs
        settings: {
          slidesToShow: 1, // Number of slides to show on smaller screens
        },
      },
      ],
  };


 

 
   

  return (
    <div className=" max-w-screen-2xl mx-auto mt-20">
     <Banner banner={banner} heading="Complete Branding Solution and Building Website"
      subheading="We excel in branding and production, helping businesses stand out with captivating creativity.
       We craft brand identities by building website, resonate with audiences, and differentiate from competitors." btn1={'Blog'}/>
       <div><Service/></div>

       {/* Optimize you brand */}
    

<div className="bg-green">
    <div className="items-center  flex flex-col justify-center max-w-screen-xl">
  <div className="text-center flex flex-col w-4/5">
  <div className="text-center">
    <p className="my-1  w-56 text-white inline-block bg-emerald-700 px-3 rounded-xl text-bold">Optimize Business Growth</p>
  </div>
    <p className="my-3 text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-center font-bold text-primary">Choose The Ideal Solution To <span className="text-secondary"> Boost </span>Your<span className="text-secondary"> Business</span></p>
  </div>
  </div>


  <div className="w-full  pb-16 px-4">
   <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
    <img className="w-[500px] mx-auto h-56  my-4" src={hidhes} alt=''/>
   <div className='flex flex-col justify-center'>
   <p className="md:text-base text-base "> At BrandCurb, we understand that every business is unique, which is why we offer custom web design and development packages 
            that are tailored to your specific needs. Our team of experienced designers and developers work closely with you to create a website that is not only visually stunning but also functional and user-friendly.
            From e-commerce sites to custom CMS builds, our packages are designed to meet your specific requirements and budget.</p>
   </div>
  </div>
  </div>
  </div>




{/* Company logo */}
<section className=" relative  bg-hero-pattern bg-cover h-screen ">
<div className="absolute inset-0">
        <div className=" opacity-50  bg-gree h-full w-full absolute"></div>
      </div>
    <div className=" relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center  ">
        
        <div className="max-w-3xl relative z-10 mx-auto text-center pt-1">
  <h1 className="text-4xl font-bold text-emerald-600 leading-tight mb-1 border-t-4 border-b-4 border-emerald-400 py-1">
  Trusted By Renowned Brands
  </h1>
  <p className="text-lg text-cyan-800 mb-8"> We have been providing our services to top brands, building a bond of
          trust.</p>
  
          
  </div>

        <div className=" grid items-center max-w-4xl grid-cols-4 gap-4 mx-auto mt-8 md:mt-20 md:grid-cols-4  ">
            
       
        <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full mx-auto h-7" src={expert} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={alfa} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>
            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full mx-auto h-7" src={expert} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full mx-auto h-7" src={expert} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>

            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>
            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>
            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>
            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>
            <div className="bg-green h-12 flex shadow-lg items-center justify-center">
                <img className="object-contain mt-2 w-full h-8 mx-auto" src={expert} alt=""/>
            </div>
        </div>

        <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 block"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 block"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 block"></div>
        </div>

        <p className="mt-10 text-base text-center text-emerald-600 md:mt-12 p-3 py-1 border w-56 border-emerald-400 rounded-full mx-auto">
           + more companies</p>
        
    </div>
</section>



    
  



  {/* Customer FEEDBACK */}
    <div  className="w-3/4 m-auto ">
      <div className="mt-20">
        
<div className="flex items-center flex-col mb-9 justify-center">
  <p className='text-4xl text-primary '>CUSTOMERS FEEDBACK</p> 
  <p className='text-xl text-orange-300'>Discover firsthand experiences as shared by our clients.</p>
</div>
      <Slider {...settings}>
        {reviewData.map((d) =>(
          // eslint-disable-next-line react/jsx-key
          <div className=" bg-slate-100 h-[450px] text-black rounded-xl">
            <div className="h-36 rounded-t-xl  flex justify-center items-center">
              <img className="rounded-full h-28 w-28 object-cover border-4 border-white" src={d.img} alt=""/>
            </div>


            <div className='flex flex-col justify-center items-center gap-4 p-4 text-center'>
              <p className="text-xl font-semibold text-secondary">{d.name}</p>
              <p>{d.review}</p>
              {/* <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read more</button> */}
            </div>
            </div>
         
        ))}
        </Slider>
      </div>
    </div>







  
    </div>
     

   
  )
}
const reviewData =[
  {
     name:`John Morgan`,
     img:man,
     review:`Learn how to create a stunning Image Slider or Carousel in ReactJS effortlessly with the help of React Slick! In this step-by-step tutorial, I'll guide you through the entire process, making it super easy for beginners and experienced developers alike.`,
  },
  {
    name:`John Morgan`,
    img:man,
    review:`Learn how to create a stunning Image Slider or Carousel in ReactJS effortlessly with the help of React Slick! In this step-by-step tutorial, I'll guide you through the entire process, making it super easy for beginners and experienced developers alike.`,
 },
 {
  name:`John Morgan`,
  img:man,
  review:`Learn how to create a stunning Image Slider or Carousel in ReactJS effortlessly with the help of React Slick! In this step-by-step tutorial, I'll guide you through the entire process, making it super easy for beginners and experienced developers alike.`,
},
{
  name:`John Morgan`,
  img:man,
  review:`Learn how to create a stunning Image Slider or Carousel in ReactJS effortlessly with the help of React Slick! In this step-by-step tutorial, I'll guide you through the entire process, making it super easy for beginners and experienced developers alike.`,
},
{
  name:`John Morgan`,
  img:man,
  review:`Learn how to create a stunning Image Slider or Carousel in ReactJS effortlessly with the help of React Slick! In this step-by-step tutorial, I'll guide you through the entire process, making it super easy for beginners and experienced developers alike.`,
},
]

                 
export default Home



