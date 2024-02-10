import { useState, useEffect } from "react";
import Listing from "@/app/types/listings";
import Card from "@/app/components/card";
import "tailwindcss/tailwind.css";
import Link from "next/link";

const FavoriteProperties: React.FC = () => {
  const [favoriteProperties, setFavoriteProperties] = useState<Listing[]>([]);

  useEffect(() => {
    // Recuperar la lista de propiedades favoritas de localStorage
    const favorites = localStorage.getItem("favorites");
    const favoriteListings = favorites ? JSON.parse(favorites) : [];
    setFavoriteProperties(favoriteListings);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="w-full text-center font-extrabold text-5xl my-10">
        Saved Properties
      </h1>
      <div className="flex flex-wrap -mx-2">
        {favoriteProperties.map((property: Listing) => (
          <Card item={property} key={property.Id} />
        ))}
      </div>
      <div className="mt-20">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          href="/"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default FavoriteProperties;
