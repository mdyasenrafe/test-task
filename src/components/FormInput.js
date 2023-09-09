import React from "react";
import { selectData } from "../utils/data/SelectData";

export default function FormInput({ handleChange, handleSubmit, formData }) {
  return (
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
  );
}
