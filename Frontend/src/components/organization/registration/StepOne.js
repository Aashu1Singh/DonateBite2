import { useContext, useState } from "react";
import { multiStepContext } from "./StepContex";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";

const stateCityData = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
  TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Salem"],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket"],
  WestBengal: ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  UttarPradesh: ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
  Punjab: ["Amritsar", "Ludhiana", "Chandigarh", "Patiala"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
};

export default function StepOne() {
  const { setCurrentStep, userData, setUserData, formErrors } =
    useContext(multiStepContext);

  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setUserData({ ...userData, state: selectedState, city: "" }); // Reset city when state changes

    if (stateCityData[selectedState]) {
      setCities(stateCityData[selectedState]);
    } else {
      setCities([]);
    }
  };

  return (
    <>
      <div className="card-body">
        <form className="text-start">
          <div className="form-group text-center pb-3">
            Organization Details
          </div>

          <label className="form-label">Organization name</label>
          <div className="input-group input-group-outline mb-1">
            <input
              type="text"
              className="form-control"
              // placeholder="Organization name"
              value={userData["name"]}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </div>
          <div className="text-danger form-label mb-3">{formErrors.name}</div>

          <label className="form-label">Address</label>
          <div className="input-group input-group-outline mb-1">
            <input
              type="text"
              className="form-control"
              // placeholder="Address"
              value={userData["address"]}
              onChange={(e) => {
                setUserData({ ...userData, address: e.target.value });
              }}
            />
          </div>
          <div className="text-danger form-label mb-3">
            {formErrors.address}
          </div>

          <div className="row">
            {/* State */}
            <div className="col-md-6">
              <div className="input-group input-group-outline">
                <select
                  className="form-select"
                  value={userData["state"] || ""}
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {Object.keys(stateCityData).map((state) => (
                    <option key={state} value={state}>
                      {state.replace(/([A-Z])/g, " $1").trim()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-danger">{/* {formErrorsStep1.state} */}</div>
            </div>

            {/* City */}
            <div className="col-md-6">
              <div className="input-group input-group-outline">
                <select
                  className="form-select"
                  value={userData["city"] || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, city: e.target.value })
                  }
                  disabled={cities.length === 0}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-danger">{/* {formErrorsStep1.city} */}</div>
            </div>
          </div>

          {/* <label className="form-label">State</label> */}

          {/* <label className="form-label">City</label> */}
          {/* <div className="input-group input-group-outline mb-1">
            <input
              type="text"
              <div className="input-group input-group-outline mb-1">
              className="form-control"
              // placeholder="Country"
              value={userData["country"]}
              onChange={(e) => {
                setUserData({ ...userData, country: e.target.value });
              }}
            />
          </div> */}
          <div className="text-danger form-label mb-3">
            {formErrors.country}
          </div>

          <label className="form-label">ZIP Code</label>
          <div className="input-group input-group-outline mb-1">
            <input
              type="text"
              className="form-control"
              // placeholder="ZIP Code"
              value={userData["zipCode"]}
              onChange={(e) => {
                setUserData({ ...userData, zipCode: e.target.value });
              }}
            />
          </div>
          <div className="text-danger form-label mb-3">
            {formErrors.zipCode}
          </div>

          <label className="form-label">Contact Number</label>
          <div className="input-group input-group-outline mb-1">
            <input
              type="contact"
              className="form-control"
              // placeholder="Contact Number"
              value={userData["contactNumber"]}
              onChange={(e) => {
                setUserData({ ...userData, contactNumber: e.target.value });
              }}
            />
          </div>
          <div className="text-danger form-label mb-3">
            {formErrors.contactNumber}
          </div>

          <label className="form-label">Email</label>
          <div className="input-group input-group-outline mb-1">
            <input
              type="email"
              className="form-control"
              // placeholder="Email"
              value={userData["email"]}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="text-danger form-label mb-3">{formErrors.email}</div>

          <label className="form-label">Registration No.</label>
          <div className="input-group input-group-outline mb-1">
            <input
              type="text"
              className="form-control"
              // placeholder="Registration No."
              value={userData["registrationNumber"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  registrationNumber: e.target.value,
                });
              }}
            />
          </div>
          <div className="text-danger form-label mb-3">
            {formErrors.registrationNumber}
          </div>

          <label className="form-label">Registration Date</label>
          <div className="input-group input-group-outline mb-1">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Registration Date"
                value={userData["registrationDate"]}
                maxDate={new Date()}
                onChange={(newValue) => {
                  // console.log(newValue);
                  setUserData({ ...userData, registrationDate: newValue.$d });
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <input
                      ref={inputRef}
                      {...inputProps}
                      placeholder=""
                      className="form-control"
                      readOnly
                    />
                    {InputProps?.endAdornment}
                  </Box>
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="text-danger form-label mb-3">
            {formErrors.registrationDate}
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="btn bg-gradient-primary w-100 my-4 mb-2"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
