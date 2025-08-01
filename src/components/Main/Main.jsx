import "./Main.css";
import SoundCard from "../SoundCard/SoundCard";

function Main({ samplesList, mainHeader }) {
  return (
    <main>
      <section className="main">
        <h2 className="main__header">{mainHeader}</h2>
        <ul className="main__sounds-options">
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
