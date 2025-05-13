import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Logo & Text */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/img/logo.png" alt="Puppy Potty Log" className=" object-scale-down" />
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500 text-yellow-500 font-medium">App</a></li>
            <li><a href="#" className="hover:text-yellow-500">How To</a></li>
            <li><a href="#" className="hover:text-yellow-500">Courses</a></li>
            <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-500">Products</a></li>
          </ul>
        </div>

        {/* Right: App Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
          <p className="text-sm mb-4">Available on Google Play and App Store.</p>
          <div className="flex space-x-3">
            <img src="/img/google-play.png" alt="Google Play" className="w-28 object-scale-down" />
            <img src="/img/App-Store.png" alt="App Store" className="w-28 object-scale-down" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-xs py-4 px-4 flex flex-col md:flex-row justify-between max-w-7xl mx-auto text-gray-500">
        <span>© 2023 potty.app</span>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-yellow-500">Terms of Service</a>
          <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;