import axios from "axios";
import React, { useState } from "react";

const Recaptcha = () => {
  const createUserFormSchema = {
    fullname: "",
    email: "",
    mobileNumber: "",
    country: "",
    role: "",
    gender: "",
    password: "",
  };

  const [createUserForm, setCreateUserForm] = useState(createUserFormSchema);

  const createUser = async (e) => {
    e.preventDefault();
    const url = `https://vaa-server.onrender.com/api/enrollment`;
    try {
      let res = await axios.post(url, createUserForm, {});
      console.log(res);
      if (res.data.status === "success") {
      }
    } catch (error) {
        console.log("error", error);
    }
  };

  return (
    <div className="mt- py-8">
      <form onSubmit={createUser}>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-input"
                name="fullname"
                onChange={(e) => {
                  setCreateUserForm((state) => ({
                    ...state,
                    fullname: e.target.value,
                  }));
                }}
                value={createUserForm.fullname}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                className="form-input"
                onChange={(e) => {
                  setCreateUserForm((state) => ({
                    ...state,
                    email: e.target.value,
                  }));
                }}
                value={createUserForm.email}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Phone number
              </label>
              <input
                type="text"
                name="mobileNumber"
                className="form-input"
                onChange={(e) => {
                  setCreateUserForm((state) => ({
                    ...state,
                    mobileNumber: e.target.value,
                  }));
                }}
                value={createUserForm.mobileNumber}
              />
            </div>
          </div>
      
        </div>

        <div class="g-recaptcha" data-sitekey="6LcVKAcqAAAAALOopK1BwC-0WyfC9F3aR60Rwa8Q"></div>
        <div className="col-md-2">
          <div className="mb-3">
            <button className="btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Recaptcha;
