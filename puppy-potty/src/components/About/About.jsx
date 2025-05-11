import React from 'react'

const About = () => {
    return (
        <section className="px-4 py-16 md:px-16 lg:px-32 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-yellow-400 overflow-hidden">
                <img
                  src="./img/about.png" // Replace with actual image path
                  alt="Dog Training"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
    
            {/* Right Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-sm text-gray-500 mb-2">About Us</p>
              <h3 className="text-xl font-semibold text-gray-700">
                Best Service For Training <br /> Your Lovely Dog
              </h3>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-4">
                We Are The World’s Most <br /> Trusted Animal Trainer
              </h2>
              <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
                Lorem Ipsum Dolor Sit Amet Consectetur. Neque Et Aliquam
                Tincidunt Auctor Pellentesque Vestibulum Est. Mattis Fermentum
                Pulvinar Gravida Dictumst Sagittis. Sit Cursus Nulla Mattis.
                Gravida Enim In Fusce Maecenas Vel Cras Turpis.
              </p>
              <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full transition">
                About Us
              </button>
            </div>
          </div>
        </section>
      );
}

export default About;