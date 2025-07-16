import "./Main.css";
import SoundCard from "../SoundCard/SoundCard";

function Main({ samplesList, samples }) {
  const sampleListArray = samplesList.slice(0, 3);

  console.log(sampleListArray);

  return (
    <main>
      <section className="sounds">
        <ul className="sounds__options">
          {sampleListArray &&
            Array.isArray(sampleListArray) &&
            sampleListArray.map((sampleListArray) => {
              return (
                <SoundCard
                  key={sampleListArray.id}
                  samples={samples}
                  sampleListArray={sampleListArray}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;

// import mpc from "../../assets/addSoundBtn.avif";
// import akai from "../../assets/seekSampleViaTag.avif";
// import sp404 from "../../assets/seekSampleViaId.avif";

{
  /* <button className="sounds__btn">
            Seek Sample via Author
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
          </button> */
}
