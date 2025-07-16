import { useRef, useState } from "react";
import "./SoundCard.css";

function SoundCard({ sampleListArray, samples }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(sampleListArray);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <li className="soundcards">
      <img
        className="card__image"
        src={samples.images.waveformLarge}
        alt={samples.name}
      />
      <div className="card__container">
        <audio
          className="card__audio"
          ref={audioRef}
          src={samples.previews.highQualityMp3}
        />
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <h2 className="card__name">{samples.name}</h2>
        {/* {currentUser && (
          <button
            onClick={handleLike}
            className={`card__like-btn ${
              isLiked ? "card__like-btn_liked" : ""
            }`}
          ></button>
        )} */}
      </div>
    </li>
  );
}

export default SoundCard;
