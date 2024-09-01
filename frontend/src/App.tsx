import React, { Suspense } from "react";
const Layout = React.lazy(() => import("./Layout"));
const NavBar = React.lazy(() => import("./components/Navbar"));
const Section1 = React.lazy(() => import("./components/section-1"));
const InfinityLoader = React.lazy(() => import("./components/InfinityLoader"));
const About = React.lazy(() => import("./components/AboutUs"));
function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex place-content-center items-center justify-center h-screen">
            <InfinityLoader />
          </div>
        }>
        <Layout>
          <Suspense
            fallback={<div className="text-center m-10">Loading Navbar</div>}>
            <NavBar />
          </Suspense>
          <Suspense
            fallback={<div className="text-center m-10">Loading Section1</div>}>
            <Section1 />
          </Suspense>
          <Suspense
            fallback={<div className="text-center m-10">Loading About</div>}>
            <About />
          </Suspense>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
