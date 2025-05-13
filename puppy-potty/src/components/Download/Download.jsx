import React from 'react';

const Download = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download Our Tracking Sheet
          </h2>
          <h3 className="text-lg font-semibold mb-2">Train Your Pup :</h3>
          <p className="text-gray-600 mb-6">
            Log your dog’s pees, poops and meals and Puppy Potty Log will use
            the data to create a custom housetraining schedule unique to your
            fur baby.
          </p>
          <a
            href="/downloads/tracking-sheet.pdf" // Replace with your actual file path
            download
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block"
          >
            Download Now
          </a>
        </div>

        {/* Image Content */}
        <div className="flex-1">
          <img
            src="./img/dog.png" // Replace with actual image path
            alt="Puppy tracking sheet cover"
            className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
