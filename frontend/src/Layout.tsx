import React from "react";
const Footer = React.lazy(() => import("./components/Footer"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
