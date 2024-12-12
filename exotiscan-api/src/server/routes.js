const {
  handleGetAllAnimal,
  handleGetAnimalByDocName,
  getAnimalByClassificationHandler,
  getAnimalByScarcityLevelHandler,
} = require("../handlers/animalHandler");

const postPredictHandler = require("../handlers/predictHandler");
const routes = [
  {
    method: "GET",
    path: "/api/animal",
    handler: handleGetAllAnimal,
  },
  {
    method: "GET",
    path: "/api/animal/{docName}",
    handler: handleGetAnimalByDocName,
  },
  {
    method: "GET",
    path: "/api/animal/classification/{classification}",
    handler: getAnimalByClassificationHandler,
  },
  {
    method: "GET",
    path: "/api/animal/scarcityLevel/{scarcityLevel}",
    handler: getAnimalByScarcityLevelHandler,
  },
  {
    path: "/predict",
    method: "POST",
    handler: postPredictHandler,
    options: {
      payload: {
        maxBytes: 10485760,
        allow: "multipart/form-data",
        multipart: true,
      },
    },
  },
];

module.exports = routes;
