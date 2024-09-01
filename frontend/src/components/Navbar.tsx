export default function NavBar() {
  return (
    <>
      <div className="flex justify-between w-full bg-transparent">
        <h1 className="font-bold m-5 mt-5  text-orange-400 first-letter:text-5xl text-4xl">
          EdgeAI
        </h1>
        <a href="mailto:sreeharixe@gmail.com" target="_self" id="nav-contact">
          <div className="m-5">
            <button className="bg-white font-semibold px-6 py-2 border-2 border-orange-400 rounded-3xl hover:border-white  hover:bg-orange-400 hover:text-white hover:border-3 transition-all">
              Contact us
            </button>
          </div>
        </a>
      </div>
    </>
  );
}
