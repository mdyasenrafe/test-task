import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../components/FormInput";
import { Toast } from "../components/common/Toast";

export default function EditProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (id) {
      const getLocalData = localStorage.getItem("formData");
      if (getLocalData) {
        const localData = JSON.parse(getLocalData);
        const data = localData.find((item) => item._id === id);
        setChecked(data.checked);
        setFormData(data);
      }
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (checked) {
      const getLocalData = localStorage.getItem("formData");
      if (getLocalData) {
        const parseData = JSON.parse(getLocalData);
        const newData = parseData.map((item) => {
          if (item._id === id) {
            return formData;
          }
          return item;
        });
        localStorage.setItem("formData", JSON.stringify(newData));
        Toast.fire({
          icon: "success",
          title: "Updated successfully",
        }).then(() => {
          navigate("/profile");
        });
      }
    }
  };
  return (
    <Layout>
      <div className="text-center mt-6">
        <h1 className="header-title">Edit Profile</h1>
      </div>
      <FormInput
        handleChange={handleChange}
        handleSubmit={handleUpdate}
        formData={formData}
        checked={checked}
        setChecked={setChecked}
      />
    </Layout>
  );
}
