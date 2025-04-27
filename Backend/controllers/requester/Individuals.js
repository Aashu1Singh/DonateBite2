// const Individual = require("../../models/individual.model"); // make sure this model path is correct

const Requester = require("../../models/requester.model");

const getIndividuals = async (req, res) => {
  try {
    const individuals = await Requester.find(); // fetch all individuals
    res.status(200).json({
      message: "Individuals fetched successfully",
      data: individuals,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching individuals",
      error: error.message,
    });
  }
};

module.exports = { getIndividuals };
