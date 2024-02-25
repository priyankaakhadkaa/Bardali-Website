import facebook from '../assets/image/facebook.png';
import instagram from '../assets/image/instagram.png';
import linkedin from '../assets/image/linkedin.png';


const Footer = () => {
  return (
    
<div className="bg-emerald-700 mt-16 md:px-14 p-4 max-w-screen-2xl mx-auto  text-white">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-7 ">
            <a href="http://" className="text-2xl font-semibold flex items-center space-x-3 text-White">
                {/* <img src={} alt="" className="w-10 inline-block items-center"/>  */}
                <span>B A R D A L I</span>
            </a>
            <p className="md:w-1/2"> We excel in branding and production, helping businesses stand out with captivating creativity.
                  We craft brand identities by build</p>
       
        <div> 
            <input className="bg-emerald-50 py-2 px-4 rounded-md focus:outline-none" type="email" id="email" placeholder="Your email" />
            <input className="bg-yellow-500 px-4 py-2 rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-secondary duration-300 transition-all " type="Submit" value="Subscribe" />
        </div>

        </div>

        {/* Foooter Links */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
        <div className="space-y-4 mt-4">
          <h4 className="text-xl">Platform</h4>
          <ul className="space-y-1">
            <a href="/" className="block hover:text-gray-300">Overview</a>
            <a href="/" className="block hover:text-gray-300">Service</a>
            <a href="/" className="block hover:text-gray-300">Contact</a>
            <a href="/" className="block hover:text-gray-300">About us</a>
            <a href="/" className="block hover:text-gray-300">Course</a>
        
          </ul>
        </div>

        <div className="space-y-4 mt-4">
          <h4 className="text-xl">Help</h4>
          <ul className="space-y-1">
            <a href="/" className="block hover:text-gray-300">How does it works</a>
            <a href="/" className="block hover:text-gray-300">Where to ask question</a>
            <a href="/" className="block hover:text-gray-300">How to play?</a>
            <a href="/" className="block hover:text-gray-300">Where to ask question</a>
            <a href="/" className="block hover:text-gray-300">How to play?</a>
        
          </ul>
        </div>


        <div className="space-y-4 mt-4">
          <h4 className="text-xl">Contact</h4>
          <ul className="space-y-1">
          
            <p className="block hover:text-gray-300">123 xyz xyz</p>
            <p className="block hover:text-gray-300">094532</p>
            <p className="block hover:text-gray-300">Itahari-6,Sunsari</p>
            <p className="block hover:text-gray-300">+977 9803322067</p>
           
        
          </ul>
        </div>
        </div>

      </div>

      <hr className='mt-2'/>
      
      <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-4'>
       <p>@ 2024 Bardali Creations. All Right Reserved.</p>
        <div className='flex items-center space-x-5 '>
          <img src={facebook} alt="" className='w-6 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
          <img src={instagram} alt="" className='w-6 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
          <img src={linkedin} alt="" className='w-6 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
        </div>
      </div>


    </div>


  )
}

export default Footer
