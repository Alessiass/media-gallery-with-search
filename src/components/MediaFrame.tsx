import React from "react";
import { MediaList } from "../api/api";
import Image from "next/image";
import replacementPhoto from "../../src/images/No_image_available.svg.png";
import { useManageFavourites } from "../hooks/useManageFavourites";
interface InputProps {
  itemData: MediaList;
}

const MediaFrame = (props: InputProps) => {
  const { addFavourite, removeFavourite } = useManageFavourites();

  return (
    <div>
      <Image
        src={replacementPhoto}
        alt="Replacement photo"
        width={50}
        height={50}
      />
      {props.itemData.title}
      <button onClick={() => addFavourite(props.itemData.title)}>
        Add to favourite
      </button>
      <button onClick={() => removeFavourite(props.itemData.title)}>
        Remove from favourite
      </button>
    </div>
  );
};

export default MediaFrame;
