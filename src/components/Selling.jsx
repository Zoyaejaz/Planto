import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const PlantCatalog = () => {
  // Plant data - you can replace with your own images
  const plants = [
    {
      id: 1,
      name: "Peace Lily Plant",
      price: "Rs. 299/-",
      rating: 4.5,
      image: "p1.png"
    },
    {
      id: 2,
      name: "Rose Plant",
      price: "Rs. 100/-",
      rating: 5,
      image: "p2.png"
    },
    {
      id: 3,
      name: "Areca Palm Plant",
      price: "Rs. 499/-",
      rating: 4.5,
      image: "p3.png"
    },
    {
      id: 4,
      name: "Anthurium Red Plant",
      price: "Rs. 799/-",
      rating: 4.5,
      image: "p4.png"
    },
    {
      id: 5,
      name: "Thuja Plant",
      price: "Rs. 1099/-",
      rating: 5,
      image: "p5.png"
    },
    {
      id: 6,
      name: "Echeveria Lotus Chinensis Plant",
      price: "Rs. 399/-",
      rating: 4.5,
      image: "p6.jpg"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Manjari Bhatt",
      review: "Great delivery team. They took care to deliver in time. I received best quality plants as mentioned on website. They deliver as per promise.",
      img:"c1.jpg"
    },
    {
      id: 2,
      name: "Nehal Sharma",
      review: "Great quality of plants, professional packaging delivered to Delhi station in 2 days. Clean plants and pot.",
      img:"c2.jpg"
    },
    {
      id: 3,
      name: "Altu Banthoy",
      review: "Super quick and all safe. I received as promised on website. All plants came on delivery time. Thanks a lot for great service!",
      img:"c3.jpg"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-0.5 mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            className={star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-600 text-gray-600"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#081810] p-6">
      {/* Plant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 max-w-6xl mx-auto mb-12">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white/10 rounded-[50px] p-6 border border-white/60 backdrop-blur-xl "
          >
            {/* Plant Image */}
            <div className="flex justify-center mb-4">
              <div className="w-50 h-50  rounded-lg flex items-center justify-center mt-0">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-gray-500 text-sm">
                  Plant Image
                </div>
              </div>
            </div>

            {/* Plant Name */}
            <h3 className="text-white text-center font-medium font-inter font-bold mb-1">
              {plant.name}
            </h3>

            {/* Price and Cart */}
            <div className="flex items-center justify-between mb-2 ">
              <span className="text-white font-bold font-inter ml-23">
                {plant.price}
              </span>
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

            {/* Star Rating */}
            <div className="flex justify-center">
              <StarRating rating={plant.rating} />
            </div>
          </div>
        ))}
      </div>

      {/* Customer Review Section */}
      <div className="max-w-6xl mx-auto">
        {/* Customer Review Header */}
        <div className="text-center mb-30 mt-5">
          <div className="flex justify-center items-center mt-10  gap-1">
                <img src="before.png" alt="Before" className="w-10 h-10" />
                <h2 className="text-xl font-semibold text-white font-inter whitespace-nowrap">Customer Review</h2>
                <img src="after.png" alt="After" className="w-10 h-10" />
              </div>
        </div>

        {/* Review Cards */}
      {/* Review Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {reviews.map((review) => (
    <div
      key={review.id}
      className="relative max-w-sm rounded-lg bg-white/10 p-6 pb-27"
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-lg border-[2px]"
        style={{
          borderImageSource:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(186, 182, 182, 0.75) 39.29%, rgba(118, 109, 109, 0.46) 91.16%)',
          borderImageSlice: 1,
        }}
      ></div>

      {/* Card Content */}
      <div className="relative z-10">
        {/* Reviewer Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-600 overflow-hidden">
            <img
              src={review.img}
              alt={review.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML = `<span class='text-white text-sm font-medium'>${review.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}</span>`;
              }}
            />
          </div>
          <div>
            <h4 className="font-semibold text-white">{review.name}</h4>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-sm text-white font-inter mt-7">{review.review}</p>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
};

export default PlantCatalog;
