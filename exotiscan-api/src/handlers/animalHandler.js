const {
  getData,
  getDataByDocName,
  getDataByScarcityLevel,
  getDataByClassification,
} = require("../services/animalServices");

/**
 * Handler untuk GET /api/Animal
 */
const handleGetAllAnimal = async (request, h) => {
  try {
    const data = await getData();
    return h.response(data).code(200);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return h.response({ message: "Error retrieving data" }).code(500);
  }
};

/**
 * Handler untuk GET /api/Animal/{docName}
 */
const handleGetAnimalByDocName = async (request, h) => {
  const { docName } = request.params;

  try {
    const data = await getDataByDocName(docName);
    return h.response(data).code(200);
  } catch (error) {
    console.error("Error retrieving document:", error);
    return h.response({ message: "Error retrieving document" }).code(500);
  }
};

// Handler untuk mendapatkan data berdasarkan classification
const getAnimalByClassificationHandler = async (request, h) => {
  const { classification } = request.params;

  try {
    const data = await getDataByClassification(classification);

    if (data.length === 0) {
      return h
        .response({
          status: "fail",
          message: `No animals found for classification: ${classification}`,
        })
        .code(404);
    }

    return h
      .response({
        status: "success",
        data,
      })
      .code(200);
  } catch (error) {
    console.error(error);
    return h
      .response({
        status: "error",
        message: "Failed to retrieve animals.",
      })
      .code(500);
  }
};

// Handler untuk mendapatkan data berdasarkan scarcityLevel
const getAnimalByScarcityLevelHandler = async (request, h) => {
  const { scarcityLevel } = request.params;

  try {
    const data = await getDataByScarcityLevel(scarcityLevel);

    if (data.length === 0) {
      return h
        .response({
          status: "fail",
          message: `No animals found for scarcity level: ${scarcityLevel}`,
        })
        .code(404);
    }

    return h
      .response({
        status: "success",
        data,
      })
      .code(200);
  } catch (error) {
    console.error(error);
    return h
      .response({
        status: "error",
        message: "Failed to retrieve animals.",
      })
      .code(500);
  }
};

module.exports = {
  handleGetAllAnimal,
  handleGetAnimalByDocName,
  getAnimalByClassificationHandler,
  getAnimalByScarcityLevelHandler,
};
