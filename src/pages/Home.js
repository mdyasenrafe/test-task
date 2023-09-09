import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { selectData } from "../utils/data/SelectData";
import { Toast } from "../components/common/Toast";
import FormInput from "../components/FormInput";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checked) {
      const getLocalData = localStorage.getItem("formData");
      const id = Math.random().toString(36).substring(2, 7);
      formData["_id"] = id;
      formData["checked"] = checked;
      if (getLocalData) {
        const localData = JSON.parse(getLocalData);
        const newData = [...localData, formData];
        localStorage.setItem("formData", JSON.stringify(newData));
      } else {
        localStorage.setItem("formData", JSON.stringify([formData]));
      }
      setFormData({});
      setChecked(false);
      Toast.fire({
        icon: "success",
        title: "Data saved successfully",
      });
    }
  };

  return (
    <Layout>
      <div className="text-center mt-6">
        <h1 className="header-title">Home</h1>
      </div>
      <FormInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        checked={checked}
        setChecked={setChecked}
      />
    </Layout>
  );
}
