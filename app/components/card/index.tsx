import React from "react";

import Link from "next/link";

import CardProps from "@/app/types/cardProps";

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div key={item.Id} className="px-2 w-1/4 mb-6">
      <div className="bg-blue-500 h-48 mb-4">
        <img
          className="w-full h-full object-cover"
          src={item.ThumbnailURL}
          alt={item.Title}
        />
      </div>
      <h3 className="text-lg mb-2">{item.Title}</h3>
      <p className="text-gray-700 mb-2">{item.Location}</p>
      <p className="text-gray-700 mb-2">
        {item.Bedrooms} bedrooms | {item.Bathrooms} baths
      </p>
      <p className="text-gray-900 font-bold text-xl mb-4">
        {item["Sale Price"].toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        href={`/details/${item.Id}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default Card;
