import React from 'react'

const AppScreenshots = () => {
    return (
        <section className="bg-white py-20 px-4 md:px-16 lg:px-32 text-center">
          <div className="mb-12">
            <p className="text-sm text-gray-500">Screenshots</p>
            <h2 className="text-3xl md:text-4xl font-bold">App Screenshots</h2>
          </div>
    
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Screenshot 1 */}
            <div className="max-w-xs shadow-xl rounded-xl overflow-hidden">
              <img
                src="/path/to/screenshot-left.png"
                alt="App Screenshot Left"
                className="w-full object-cover"
              />
            </div>
    
            {/* Screenshot 2 */}
            <div className="max-w-xs shadow-xl rounded-xl overflow-hidden">
              <img
                src="/path/to/screenshot-center.png"
                alt="App Screenshot Center"
                className="w-full object-cover"
              />
            </div>
    
            {/* Screenshot 3 */}
            <div className="max-w-xs shadow-xl rounded-xl overflow-hidden">
              <img
                src="/path/to/screenshot-right.png"
                alt="App Screenshot Right"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
      );
}

export default AppScreenshots;