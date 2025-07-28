import { useEffect, useRef, useState } from "react";
import "./SoundCard.css";
import Preloader from "../Preloader/Preloader";
import {
  getSampleInstanceData,
  processSampleData,
} from "../../utils/FreeSoundApi";

function SoundCard({ samples }) {
  const [sampleDetails, setSampleDetails] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  console.log(samples);

  useEffect(() => {
    getSampleInstanceData(samples.id)
      .then((res) => {
        const soundObject = processSampleData(res);
        setSampleDetails(soundObject);
      })
      .catch(console.error);
  }, []);

  const soundRender = () => {
    if (sampleDetails === null) {
      return <Preloader />;
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <li className="soundcard">
      <Preloader soundRender={soundRender} />
      <img
        className="card__image"
        src={sampleDetails?.images?.spectralLarge}
        alt="img"
      />
      <p className="card__username">Author: {sampleDetails?.username}</p>
      <p className="card__tags">ID: {sampleDetails?.id}</p>
      <p className="card__tags">Tags: {sampleDetails?.tags.join(" ")}</p>
      <p className="card__tags">
        Length: {sampleDetails?.duration.toFixed(2)} seconds
      </p>
      <p className="card__tags">
        Average Rating: {sampleDetails?.avgRating.toFixed(2)} stars
      </p>

      <a href={sampleDetails?.license} className="card__link" target="_blank">
        Licensing info: {sampleDetails?.license}
      </a>
      <a
        href={sampleDetails?.downloadUrl}
        download={true}
        className="card__link"
      >
        Download URL: {sampleDetails?.downloadUrl}
      </a>

      <div className="card__container">
        <audio
          className="card__audio"
          ref={audioRef}
          src={sampleDetails?.previews?.highQualityMp3}
        />
        <button
          className="card__audio-btn"
          onClick={togglePlayPause}
          style={{
            borderColor: isPlaying ? "red" : "",
            backgroundColor: isPlaying ? "red" : "",
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <h2 className="card__name">{sampleDetails?.name}</h2>
      </div>
    </li>
  );
}

export default SoundCard;

{
  /* {currentUser && (
          <button
            onClick={handleLike}
            className={`card__like-btn ${
              isLiked ? "card__like-btn_liked" : ""
            }`}
          ></button>
        )} */
}
