const Requester = require("../../models/requester.model");
const Request = require("../../models/requestFund.model");
const User = require("../../models/user");

const getRequestersRequest = async (req, res) => {
  try {
    const requesterId = req.params.id;

    // First, fetch the request
    const request = await Request.findById(requesterId);
    // console.log("request", request);

    if (!request) {
      return res.status(404).send({ msg: "Request not found" });
    }

    // Then, fetch the user using userId from the request
    const user = await Requester.findById(request.userId).select("-password"); // Optional: exclude password
    // console.log("user", user);
    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }
    let obj = {
      ...request,
      user: user,
    }
    // request.user = user; // Attach user to request object
    // Send both request and user details

    console.log("request", obj);

    res.status(200).send({
      request: obj,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getRequestersRequest,
};
