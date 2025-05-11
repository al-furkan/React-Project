import React from 'react'

const Product = () => {
    const products = [
        {
          id: 1,
          image: "/img/Rectangle.jpg", // Replace with actual path
          title: "Food Eco",
          features: [
            "100% Organic Material",
            "Reduce Wastage",
            "Quicker Potty Training",
          ],
        },
        {
          id: 2,
          image: "/img/Rectangle.jpg",
          title: "Food Eco",
          features: [
            "100% Organic Material",
            "Reduce Wastage",
            "Quicker Potty Training",
          ],
        },
        {
          id: 3,
          image: "/img/Rectangle.jpg",
          title: "Food Eco",
          features: [
            "100% Organic Material",
            "Reduce Wastage",
            "Quicker Potty Training",
          ],
        },
      ];
    
      return (
        <section className="px-4 py-16 md:px-16 lg:px-32 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500">Supplies</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pick Our Products</h2>
            </div>
    
            {/* Products List */}
            <div className="flex flex-wrap justify-center gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-[300px] bg-white shadow-md rounded-2xl overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-cover h-64"
                  />
                  <div className="p-4 space-y-3">
                    <ul className="space-y-2 text-sm text-gray-700">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-green-500 text-lg">✔</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-semibold text-gray-800">{product.title}</p>
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-4 py-1 rounded-full transition">
                        Our Review
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Optional Carousel Arrows */}
            <div className="flex justify-between items-center mt-10 px-4 md:px-0">
              <button className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-500 hover:bg-yellow-200 shadow">
                ←
              </button>
              <button className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-500 hover:bg-yellow-200 shadow">
                →
              </button>
            </div>
          </div>
        </section>
      );
}

export default Product;