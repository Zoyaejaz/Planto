import React from 'react';
import { ChevronLeft, ChevronRight, Leaf, Heart, Users, Globe } from 'lucide-react';

const PlantoHomepage = () => {
  return (
    <div className="min-h-screen bg-[#081810] text-white">
      {/* Hero Section */}
      <div className="relative px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Our best O2 Badge */}
          <div className="mb-8">
            <div className="flex justify-center items-center mt-10  gap-1">
                <img src="before.png" alt="Before" className="w-10 h-10" />
                <h2 className="text-xl font-semibold text-white font-inter whitespace-nowrap">Our best O2</h2>
                <img src="after.png" alt="After" className="w-10 h-10" />
              </div>
          </div>

          {/* Main Content Container */}
          <div className="bg-white/10 rounded-4xl border border-white backdrop-blur-sm p-4 pt-2 relative overflow-hidden">
  <div className="flex flex-col lg:flex-row items-center gap-4">
    {/* Plant Image */}
   <div className="flex-shrink-0">
  <div className="w-100 h-150 mb-4 flex items-center justify-center -mt-30">
    <img
      src="o1.png"
      alt="Plant"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>


    {/* Content */}
    <div className="flex-1 lg:pl-6">
      <h1 className="text-3xl font-inter lg:text-4xl font-bold mb-4 leading-tight mt-0">
        We Have Small And Best O2<br />
        Plants Collection's
      </h1>

      <div className="text-white font-inter font-medium text-xl leading-relaxed mb-4 max-w-5xl">
        <p>Lorem ipsum dolor sit amet, consectetur</p> <p>adipiscing elit, sed do eiusmod tempor</p><p> incididunt ut labore et dolore magna</p><p>aliqua.Duis aute irure dolor in</p><p>reprehenderit in voluptate velit esse cillum</p><p>dolore eu fugiat nulla pariatur.</p>
      </div>

      <button className="px-4 py-2 backdrop-blur-sm border border-white rounded-lg hover:bg-white/20">
        Explore
      </button>
    </div>
  </div>

  {/* Navigation Arrows */}
  <div className="absolute right-8 bottom-8 flex items-center gap-4">
    <button className="text-white">
      <ChevronLeft size={24} />
    </button>
    <span className="text-white text-sm">01/04</span>
    <button className="text-white">
      <ChevronRight size={24} />
    </button>
  </div>

  {/* Pagination Dots */}
  <div className="flex justify-center gap-2 mt-6">
    <div className="w-8 h-1 bg-white rounded-full"></div>
    <div className="w-1 h-1 bg-white/30 rounded-full"></div>
    <div className="w-1 h-1 bg-white/30 rounded-full"></div>
  </div>
</div>

        </div>
      </div>

      {/* Company Info Section */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            
            <div>
                <div className="flex items-center gap-2 ml-2">
  <img 
    className="w-10 h-10" 
    src="nav.png"
    alt="Logo"
  />
  <h2 className="text-xl font-bold mb-0 mt-6">Planto.</h2>
</div>

              <h3 className="text-white font-inter font-semibold text-lg mb-2">
                ●Plants at Home: Bring Home Nature's Gateway
              </h3>
              <p className="text-white font-inter text-lg  ">
  Bringing plants home has been a practice for ages now. But have you ever wondered how that really works and why people keep doing so? There's something magical about having live plants in your space. Not only do they bring a slice of nature indoors or to your outdoor gardens but they also bring with them a variety of benefits. They promote an unparalleled sense of tranquility and easy-to-use online platform, you can buy live plants online and experience the joy of nature's gateways at your fingertips.
</p>

            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="px-6 py-5">
  <div className="max-w-6xl mx-auto">
    <div className="bg-[#B19292] rounded-3xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Plants Grow People */}
      <div className="flex flex-row items-center text-left gap-4">
        <div className="w-20 h-20 flex items-center justify-center">
          <img size={32} src="f1.png" alt="Plants Grow People" />
        </div>
        <h4 className="font-semibold text-black font-inter font-extrabold text-md">
          Plants Grow People
        </h4>
      </div>

      {/* Save Earth */}
      <div className="flex flex-row items-center text-left gap-4">
        <div className="w-20 h-20 flex items-center justify-center">
          <img size={32} src="f2.png" alt="Save Earth" />
        </div>
        <h4 className="font-semibold text-black font-inter font-extrabold text-md">
          Save Earth
        </h4>
      </div>

      {/* Save People */}
      <div className="flex flex-row items-center text-left gap-4">
        <div className="w-20 h-20 flex items-center justify-center">
          <img size={32} src="f1.png" alt="Save People" />
        </div>
        <h4 className="font-semibold text-black font-inter font-extrabold text-md">
          Save People
        </h4>
      </div>

      {/* Save Environment */}
      <div className="flex flex-row items-center text-left gap-4">
        <div className="w-20 h-20 flex items-center justify-center">
          <img size={32} src="f3.png" alt="Save Environment" />
        </div>
        <h4 className="font-semibold text-black font-inter font-extrabold text-md ">
          Save Environment
        </h4>
      </div>
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="px-6 py-12 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Follow Us */}
            <div>
              <h4 className="font-bold   text-2xl ">FOLLOW US</h4>
              <div>
                <img src="y.png" alt="Instagram" className="w-6 h-6 inline-block " />
                <img src="i.png" alt="Facebook" className="w-8 h-8 inline-block " />
                <img src="f.png" alt="Twitter" className="w-8 h-8 inline-block " />
                <img src="l.png" alt="LinkedIn" className="w-8 h-8 inline-block " />
              </div>
              <div className="space-y-2 text-white font-inter font-bold text-md mt-4">
                <p>Get In touch</p>
                <p>Call: +91-7305391369</p>
                <p>Email: support@planto.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold  text-2xl mb-4 ">Quick Link's</h4>
              <div className="space-y-2 text-gray-300 text-md font-inter items-center ml-6">
                <p className=" cursor-pointer ">Home</p>
                <select
  className="appearance-none bg-transparent text-gray-300 font-medium pr-2  py-1 rounded focus:outline-none cursor-pointer"
  style={{
   backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M7 10l5 5 5-5z'/></svg>")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.5rem center",
    backgroundSize: "1rem",
  }}
  onChange={(e) => {
    const selected = e.target.value;
    if (selected) window.location.href = `#${selected}`;
  }}
  defaultValue=""
>
  <option value="" disabled hidden>Plant Types</option>
  <option value="indoor" className="text-black">Indoor Plants</option>
  <option value="outdoor" className="text-black">Outdoor Plants</option>
  <option value="succulents" className="text-black">Succulents</option>
  <option value="herbs" className="text-black">Herbs</option>
</select>
                <p className=" cursor-pointer ">Contact</p>
                <p className=" cursor-pointer ">Privacy</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold  text-2xl mb-4">For Every Update's</h4>
              <div className="flex max-w-md h-20">
 <input
   type="email"
   placeholder="Enter Email...."
   className="flex-1 bg-transparent border border-gray-400 rounded-l-2xl px-6 py-4 text-white placeholder-white focus:outline-none focus:border-green-500 transition-colors"
 />
 <button className="bg-white text-black px-8 py-4 rounded-r-2xl font-semibold hover:bg-gray-100 transition-colors">
   SUBSCRIBE
 </button>
</div>
            </div>
          </div>

          {/* Copyright */}
          <div className=" mt-12 pt-6 text-right text-white text-md">
            © 2024, Planto. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlantoHomepage;