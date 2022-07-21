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
  const {favouritesList} = useManageFavourites();

  useEffect(() => {
    fetchMediaList(5, currentPage)
      .then((_data) =>
        setMediaData((prev) => [...prev, ..._data].sort((a, b) => (a.title > b.title ? 1 : -1))))
    
      .catch((err) => console.log(err));
  }, [itemPerLoad, currentPage]);

  const loadMore = () => {
    setCurrentPage(prev => prev+1)
  };

  return (
    <div>
      {favouritesList}
      <div>
        {mediaData.map((el) => (
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
