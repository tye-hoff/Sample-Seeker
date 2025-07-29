import SoundCard from "../SoundCard/SoundCard";
import "./UserSampleSection.css";

function UserSampleSection({ samplesList, onAddSampleClick, mainHeader }) {
  const handleAddClick = () => {
    onAddSampleClick();
  };

  return (
    <div className="sample-section">
      <div className="sample-section__title">
        <p className="sample-section__title">{mainHeader}</p>
        <button onClick={handleAddClick} className="sample-section__btn">
          + Add Sample
        </button>
      </div>
      <ul className="sample-section__sounds">
        {samplesList &&
          Array.isArray(samplesList) &&
          samplesList.map((samples) => {
            return <SoundCard key={samples.id} samples={samples} />;
          })}
      </ul>
    </div>
  );
}

export default UserSampleSection;

{
  /* {sampleList.map((sample) => {
          return <SoundCard key={sample._id} sample={sample} />;
        })} */
}
