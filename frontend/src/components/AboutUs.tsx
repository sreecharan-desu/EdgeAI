export default function About() {
  return (
    <>
      <div className="flex-col m-2 mt-10 lg:m-10 lg:mt-32">
        <div>
          <h1 className="font-bold text-4xl m-3 lg:text-3xl lg:first-letter:text-4xl">
            About us
          </h1>
        </div>
        <div className="flex-col justify-center lg:m-20">
          <div className="flex justify-center place-content-center m-10">
            <img
              src="/animie.webp"
              className="shadow-lg shadow-slate-300 rounded-md h-96"
            />
          </div>
          <div>
            <p className=" italic first-letter:text-3xl text-lg text-left indent-5   lg:first-letter:text-3xl lg:first-letter:font-extrabold lg:text-lg lg:indent-10 lg:m-10">
              We the Team <b>EdgeAI</b> Presently consisting of two members{" "}
              <b>SreeHari (CEO)</b> and <b>SreeCharan (CTO)</b> who are
              undergraduates from IIT and IIIT love to learn new things daily
              and this learning eventually caused us to implement the knowledge
              that we are gaining in the real-world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
