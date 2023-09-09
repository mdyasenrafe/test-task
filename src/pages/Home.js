import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { selectData } from "../utils/data/SelectData";
import { Toast } from "../components/common/Toast";
import FormInput from "../components/FormInput";

export default function Home() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    console.log(e.target.name, " + ", e.target.value);
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
      <FormInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </Layout>
  );
}
