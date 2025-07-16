import { useRef, useState } from "react";
import "./SoundCard.css";

function SoundCard({ sampleListArray, sample }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // console.log(sampleListArray.name);
  const sampleData = { sample };
  console.log(sampleData);
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
      <img className="card__image" src={sample} alt={sample.name} />
      <div className="card__container">
        <audio
          className="card__audio"
          ref={audioRef}
          // src={sampleListArray.name.highQualityOgg}
        />
        <button className="card__audio-btn" onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <h2 className="card__name">{sample.name}</h2>
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
