import { baseURL, APIkey } from "./constants";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

// APP/JSON
function getSoundListData() {
  return fetch(
    `${baseURL}/search/text/?query=music&filter=created:[* TO NOW]&token=${APIkey}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
}

function getSampleInstanceData(id) {
  return fetch(`${baseURL}/sounds/${id}/?&token=${APIkey}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

function getSearchResults(tag) {
  return fetch(
    `${baseURL}/search/text/?query=music&filter=tag:"${tag}"&token=${APIkey}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
}

function postSample(formData) {
  return fetch(`${baseURL}/sounds/upload/?&token=${APIkey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${APIkey}`,
    },
    body: formData,
  }).then(checkResponse);
}

// DATA PROCESSING/ DESTRUCTURING
function processSampleData(soundObject) {
  return {
    id: soundObject.id || "",
    name: soundObject.name,
    tags: soundObject.tags,
    username: soundObject.username,
    duration: soundObject.duration,
    license: soundObject.license,

    previews: {
      highQualityMp3: soundObject.previews["preview-hq-mp3"],
      lowQualityMp3: soundObject.previews["preview-lq-mp3"],
      highQualityOgg: soundObject.previews["preview-hq-ogg"],
      lowQualityOgg: soundObject.previews["preview-lq-ogg"],
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

export {
  getSoundListData,
  getSampleInstanceData,
  processSampleData,
  getSearchResults,
  postSample,
  checkResponse,
};
