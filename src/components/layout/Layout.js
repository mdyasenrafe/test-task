import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="container">{children}</main>
    </div>
  );
}
