import React, { useState } from "react";
import CardProps from "@/app/types/cardProps";
import Listing from "@/app/types/listings";

const Property: React.FC<CardProps> = ({ item }) => {
  const handleSaveProperty = (property: Listing) => {
    let favorites = localStorage.getItem("favorites");
    favorites = favorites ? JSON.parse(favorites) : [];

    if (Array.isArray(favorites)) {
      favorites.push(property);

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    alert("Property saved!");
  };

  return (
    <div>
      <div className="bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-2"> {item.Title}</h1>
        <div className="text-sm text-gray-600 mb-4"> {item.Location}</div>
        <div className="text-sm text-gray-600 mb-6">
          Date Listed:{" "}
          {new Date(item.DateListed).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </div>
        <div className="bg-custom-blue h-48 mb-6">
          <img
            src={item.PictureURL}
            alt="Placeholder image representing the property"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl font-semibold text-blue-600">
            {item["Sale Price"].toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
          <button
            onClick={() => handleSaveProperty(item)}
            className="text-blue-600 text-sm border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
          >
            Save Property
          </button>
        </div>
        <div className="flex flex-wrap -mx-2 mb-6">
          <div className="w-1/2 sm:w-1/5 px-2 mb-4 sm:mb-0">
            <div className="text-center">
              <div className="text-lg font-semibold">{item.Bedrooms}</div>
              <div className="text-sm text-gray-600">BED</div>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/5 px-2 mb-4 sm:mb-0">
            <div className="text-center">
              <div className="text-lg font-semibold">{item.Bathrooms}</div>
              <div className="text-sm text-gray-600">BATH</div>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/5 px-2 mb-4 sm:mb-0">
            <div className="text-center">
              <div className="text-lg font-semibold">{item.Parking}</div>
              <div className="text-sm text-gray-600">PARKING</div>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/5 px-2">
            <div className="text-center">
              <div className="text-lg font-semibold">{item.Sqft}</div>
              <div className="text-sm text-gray-600">SQFT</div>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/5 px-2">
            <div className="text-center">
              <div className="text-lg font-semibold">{item.YearBuilt}</div>
              <div className="text-sm text-gray-600">YEAR BUILT</div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-800 mb-6">{item.Description}</p>
      </div>{" "}
    </div>
  );
};

export default Property;
