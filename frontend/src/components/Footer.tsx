export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-semibold">
                © {currentYear} &middot; EdgeAI &middot; All rights reserved.
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-400 hover:underline">
                LinkedIn
              </a>
              <a
                href="mailto:sreeharixe@gmail.com"
                target="_self"
                className="hover:text-gray-400 hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
