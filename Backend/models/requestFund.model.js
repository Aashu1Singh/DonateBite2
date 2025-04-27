const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestFundSchema = new Schema({

    fname: {
        type: String,
        // required: true
    },
    lname: {
        type: String,
        // required: true
    },
    tpno: {
        type: Number,
        // required: true
    },
    state: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    userId: {
        type: String,
        // required:true
    },
    contactno: {
        type: Number,
        // required: true
    },
    title: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    requestImage: {
        type: String,
        // required: true
    },
=======
  fname: {
    type: String,
    // required: true
  },
  lname: {
    type: String,
    // required: true
  },
  tpno: {
    type: Number,
    // required: true
  },
  country: {
    type: String,
    // required: true
  },
  zipcode: {
    type: Number,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  address: {
    type: String,
    // required: true
  },
  userId: {
    type: String,
    // required:true
  },
  contactno: {
    type: Number,
    // required: true
  },
  title: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  state: {
    type: String,
    // required: true
  },
  city: {
    type: String,
    // required: true
  },
  requestImage: {
    type: String,
    // required: true
  },

  status: {
    type: String,
    default: "started",
  },
});

const RequestFund = mongoose.model("requestFund", RequestFundSchema);
module.exports = RequestFund;
