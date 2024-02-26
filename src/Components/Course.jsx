
import courseintro from '../assets/image/courseheading.png';
import coursehead from '../assets/image/pngegg (1).png';
import camera from '../assets/image/camera.png';
import webDevelopment from '../assets/image/dev.png';
import FAQItem from './FaqItem';
const Course = () => {
  const faqs = [
    {
      question: 'How do I enrol in a course?',
      answer: 'Contact us '
    },
    
    {
      question: 'Do I get a certificate after completing the course?',
      answer: 'Upon successful completion of the course, students will be issued a certificate jointly signed by the delivering BY BARDALI CREATIONS, depending on the organizers of the course. Certain courses are awarded badges rather than e-Certificates. Please ensure that you read the training outline for each course so that you are well informed.'
    },
    {
      question: 'Can I enroll for more than one course at a time?',
      answer: 'Yes, you can enroll for more than one course at a time'
    },

    {
      question: 'Can I register for courses outside the region where I live?',
      answer: 'Yes, you can register for a course in any region of your choice by filling our google form.'
    },

    {
      question: 'Can I register for courses outside the region where I live?',
      answer: 'Yes, you can register for a course in any region of your choice by filling our google form.'
    },

    
  ];

  return (

    <div className="  section overflow-x-hidden bg-gradient-to-br  via-green to-lime-200 " id="course ">


      <div className="mt-[90px] grid md:grid-cols-2 gap-1 place-items-center ">
        <div className=" rounded-lg ">
          <img
            src={courseintro}
            alt=""
            className=" from-lime-200 via-green scale-12 w-[390px] md:w-240px] mx-auto  object-cover"
          />
        </div>
        
        <div className=" sm:text-[2rem]  text-[1.5rem] p-10 ">
          <div className='font-bold  sm:pr-2 md:pr-32 md:text-[2.5rem]  sm:text-[1rem]'> We provide the best{" "}
          <span className=" text-emerald-600 font-bold ">COURSES</span></div>
         
          <p className=" text-base sm:pr-2 md:pr-32 text-emerald-2900 text-start">At our IT company, we offer top courses in web development, graphic design, photography, and digital marketing. Our programs cover essential skills like coding languages, design tools, photography techniques, and digital marketing strategies, ensuring our team is equipped to excel in their roles and contribute to the companys success</p>

          <button className='py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold '><a href="./Home.jsx">To know more</a></button>
        </div>
      </div>

<div className=''>
      <div className='text-center md:mt-20 sm:mt-11 m-5 '>
        <div className='text-2xl sm:text-4xl md:text-2xl lg:text-1xl text-center'>
          OUR TOP <span className='  text-orange-400 font-bold'>COURSES</span>
          <p className="max-w-7xl mx-auto sm:pr-2 md:pr-32  text-center text-lg mt-2 ">Unlock your potential with our top-tier courses in web development, graphic design, and digital marketing. From coding languages to design tools and marketing strategies, we provide comprehensive training to equip you with the skills needed to thrive in todays competitive digital landscape.</p>
        </div>
      </div>

      <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-24 items-center justify-center  max-w-6xl mx-auto pl-8  ">

        <div className="group h-96 w-80 ">
        <h2 className='text-2xl font-bold text-center bg-slate-100 my-2  text-green-200 text-emerald-800'>
            Web-Development
          </h2>
          <div className="bg-gradient-to-r from-red-400 to-yellow-500 relative h-80 w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 ">
              <img className="h-full w-full rounded-xl shadow-xl shadow-black/40" src={webDevelopment} alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-lime-300">Web Development</h1>
                <p className="text-lg text-green-600"></p>
                <p className="text-base"> We provide comprehensive training to kickstart your career in building stunning websites and web applications.</p>

              </div>
            </div>
          </div>
        </div>


        <div className="group h-96 w-80 ">
        <h2 className=' text-2xl font-bold text-center bg-slate-100 my-2  text-green-200 text-emerald-800' >
            Photography
          </h2>
          <div className="bg-gradient-to-r from-red-400 to-yellow-500 relative h-80 w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-xl  shadow-xl shadow-black/40" src={camera} alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-lime-300">Photography</h1>
                <p className="text-lg text-green-600">Photographer & Art</p>
                <p className="text-base">Refine your photography skills with our IT companys course. Learn composition, lighting, and editing to capture compelling images.</p>
               
              </div>
            </div>
          </div>
        </div>

        <div className="group h-96 w-80 ">
        <h2 className='text-2xl font-bold text-center bg-slate-100 my-2  text-green-200 text-emerald-800'>
            Graphic Design
          </h2>
          <div className="bg-gradient-to-r from-red-400 to-yellow-500 relative h-80 w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={coursehead} alt="" />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-lime-300">Graphic Design</h1>
                <p className="text-lg text-green-600"></p>
                <p className="text-base">Join our graphic design course. Master Adobe tools and design principles for stunning visuals. Perfect for beginners and pros alike.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 mt-8">
      <h2 className="text-3xl font-bold mb-4 mt-28 text-emerald-600 px-2 ">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
    </div>
    </div>
  )


}

export default Course