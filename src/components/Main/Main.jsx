import "./Main.css";
import SoundCard from "../SoundCard/SoundCard";
// import mpc from "../../assets/addSoundBtn.avif";
// import akai from "../../assets/seekSampleViaTag.avif";
// import sp404 from "../../assets/seekSampleViaId.avif";

function Main({ samplesList, sample }) {
  console.log(samplesList);
  console.log({ sample });

  // console.log(sampleListArray);

  return (
    <main>
      <section className="sounds">
        <ul className="sounds__options">
          {samplesList &&
            Array.isArray(samplesList) &&
            samplesList.map((samples) => {
              return (
                <SoundCard
                  key={samples.id}
                  sample={sample}
                  samplesList={samplesList}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
