import { BASE_URL, API_KEY } from "./constants";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

// APP/JSON
function getSoundListData() {
  return fetch(
    `${BASE_URL}/search/text/?query=music&filter=created:[* TO NOW]&token=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
}

function getSampleInstanceData(id) {
  return fetch(`${BASE_URL}/sounds/${id}/?&token=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

function getSearchResults(tag) {
  return fetch(
    `${BASE_URL}/search/text/?query=music&filter=tag:"${tag}"&token=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(checkResponse);
}

function postSample(formData) {
  const access_token = localStorage.getItem("access token");

  return fetch(`${BASE_URL}/sounds/upload/?&token=${API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
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
