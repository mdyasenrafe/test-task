import React from "react";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-center mt-6">
        <h1 className="title font-bold text-[30px]">Home</h1>
      </div>
      <input type="text" className="border border-gray-400" />
    </Layout>
  );
}
