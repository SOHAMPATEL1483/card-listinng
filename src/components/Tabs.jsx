import React, { useState } from "react";
import Tabcontent from "./Tabcontent";
// import FirstTab from "../AllTabs/FirstTab";
// import SecondTab from "../AllTabs/SecondTab";
const setstyles = (activeTab, index) => {
  if (activeTab === index)
    return "text-blue-600 border-blue-600 mr-2 inline-block p-4  border-b-2 rounded-t-lg cursor-pointer";
  else return "mr-2 inline-block p-4  border-b-2 rounded-t-lg cursor-pointer";
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <>
      <div className=" font-poppins w-fit m-5 text-sm font-medium text-center text-gray-900 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li
            className={setstyles(activeTab, 1)}
            onClick={() => setActiveTab(1)}
          >
            Yours
          </li>
          <li
            className={setstyles(activeTab, 2)}
            onClick={() => setActiveTab(2)}
          >
            All
          </li>
          <li
            className={setstyles(activeTab, 3)}
            onClick={() => setActiveTab(3)}
          >
            Blocked
          </li>
        </ul>
      </div>
      <div className="flex gap-6 font-poppins ml-4  ">
        <form className="w-1/3">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search Cards"
              required
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>

        <select
          id="countries"
          class="max-w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All"> All</option>
          <option value="burner"> Burner</option>
          <option value="subscription"> Subscription</option>
        </select>
      </div>

      <Tabcontent activeTab={activeTab} query={query} category={category} />
    </>
  );
};
export default Tabs;
