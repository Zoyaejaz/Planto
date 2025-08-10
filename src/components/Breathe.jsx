import React from 'react';
import { Play, Star, ArrowRight } from 'lucide-react';

export default function BreathNaturalPlantStore() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 text-white overflow-hidden">
            {/* Background decorative elements */}


            <div className="relative z-10 container mx-auto px-10 py-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-5 mt-10">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                            Breath Natural
                        </h1>
                        <p className="text-white max-w-md leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
                    {/* Left Side - Controls and Review */}
                    <div className="space-y-8">
                        {/* Action Buttons */}
                        <div className="flex gap-1 pb-12">
                            <button className="w-[100px] h-[40px]  mt-2 px-4 py-1 bg-white/10 backdrop-blur-sm border border-white rounded-lg text-white hover:bg-white/20 transition-all duration-300 font-medium">
                                Explore
                            </button>
                            <button className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-white/10 transition-all duration-300">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white">
                                    <Play className="w-4 h-4 text-white ml-0.5 " />
                                </div>
                                Live Demo...
                            </button>

                        </div>

                        {/* Customer Review */}
                        <div className="relative max-w-sm rounded-lg bg-white/10 ">
  <div
    className="absolute inset-0 rounded-lg border-[2px] "
    style={{
      borderImageSource:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(186, 182, 182, 0.75) 39.29%, rgba(118, 109, 109, 0.46) 91.16%)',
      borderImageSlice: 1,
    }}
  ></div>

  <div className="relative z-10 p-6 bg-transparent rounded-lg">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
        RS
      </div>
      <div>
        <h3 className="font-semibold text-white">Rohan Sharma</h3>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-white text-sm leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
  </div>
</div>
                        {/* Our Trendy Plants Label */}
<div className="flex justify-center items-center h-screen gap-2">
  <img src="before.png" alt="img1" className="w-10 h-10" />
  <h2 className="text-xl font-semibold text-black">Our Trendy Plants</h2>
  <img src="after.png" alt="img2" className="w-10 h-10" />
</div>


                    </div>

                    {/* Right Side - Plant Images */}
                    <div className="relative">
                        {/* Main Plant Image - Add your plant image here */}
                        <div className="relative z-10">
                            <div className="w-80 h-80 md:w-96 md:h-96 mx-auto relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rounded-full"></div>
                                {/* Replace src with your main plant image */}
                                <img
                                    src="/path-to-your-main-plant-image.jpg"
                                    alt="Main plant"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                          {/* Featured Plant Card - Add your featured plant image here */}
                        <div className="absolute top-8 right-0 bg-black/30 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-64">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-green-500 p-1">
                                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center overflow-hidden">
                                        {/* Replace src with your Calathea plant image */}
                                        <img
                                            src="/path-to-your-calathea-plant-image.jpg"
                                            alt="Calathea Plant"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-400 text-sm mb-1">Trendy House Plant</p>
                                    <h3 className="text-white font-semibold text-lg">Calathea Plant</h3>
                                </div>
                                <button className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                                    <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
}