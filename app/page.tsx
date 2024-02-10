"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import Select from "./components/select";
import Range from "./components/range";
import Card from "./components/card";

import Listing from "./types/listings";
import Link from "next/link";

const ListComponent = () => {
  const [data, setData] = useState<Listing[]>([]);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [parking, setParking] = useState<number>(0);
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<Listing[]>([]);

  useEffect(() => {
    axios({
      url: "http://localhost:3001/proxy/listings.json",
      method: "GET",
    })
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    let filtered = data;
    if (bathrooms > 0) {
      filtered = filtered.filter((item) => item.Bathrooms === bathrooms);
    }
    if (parking > 0) {
      filtered = filtered.filter((item) => item.Parking === parking);
    }
    if (bedrooms > 0) {
      filtered = filtered.filter((item) => item.Bedrooms === bedrooms);
    }
    filtered = filtered.filter((item) => item["Sale Price"] >= priceRange);
    setFilteredData(filtered);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex flex-wrap -mx-2">
          <Select
            title="Bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(Number(e.target.value))}
          />
          <Select
            title="Bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(Number(e.target.value))}
          />
          <Select
            title="Parking"
            value={parking}
            onChange={(e) => setParking(Number(e.target.value))}
          />
          <Range
            priceRange={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <div className="flex justify-between items-center w-full">
            <div className="px-2 mt-4">
              <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>
            </div>
            <div className="px-2 mt-4">
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                href="/favorites"
              >
                Go to favorites
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-2">
        {filteredData.map((item) => (
          <Card item={item} key={item.Id} />
        ))}
      </div>
    </div>
  );
};

export default ListComponent;
