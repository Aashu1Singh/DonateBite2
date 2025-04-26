const { body, validationResult } = require("express-validator");
const RequestFund = require("../../models/requestFund.model");
// const Re = require("../../models/organization.model");

// const editRequestStatus = async (req, res) => {
//   try {
//     // const errors = validationResult(req);
//     // console.log(errors);
//     // if (!errors.isEmpty()) {
//     //   res.status(422).json({ errors: errors.array() });
//     //   return;
//     // }
//     const orgID = req.params.id;
//     const status = req.params.email;
//     // const status="approved";


//     const updateOrganization = {

//        status

//     };

//     await RequestFund.findByIdAndUpdate(orgID, updateOrganization)
//       .then((res) => {
//         console.log(res);
//         res.status(200).send({ status: "Request Status updated" });
//       })
//       .catch(() => {
//         res.status(500).send({ status: "error" });
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

const editRequestStatus = async (req, res) => {
  try {
    const { id } = req.params; // id from URL params
    const { status } = req.body; // status from request body

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const updateOrganization = { status };

    await RequestFund.findByIdAndUpdate(id, updateOrganization);

    res.status(200).send({ message: "Request status updated" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
};


module.exports = {
    editRequestStatus,
};
