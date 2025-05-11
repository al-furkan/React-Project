import React from 'react'

const Features = () => {
    const features = [
        {
          title: "Dog walking",
          description:
            "Lorem ipsum dolor sit amet consectetur. Elementum dictum scelerisque arcu facilisis. Commodo semper ut nullam velit.",
          icon: "/img/dogIcon.png", // Replace with actual icon path
        },
        {
          title: "Dog Grooming",
          description:
            "Lorem ipsum dolor sit amet consectetur. Elementum dictum scelerisque arcu facilisis. Commodo semper ut nullam velit.",
          icon: "/img/dogIcon.png",
        },
        {
          title: "Meet A Sitter",
          description:
            "Lorem ipsum dolor sit amet consectetur. Elementum dictum scelerisque arcu facilisis. Commodo semper ut nullam velit.",
          icon: "/img/dogIcon.png",
        },
        {
          title: "Dog Training",
          description:
            "Lorem ipsum dolor sit amet consectetur. Elementum dictum scelerisque arcu facilisis. Commodo semper ut nullam velit.",
          icon: "/img/dogIcon.png",
        },
      ];
    
      return (
        <section className="px-4 py-20 md:px-16 lg:px-32 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <p className="text-sm text-gray-500">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Best Features</h2>
          </div>
    
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Features */}
            <div className="space-y-10 text-left">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 max-w-sm">
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Center Phone Image */}
            <div className="w-full md:w-80 flex justify-center">
              <img
                src="img/phoneN.png" // Replace with actual phone mockup image
                alt="App Interface"
                className="w-full max-w-xs"
              />
            </div>
    
            {/* Right Features */}
            <div className="space-y-10 text-left">
              {features.slice(2, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 max-w-sm">
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Features;