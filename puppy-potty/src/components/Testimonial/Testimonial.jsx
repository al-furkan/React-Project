import React from 'react'

const Testimonial = () => {
    const testimonials = [
        {
          quote:
            "Lorem ipsum dolor sit amet consectetur. Neque sed quis placerat semper feugiat. Nisi egestas lorem non sed aenean risus sit vel volutpat. Commodo et malesuada neque tortor convallis.",
          name: "Dennis Callis",
          time: "11:30 PM",
          image: "/img/Ellipse 10.jpg", // Replace with actual image paths
          rating: 5,
        },
        {
          quote:
            "Lorem ipsum dolor sit amet consectetur. Neque sed quis placerat semper feugiat. Nisi egestas lorem non sed aenean risus sit vel volutpat. Commodo et malesuada neque tortor convallis.",
          name: "Dennis Callis",
          time: "11:30 PM",
          image: "/img/Ellipse 10.jpg",
          rating: 5,
        },
      ];
      


  return (
    <section className="bg-gray-50 py-20 px-4 md:px-16 text-center">
    <div className="mb-12">
      <p className="text-sm text-gray-500">Testimonial</p>
      <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`bg-white max-w-md w-full p-6 rounded-md text-left shadow-md ${
            index === 0 ? "border-2 border-blue-300" : ""
          }`}
        >
          <div className="text-yellow-400 text-4xl mb-4">❝</div>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            {testimonial.quote}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">{testimonial.name}</p>
                <div className="text-yellow-400 text-xs">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-400">{testimonial.time}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Dots Navigation (Static Example) */}
    <div className="flex justify-center mt-8 gap-2">
      <span className="h-2 w-6 bg-yellow-400 rounded-full"></span>
      <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
      <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
    </div>
  </section>
  )
}

export default Testimonial;