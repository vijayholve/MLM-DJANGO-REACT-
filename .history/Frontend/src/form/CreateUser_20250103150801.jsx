import React from "react";

const CreateUser = () => {
  return (
    <>
      <form method="POST" >
        <div className="container">

        <div className="row form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">UserName*
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="UserName"
              name="username"
              value="Mark"
              required
              />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Email</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Email"
              name=""
              value="Otto"
              required
              />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefaultUsername">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                placeholder="Username"
                aria-describedby="inputGroupPrepend2"
                required
                />
            </div>
          </div>
        </div>
        <div className=" row form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">City</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              placeholder="City"
              required
              />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault04">State</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault04"
              placeholder="State"
              required
              />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault05">Zip</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              placeholder="Zip"
              required
              />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
              />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>

              </div>
      </form>
    </>
  );
};

export default CreateUser;
