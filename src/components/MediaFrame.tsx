import React, { useState, useRef } from "react";
import { MediaList } from "../api/api";
import Image from "next/image";
import replacementPhoto from "../../src/images/No_image_available.svg.png";
import { useManageFavourites } from "../hooks/useManageFavourites";
import ReactPlayer from "react-player";

interface InputProps {
  itemData: MediaList;
}

const MediaFrame = (props: InputProps) => {
  const { toggleFav, favouritesList } = useManageFavourites();
  const [toggleVideo, setToggleVideo] = useState(false);
  const videoPlayer = useRef<ReactPlayer>({} as ReactPlayer);

  const displayHideVideo = () => setToggleVideo(!toggleVideo);

  const fastForward = () => {
    videoPlayer.current.seekTo(videoPlayer.current.getCurrentTime() + 10);
  };

  const fastRewind = () => {
    videoPlayer.current.seekTo(videoPlayer.current.getCurrentTime() - 10);
  };

  return (
    <div>
      <Image
        src={replacementPhoto}
        alt="Replacement photo"
        width={50}
        height={50}
      />
      {props.itemData.title}
      <button onClick={() => toggleFav(props.itemData.id)}>
        {favouritesList.includes(props.itemData.id)
          ? "Remove from favourite"
          : "Add to favourite"}
      </button>
      {props.itemData.url ? (
        <span>
          <button onClick={displayHideVideo}>
            {toggleVideo ? "Hide video" : "Show video"}
          </button>
          {toggleVideo ? (
            <div>
              <ReactPlayer
                url={props.itemData.url}
                controls
                ref={videoPlayer}
              />
              <button onClick={fastForward}>+10</button>
              <button onClick={fastRewind}>-10</button>
            </div>
          ) : (
            ""
          )}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default MediaFrame;
