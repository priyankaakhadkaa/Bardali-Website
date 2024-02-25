

const Banner = ({banner,heading,subheading,btn1}) => {
  return (
    <div className=" md:mx-12 m-4 gradientBg rounded-xl rounded-br-[90px] md:p-9 px-4 py-9">
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
  

       {/* Banner Image */}
       <div>
           <img src={banner} alt="banner" className="lg:h-[306px]" />
       </div>


            {/* Banner content */}
            <div className="md:w-3/5">
           <h2 className="md:text-4xl text-4xl font-bold text-white mb-4 md:leading-[70px] lg:leading-[60px]">{heading} </h2>
           <p className='text-[#EBEBEB] text-xl mb-8'> {subheading}</p>
           <button className="py-2 px-12 font-semibold bg-yellow-500 rounded  text-white hover:bg-orange-400 transition-all duration-300 ">{btn1}</button>
           {/* <button>Blog</button> */}
       </div>
    </div>   
 </div>
  )
}

export default Banner
