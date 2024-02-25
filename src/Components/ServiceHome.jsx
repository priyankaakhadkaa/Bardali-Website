import jigsaw from '../assets/image/jigsaw.png';
import digitalmarketing from '../assets/image/digitalmarketing.png';
import web_developer from '../assets/image/web_developer.png';

const Service = () => {
  return (
    <div className="lg:my-6   md:px-6 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row  justify-between items-start gap-10">
        <div className="lg:w-2/5 ">
          <h3 className="text-3xl text-primary font-bold lg:w-2/2 mb-3 mt-10"> Want Your Brand To Have Greater Reach?</h3>
          <p className="text-base text-tartiary">Ignite your brands reach with Bardali Creations!  Elevate visibility, engage audiences, and grow exponentially. From social media mastery to influencer collaborations, we have got the key to digital success.</p>
        </div>
          


          {/* Service Card */}
        <div className=" w-full lg:3/5 ">
         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  my-12 items-start md:gap-12 gap-8">
         
          
          <div className='cursor-pointer bg-slate-100 rounded-[35px] h-48 shadow-2xl	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) p-4
          items-center flex justify-center  hover:-translate-y-4 transition-all duration-300'>
            <div >
               <img className=" h-10 ml-20"src={jigsaw} alt="" />
               <h5 className="text-xl font-semibold text-primary px-5 text-center mt-5">Branding and Design</h5>
            </div>
          </div>
          
          <div className='cursor-pointer bg-slate-100 rounded-[35px] h-48 shadow-2xl 	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) p-4
          items-center flex justify-center  hover:-translate-y-4 transition-all duration-300'>
            <div >
               <img className=" h-10 ml-20"src={digitalmarketing} alt="" />
               <h5 className="text-xl font-semibold text-primary px-5 text-center mt-5">Digital Marketing</h5>
            </div>
          </div>

          <div className='cursor-pointer bg-slate-100 rounded-[35px] h-48 shadow-2xl	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) p-4
          items-center flex justify-center  hover:-translate-y-4 transition-all duration-300'>
            <div >
               <img className=" h-10 ml-20"src={web_developer} alt="" />
               <h5 className="text-xl font-semibold text-primary px-5 text-center mt-4">Website Development</h5>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Service
