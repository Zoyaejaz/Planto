import React, { useState } from 'react';
import { Play, Star, ArrowRight,ChevronRight } from 'lucide-react';

const PlantWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const HorizontalPlantCard = ({ 
    title = "For Small Desk AI Plant",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price = "Rs. 599/-",
    image = "/api/placeholder/200/200",
    imagePosition = "left"
  }) => {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white rounded-3xl p-6 ml-30 mt-20 mb-40 shadow-2xl max-w-4xl">
        <div className={`flex items-center gap-6 ${imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
          {/* Plant Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 ">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-gray-400 text-sm">
                Plant Image
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            {/* Title */}
            <h3 className="text-white text-2xl font-bold font-inter">
              {title}
            </h3>

            {/* Description */}
            <p className="text-white font-inter text-sm leading-relaxed">
              {description}
            </p>

            {/* Price */}
            <div className="text-white text-2xl font-bold pt-0">
              {price}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-transparent border border-white  text-white px-6 py-2 rounded-lg ">
                Buy Now
              </button>
              <div className="flex items-center  border-2 border-white rounded-lg ">
               <button className="  p-2 rounded-lg ">
 <svg 
   width="25" 
   height="25" 
   viewBox="0 0 24 24" 
   fill="none" 
   stroke="currentColor" 
   strokeWidth="2" 
   strokeLinecap="round" 
   strokeLinejoin="round"
   className="text-white"
 >
   <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
   <line x1="3" y1="6" x2="21" y2="6"/>
   <path d="m16 10a4 4 0 0 1-8 0"/>
 </svg>
</button>
</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="relative w-full min-h-screen bg-cover bg-no-repeat" style={{
      backgroundImage: "url('/Back.jpg')",
      backgroundAttachment: "scroll",
    }}>
      
      {/* Navbar */}
      <nav className="relative z-50 bg-opacity-0 border-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-[40px] h-[40px] rounded-lg flex justify-start items-center">
                <img 
                  className="w-10 h-10 text-white" 
                  src="nav.png"
                  alt="Logo"
                />  
              </div>
              <span className="text-xl font-bold text-white font-inter pt-6">Planto.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10 font-inter">
              <a href="#home" className="text-white cursor-pointer">Home</a>
              <select
  className="appearance-none bg-transparent text-white font-medium pr-2 pl-8 py-1 rounded focus:outline-none cursor-pointer"
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

              <a href="#care" className="text-white cursor-pointer">More</a>
              <a href="#contact" className="text-white cursor-pointer">Contact Us</a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 pr-30">
              <div className="hidden md:flex items-center space-x-5">
                <img src="/search.png" alt="Search" className="w-6 h-6 cursor-pointer" />
                <img src="/pers.png" alt="Profile" className="w-6 h-6 cursor-pointer" />
                <img src="/bar.png" alt="Menu" className="w-6 h-6 cursor-pointer" />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                    ) : (
                      <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</a>
                <a href="#plants" className="block px-3 py-2 text-gray-700 hover:text-green-600">Plants</a>
                <a href="#care" className="block px-3 py-2 text-gray-700 hover:text-green-600">Care Tips</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600">About</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Contact</a>
                <button className="w-full text-left px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-2">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Breath Natural Plant Store Content */}
      <div className="relative z-10 px-6 py-10 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-5xl md:text-6xl font-semibold font-inter">Breath Natural</h1>
            <div><p className="mt-4 max-w-xl font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p> <p>tempor incididunt.
            </p>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side */}
            <div>
              {/* Buttons */}
            <div className="flex gap-3 mb-30 items-center">
  <button className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white rounded-lg hover:bg-white/20">
    Explore
  </button>

  <button className="flex items-center gap-3 px-4 py-2 border border-transparent rounded-lg hover:bg-white/10">
  <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
    <Play className="w-4 h-4 fill-white ml-0.5" />
  </div>
  <p className="font-inter text-white">Live Demo...</p>
</button>

</div>


              {/* Review Card */}
              <div className="relative max-w-sm rounded-lg bg-white/10 p-6 pb-27">
                <div className="absolute inset-0 rounded-lg border-[2px]" style={{
                  borderImageSource: 'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(186, 182, 182, 0.75) 39.29%, rgba(118, 109, 109, 0.46) 91.16%)',
                  borderImageSlice: 1,
                }}></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12  rounded-full flex items-center justify-center">
                      <img 
                        src="boy.jpg" 
                        alt="Reviewer" 
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">Rohan Sharma</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>

              {/* Our Trendy Plants */}
              <div className="flex justify-center items-center mt-10 ml-140 gap-1">
                <img src="before.png" alt="Before" className="w-10 h-10" />
                <h2 className="text-xl font-semibold text-white font-inter whitespace-nowrap">Our Trendy Plants</h2>
                <img src="after.png" alt="After" className="w-10 h-10" />
              </div>
            </div>

            {/* Right Side */}
            <div className="relative">
            

              {/* Featured Plant Card */}
<div 
  className="bg-white/10 backdrop-blur-md border border-
   p-8 shadow-2xl  relative overflow-hidden w-90 h-90 rounded-[30px] ml-50 mt-2"
  style={{
    
  }}
>
  <div className="flex justify-center ">
    <div className="">
      <div className="w-40 h-40 flex pb-2 ml-15 mt-0">
        <img
          src="leaf.png"
          alt="Calathea Plant"
          className=" "
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
         
      </div>
       {/* Text Content */}
  <div className="text-left space-y-2">
    <p className="text-white text-md font-inter font-light tracking-wide  ">
      Trendy House Plant
    </p>
    
    <div className="flex items-center justify-between">
      <h2 className="text-white text-3xl font-white tracking-wide">
        Calathea Plant
      </h2>
      
      <button className="text-white/70 hover:text-white transition-colors duration-200 pl-14 pr-0 group-hover:translate-x-1 transform transition-transform duration-200">
        <ChevronRight size={28} />
      </button>
    </div>
  </div>
  {/* Pagination Dots */}
  <div className="flex justify-center gap-2 mt-15">
    <div className="w-8 h-1 bg-white rounded-full"></div>
    <div className="w-1 h-1 bg-white/30 rounded-full"></div>
    <div className="w-1 h-1 bg-white/30 rounded-full"></div>
  </div>

    </div>
  </div>
</div>




            </div>
          </div>
           <div className="mt-45">
            <div className="max-w-6xl mx-auto space-y-8">
              {/* First Card - Image on Left */}
              <HorizontalPlantCard
                title="For Small Desk AI Plant"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                price="Rs. 599/-"
                image="t1.jpg"
                imagePosition="left"
              />

              {/* Second Card - Image on Right */}
              <HorizontalPlantCard
                title="For Fresh Deco AI Plant"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                price="Rs. 499/-"
                image="t2.png"
                imagePosition="right"
              />
            </div>
          </div>
          <div className="text-center mb-35 mt-20">
          <div className="flex justify-center items-center mt-10  gap-1">
                <img src="before.png" alt="Before" className="w-10 h-10" />
                <h2 className="text-xl font-semibold text-white font-inter whitespace-nowrap">Our Top Selling</h2>
                <img src="after.png" alt="After" className="w-10 h-10" />
              </div>
        </div>
        </div>
      </div>  
    </div>
  );
};

export default PlantWebsite;
