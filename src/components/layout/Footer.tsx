export const Footer = () => {
  return (
    <footer className="flex min-h-16 border-t-2 p-4">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-indigo-950">Kreate</h3>
            <p className="text-gray-600">
              Empowering creators to monetize their passion and build meaningful
              connections.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-indigo-950">Product</h4>
            <ul className="space-y-2">
              <li>
                <span className="cursor-pointer text-gray-600 hover:text-indigo-600">
                  Features
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-gray-600 hover:text-indigo-600">
                  Pricing
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-gray-600 hover:text-indigo-600">
                  Security
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-indigo-950">Company</h4>
            <ul className="space-y-2">
              <li>
                <span className="cursor-pointer text-gray-600 hover:text-indigo-600">
                  About
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-gray-600 hover:text-indigo-600">
                  Careers
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-gray-600 hover:text-indigo-600">
                  Blog
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-indigo-950">Connect</h4>
            <div className="flex space-x-4">
              <span className="cursor-pointer text-xl text-gray-600 hover:text-indigo-600">
                <i className="fa-brands fa-twitter"></i>
              </span>
              <span className="cursor-pointer text-xl text-gray-600 hover:text-indigo-600">
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span className="cursor-pointer text-xl text-gray-600 hover:text-indigo-600">
                <i className="fa-brands fa-discord"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Kreate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
