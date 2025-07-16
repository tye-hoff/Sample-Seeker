import { baseURL, APIkey } from "./constants";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

function getSoundListData() {
  return fetch(`${baseURL}/search/text/?query=&token=${APIkey}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((results) => {
      return results;
    })
    .then(checkResponse);
}

function getSoundListSound() {
  return fetch(`${baseURL}/packs/9678/sounds/?query=&token=${APIkey}`, {
    method: "GET",
    headers: {
      "Content-Type": "audio/mp3",
    },
  })
    .then((results) => {
      return results;
    })
    .then(checkResponse);
}

function getSampleInstanceAudio() {
  return fetch(`${baseURL}/sounds/1234/?&token=${APIkey}`, {
    method: "GET",
    headers: {
      "Content-Type": "audio/mp3",
    },
  })
    .then((res) => {
      return res;
    })
    .then(checkResponse);
}

function getSampleInstanceData() {
  return fetch(`${baseURL}/sounds/1234/?&token=${APIkey}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res;
    })
    .then(checkResponse);
}

function postSound() {
  return fetch(`${baseURL}/search/text/?query=&token=${APIkey}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((results) => {
      return results;
    })
    .then(checkResponse);
}

function processSampleData(soundObject) {
  return {
    id: soundObject.id,
    name: soundObject.name,
    username: soundObject.username,
    tags: soundObject.tags,
    duration: soundObject.duration,
    license: soundObject.license,

    previews: {
      highQualityMp3: soundObject.previews["preview-hq-mp3"],
      lowQualityMp3: soundObject.previews["preview-lq-mp3"],
    },

    images: {
      waveformMedium: soundObject.images.waveform_m,
      waveformLarge: soundObject.images.waveform_l,
      spectralMedium: soundObject.images.spectral_m,
      spectralLarge: soundObject.images.spectral_l,
    },

    downloadUrl: soundObject.download,
    avgRating: soundObject.avg_rating,
    numDownloads: soundObject.num_downloads,
    created: soundObject.created,
    filesize: soundObject.filesize,
  };
}

function processSampleResults(apiResponse) {
  const { results, count, next, previous } = apiResponse;

  const processedSamples = results.map(processSampleData);

  return {
    samples: processedSamples,
    totalCount: count,
    hasNext: next !== null,
    hasPrevious: previous !== null,
    nextUrl: next,
    previousUrl: previous,
  };
}

export {
  getSampleInstanceAudio,
  getSampleInstanceData,
  processSampleResults,
  processSampleData,
  postSound,
  getSoundListData,
  getSoundListSound,
};

// function getSampleData() {
//   return fetch(`${baseURL}/search/text/?query=&token=${APIkey}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((results) => {
//       return results;
//     })
//     .then(checkResponse);
// }

// function processSearchResults(data) {
//   const { results, count, next } = data;

//   // Transform the data for easier use in your components
//   const processedSounds = results.map((sound) => ({
//     id: sound.id,
//     title: sound.name,
//     author: sound.username,
//     tags: sound.tags,
//     license: sound.license,
//   }));

//   return {
//     processedSounds,
//     totalCount: count,
//     hasMore: next !== null,
//   };
// }
