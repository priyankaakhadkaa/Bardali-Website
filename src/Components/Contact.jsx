

const Contact = () => {
  return (
    <div className=" pt-16">
     <div className="flex flex-col   items-center justify-center pt-14 pb-28 px-4 bg-contactpattern bg-center  bg-cover">
  <h1 className="text-emerald-700  text-3xl flex text-center font-bold">Connect With Us To Elevate Your Business</h1>
  <h4 className="text-slate-500 text-md  text-center">If you have any enquiry, just fill in the contact form, and we will answer you shortly.</h4>
</div>
      <div className="  grid   max-w-6xl   mt-[-10px] place-items-center grid-cols-1 gap-8 mx-auto   md:grid-cols-3 ">
        <div className="shadow-2xl bg-slate-100 border border-slate-200  flex w-96 flex-col items-center justify-center  px-4 py-6  ">
        <h className="text-emerald-800 text-2xl title-font font-bold ">Time</h>
        <h4 className="text-emerald-600 text-md">Sunday to Friday – 10:00 am to 5:00 pm</h4>
        </div>

        <div className="  shadow-2xl bg-slate-100 border border-slate-200  flex flex-col w-96   items-center justify-center  px-8 py-6   ">
        <h className="text-emerald-800 text-2xl title-font font-bold ">Phone Number</h>
        <h4 className="text-emerald-600 text-md">+977 9849743401, 9862042102</h4>
        </div>

        <div className="shadow-2xl bg-slate-100 border border-slate-200  flex flex-col  w-96  items-center justify-center  px-16 py-6   ">
        <h className="text-emerald-800 text-2xl title-font font-bold ">Email Address</h>
        <h4 className="text-emerald-600 text-md">contact@bardali.com.np</h4>
        </div>
      </div>


    </div>
  )
}

export default Contact
