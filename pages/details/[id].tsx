import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Listing from "../../app/types/listings";
import Property from "@/app/components/property";
import ContactForm from "@/app/components/contactForm";

const ItemPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<Listing | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/proxy/listings.json`)
        .then((response) => {
          const item = response.data.find(
            (item: Listing) => item.Id === Number(id)
          );
          setItem(item);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-3/5 px-4">
            <Property item={item} />
          </div>
          <div className="w-full lg:w-2/5 px-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
