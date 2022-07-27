import React, { useState, useEffect } from "react";
import { fetchMediaList } from "../../api/api";
import { MediaList } from "../../api/api";
import MediaFrame from "../MediaFrame";
import { useManageFavourites } from '../../hooks/useManageFavourites'

interface HomePageGalleryProps {
  itemPerLoad: number;
}

const HomePageGallery = ({ itemPerLoad }: HomePageGalleryProps) => {
  const [mediaData, setMediaData] = useState([] as MediaList[]);
  const [currentPage, setCurrentPage] = useState(1);
  const {favouritesList} = useManageFavourites(); // returns the ids of the favourites

  useEffect(() => {
    fetchMediaList(itemPerLoad, currentPage)
      .then((_data) =>
        setMediaData((prev) => [...prev, ..._data].sort((a, b) => (a.title > b.title ? 1 : -1))))
      .catch((err) => console.log(err));
  }, [itemPerLoad, currentPage]);

  const loadMore = () => {
    setCurrentPage(prev => prev+1)
  };

  return (
    <div>
      <h1>Favourites!</h1>
              {mediaData.filter(movie=> favouritesList.includes(movie.id)).map((el) => (
          <div key={el.id}>
            <MediaFrame itemData={el} />
          </div>
        ))}
      <div>
      <h1>Movie list</h1>
        {mediaData.filter(movie=> !favouritesList.includes(movie.id)).map((el) => (
          <div key={el.id}>
            <MediaFrame itemData={el} />
          </div>
        ))}
      </div>
      <button onClick={loadMore}>Load more</button>
      <button onClick={() => console.log(favouritesList)}>Print</button>
    </div>
  );
};

export default HomePageGallery;
