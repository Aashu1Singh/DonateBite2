import React, { useContext, useState } from 'react';
import { multiStepContext } from '../request/stepContex';

// Mapping of States and their Cities
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
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"]
};

export default function RequestStepOne() {
  const { requestData, setRequestData, formErrorsStep1, handleNext } = useContext(multiStepContext);
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setRequestData({ ...requestData, state: selectedState, city: "" }); // Reset city when state changes

    if (stateCityData[selectedState]) {
      setCities(stateCityData[selectedState]);
    } else {
      setCities([]);
    }
  };

  return (
    <div>
      <h4 className="pt-3 ms-4">Request Food Donation</h4>
      <p className='text-dark font-weight-normal fw-bold mx-4'>
        Millions of people in India suffer from hunger and undernutrition every day.
        Our food donation platform connects compassionate donors with those who need it the most. 
        Together, we can ensure that surplus food reaches the hungry, reduces waste, and builds a healthier nation.
      </p>
      <hr className='hr-request-fund mx-4' />

      <div className="container d-flex justify-content-center pt-4 pb-5">
        <div className="card z-index-0 fadeIn3 fadeInBottom">
          <div className="card-body">
            <form className="form-control">
              <p className="h3 fw-bold text-center mb-4 pt-4">Let's share food</p>
              <p className="text-center d-flex ms-3 pt-3 text-muted fw-bold">Select your location</p>

              <div className="row input-group input-group-outline m-0 pb-4 px-4">
                {/* State Dropdown */}
                <div className="col-md-6 ps-0 mb-4">
                  <select
                    className="form-select"
                    value={requestData['state'] || ''}
                    onChange={handleStateChange}
                  >
                    <option value="">Select State</option>
                    {Object.keys(stateCityData).map((state) => (
                      <option key={state} value={state}>
                        {state.replace(/([A-Z])/g, ' $1').trim()}
                      </option>
                    ))}
                  </select>
                  <div className="text-danger">
                    {formErrorsStep1.state}
                  </div>
                </div>

                {/* City Dropdown */}
                <div className="col-md-6 pe-0 mb-4">
                  <select
                    className="form-select"
                    value={requestData['city'] || ''}
                    onChange={(e) => setRequestData({ ...requestData, city: e.target.value })}
                    disabled={cities.length === 0}
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <div className="text-danger">
                    {formErrorsStep1.city}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="mb-3 d-flex justify-content-center">
                  <button type="button" className="btn btn-primary d-block" onClick={handleNext}>NEXT</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
