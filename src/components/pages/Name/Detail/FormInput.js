import React from "react";

function FormInput({ handleSubmit, handleChange, name, result, bright }) {
  return (
    <div
      className={
        bright
          ? "bg-slate-700 py-10 px-3 mt-16 rounded-lg shadow-md"
          : "bg-gray-50 py-10 px-3 mt-16 rounded-lg shadow-md"
      }
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-lg font-medium ">
            Nama
          </label>
          <input
            type="name"
            id="name"
            onChange={handleChange}
            value={name}
            className="text-md font-medium bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className=" pt-14">
        <h1 className="text-lg font-semibold">Output</h1>
        <div className="mt-3 p-10 border border-gray-300 rounded-lg shadow-sm">
          <h1 className="text-lg font-medium">{result}</h1>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
