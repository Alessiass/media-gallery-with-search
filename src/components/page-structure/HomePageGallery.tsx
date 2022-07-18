import React, { useState, useEffect } from "react";
import { fetchMediaList } from "../../api/api";
import { MediaList } from "../../api/api";

const HomePageGallery: React.FC<MediaList[]> = (firstPage) => {
  const [mediaData, setMediaData] = useState([] as MediaList[]);

  useEffect(() => {
    fetchMediaList(20, 1)
      .then((_data) => setMediaData(_data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>HomePageGallery</div>
      <button onClick={() => console.log(mediaData)}>Print</button>
    </div>
  );
};

export async function getServerSideProps() {
  const firstPage = await fetchMediaList(20, 1);
  return { props: { firstPage } };
}

export default HomePageGallery;
