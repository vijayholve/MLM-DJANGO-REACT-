import { useState } from "react";
import axios from "axios";
const CreateUser = () => {
  const [submitblock, setsubmitblock] = useState(false);
  const [formData, setFormData] = useState({
    sponsor_code:'',
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [message, setmessage] = useState({
    success:"",
    failure:"",
  });
  const [issponcer, setissponcer] = useState(false);
  const [error, setError] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setsubmitblock(true);
    e.preventDefault();
    try {

      const responce = await axios.post(
        "http://127.0.0.1:8000/api/mlm-users/",
        formData
      );
      setmessage({
        success:"User Created Successfully",
        failure:"",
      })
      setError({})
      setsubmitblock(false);
    } catch (error) {
      console.log(error);
      console.error("Error:", error.response?.data || error.message);
      
      // Set error messages correctly
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError({ general: "Something went wrong. Please try again." });
      }
      
      setmessage({
        success: "",
        failure: "User is not Created",
      });
      
      setsubmitblock(false);
    }
    
  };
  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <h3 className="text-bold">User Deatail</h3>
        <div className="row form-row">
        <div className="col-md-4 mb-3">
            <label htmlFor="validationDefaultSponsor_code">Sponsor_code</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend2">
                  Code
                </span>
              </div>
              in
              <input 
              disabled={issponcer}
                type="text"
                className="form-control"
                id="validationDefaultSponsor_code"
                placeholder="Sponsor_code"
                name="sponsor_code"
                onChange={handleChange}
                value={formData.sponsor_code}
                aria-describedby="inputGroupPrepend2"
                
              />
            </div>
            {error.sponsor_code && (
              <div className="text-danger">{error.sponsor_code}</div>
            )}
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
                name="username"
                onChange={handleChange}
                value={formData.username}
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
            {error.username && (
              <div className="text-danger">{error.username}</div>
            )}
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Email</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            {error.email && <div className="text-danger">{error.email}</div>}
          </div>
        </div>
        <div className=" row form-row">
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault04">Password</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault04"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            {error.password && (
              <div className="text-danger">{error.password}</div>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault05">password Confirmation</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              placeholder="password Confirmation"
              name="passwordConfirmation"
              onChange={handleChange}
              value={formData.passwordConfirmation}
              required
            />
           {error.passwordConfirmation && (
    <div className="text-danger">{error.passwordConfirmation[0]}</div>
)}
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

        <button
          disabled={submitblock}
          className="btn btn-primary"
          type="submit"
        >
          Submit form
        </button>
        {message.success && 
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <p>
          {message.success}
          </p>
          <hr />
         
        </div>
        }
        {
          message.failure && 
          <div className="alert alert-danger" role="alert">

{message.failure}
{Object.keys(error).map((key) => (
  <p className="text-dark" key={key}>
    {Array.isArray(error[key]) ? error[key][0] : error[key]}
  </p>
))}
</div>
        }
      </form>
    </>
  );
};

export default CreateUser;
