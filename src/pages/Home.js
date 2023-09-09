import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { selectData } from "../utils/data/SelectData";
import { Toast } from "../components/common/Toast";

export default function Home() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const getLocalData = localStorage.getItem("formData");
    if (getLocalData) {
      const localData = JSON.parse(getLocalData);
      const newData = [...localData, formData];
      localStorage.setItem("formData", JSON.stringify(newData));
    } else {
      localStorage.setItem("formData", JSON.stringify([formData]));
    }

    setFormData({});
    Toast.fire({
      icon: "success",
      title: "Data saved successfully",
    });
  };

  return (
    <Layout>
      <div className="text-center mt-6">
        <h1 className="title font-bold text-[30px]">Home</h1>
      </div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-3 text-[16px] font-[600] text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Type your name"
            className="border-lightgray input"
            required
            onChange={handleChange}
            name="name"
            value={formData?.name || ""}
          />
        </div>
        <div>
          <label className="block mb-3 text-[16px] font-[600] text-gray-700">
            Sectors
          </label>
          <select
            name="sector"
            onChange={handleChange}
            required
            className="border-lightgray input"
            value={formData?.sector || ""}
          >
            <option value="" selected disabled defaultValue={""}>
              Select Sector
            </option>
            {selectData.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <label className="mb-3  text-[16px] font-[600] text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            name="agreeToTerms"
            required
            onChange={handleChange}
            checked={formData?.agreeToTerms}
          />
          <span className="ml-2">Agree to terms</span>
        </label>
        <div className="flex justify-center items-center">
          <button
            className="mt-6 h-[48px] items-center w-full bg-[#3c7fff] hover:bg-indigo-800 px- rounded text-white flex justify-center"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
}
