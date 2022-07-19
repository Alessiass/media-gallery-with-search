import React, { PropsWithChildren, useContext, useState } from "react";

interface FavouritesProps {
    favourites: Set<string>,
    setFavourites: React.Dispatch<React.SetStateAction<Set<string>>>
}

const FavouritesContext = React.createContext({} as FavouritesProps);

export const Favourites: React.FC<PropsWithChildren> = ({ children }) => {
  const [favourites, setFavourites] = useState(new Set<string>());

  const store = {
    favourites,
    setFavourites,
  };
  return (
    <FavouritesContext.Provider value={store}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext)