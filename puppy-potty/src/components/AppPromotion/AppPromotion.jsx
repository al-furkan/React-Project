import React from 'react'

const AppPromotion = () => {
    return (
        <section className="px-4 py-16 md:px-16 lg:px-32 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                One Mobile App <br /> For Your Lovely Pet
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Lorem Ipsum Dolor Sit Amet Consectetur. Magna Dictumst Mattis Tempus Ac 
                Dignissim Ultrices. Sodales Tellus Egestas Ac Viverra Mauris Enim Bibendum 
                Commodo Aliquam. Elementum Et Est Semper Faucibus Imperdiet Urna At Sagittis. 
                Nunc Sit Pellentesque In Odio Ultrices Volutpat Nunc Nec Lacus. Sed Orci Faucibus.
              </p>
    
              <p className="text-lg font-semibold mb-3">Download The App</p>
              <div className="flex justify-center md:justify-start gap-4">
                <img
                  src="img/google-play.png" // Replace with actual path
                  alt="Google Play"
                  className="w-36 h-12 object-scale-down"
                />
                <img
                  src="/img/App-Store.png" // Replace with actual path
                  alt="App Store"
                  className="w-36 h-12 object-scale-down"
                />
              </div>
            </div>
    
            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="flex gap-4">
                <img
                  src="./img/App screnshots.png" // Replace with actual image
                  alt="App screen 1"
                  className="w-60 md:w-80 rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      );
}

export default AppPromotion;