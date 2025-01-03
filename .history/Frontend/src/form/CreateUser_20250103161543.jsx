import { use } from "react";
import { useState } from "react";

const CreateUser = () => {
    const [submitblock,setsubmitblock]=useState(false)
    const [formData, setFormData] = useState({
            username :'',
            email:'',
            phonenumber:'',
            password:'',
            passwordConfirmation:'',
})
    const handleChange = (e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit =async (e)=>{
        setsubmitblock(true)
        e.preventDefault()
        try


    }
  return (
    <>

      <form method="POST" onSubmit={handleSubmit}>
        <h3 className="text-bold">User Deatail</h3>
        <div className="row form-row">
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
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="Phone Number"
              name="phonenumber"
              onChange={handleChange}
                value={formData.phonenumber}
              required
              />
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
        <button disabled={submitblock} className="btn btn-primary" type="submit">
          Submit form
        </button>

      </form>
    </>
  );
};

export default CreateUser;
