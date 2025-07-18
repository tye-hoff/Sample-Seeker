import "./Main.css";
import SoundCard from "../SoundCard/SoundCard";

function Main({ samplesList }) {
  return (
    <main>
      <section className="sounds">
        <h2 className="sounds__header">Check out our most recent sounds:</h2>
        <ul className="sounds__options">
          {samplesList &&
            Array.isArray(samplesList) &&
            samplesList.map((samples) => {
              return <SoundCard key={samples.id} samples={samples} />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
