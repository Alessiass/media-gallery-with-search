import React from "react";
import { useFavourites } from "../components/page-structure/Favourites";

export const useManageFavourites = () => {
  const { favourites, setFavourites } = useFavourites();

  const addFavourite = async (title: string) => {
    if (!favourites.has(title)) {
      setFavourites((prev) => prev.add(title));
      console.log("success");
      console.log(favourites);
    } else {
      console.log("This title is already on the favourite list");
    }
  };
  const removeFavourite = async (title: string) => {
    if (favourites.delete(title)) {
      console.log("Title was removed from the list");
      console.log(favourites);
    } else {
      console.log("Title wasn't on the favourite list");
      console.log(favourites);
    }
  };

  return {
    addFavourite,
    removeFavourite,
  };
};
