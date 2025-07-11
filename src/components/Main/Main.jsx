import "./Main.css";
// import SoundCard from "../SoundCard/SoundCard";
import mpc from "../../assets/addSoundBtn.avif";
import akai from "../../assets/seekSampleViaTag.avif";
import sp404 from "../../assets/seekSampleViaId.avif";

function Main() {
  return (
    <main>
      <section className="sounds">
        <ul className="sounds__options">
          <button className="sounds__btn">
            Seek Sample via name
            <img
              src={mpc}
              alt="seek samples"
              className="sounds__options-img-name"
            />
          </button>
          <button className="sounds__btn">
            Seek Sample via tag
            <img
              src={akai}
              alt="seek samples"
              className="sounds__options-img-tag"
            />
          </button>
          <button className="sounds__btn">
            Seek Sample via id
            <img
              src={sp404}
              alt="seek samples"
              className="sounds__options-img-id"
            />
          </button>
        </ul>
      </section>
    </main>
  );
}

export default Main;
