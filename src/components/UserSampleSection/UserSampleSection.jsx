// import SoundCard from "../SoundCard/SoundCard";

import "./UserSampleSection.css";

function UserSampleSection({ sampleList }) {
  console.log(sampleList);

  return (
    <div className="sample-section">
      <div className="sample-section__title">
        <p className="sample-section__title">Your Items</p>
        <button className="sample-section__btn">+ Add New</button>
      </div>
      <ul className="sample-section__sounds">
        {/* {sampleList.map((sample) => {
          return <SoundCard key={sample._id} sample={sample} />;
        })} */}
      </ul>
    </div>
  );
}

export default UserSampleSection;
