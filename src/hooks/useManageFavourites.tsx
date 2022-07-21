import React from "react";
import { RootState, useAppDispatch,useAppSelector } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleFav } from "../store/favouritesSlice";

export const useManageFavourites = () => {
  const favouritesList = useAppSelector(
    (state: RootState) => state.favourites.favourites
  );
  const dispatch = useAppDispatch();

  const toggleFavourite = (id: number) => {
    dispatch(toggleFav(id));
  };

  return {
    favouritesList,
    toggleFav: toggleFavourite,
  };
};
