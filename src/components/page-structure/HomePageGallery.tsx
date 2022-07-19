import React, { useState, useEffect } from "react";
import { fetchMediaList } from "../../api/api";
import { MediaList } from "../../api/api";
import MediaFrame from "../MediaFrame";

interface HomePageGalleryProps {
  itemPerLoad: number;
}

const HomePageGallery = ({ itemPerLoad }: HomePageGalleryProps) => {
  const [mediaData, setMediaData] = useState([] as MediaList[]);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    fetchMediaList(itemPerLoad, 1)
      .then((_data) => setMediaData(_data.sort((a,b)=>(a.title>b.title)?1:-1)))
      .catch((err) => console.log(err));
  }, [itemPerLoad]);

  const loadMore = () => {
    fetchMediaList(itemPerLoad, currentPage)
      .then((_data) => setMediaData((prev) => prev.concat(_data).sort((a,b)=>(a.title>b.title)?1:-1)))
      .then(() => setCurrentPage(currentPage + 1))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        {mediaData.map((el) => (
          <div key={el.id}>
            <MediaFrame itemData={el} />
          </div>
        ))}
      </div>
      <button onClick={loadMore}>Load more</button>
      <button onClick={() => console.log(mediaData)}>Print</button>
    </div>
  );
};

export default HomePageGallery;
