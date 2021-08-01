import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              New here,
              <Link to="/" className="btn btn-link">
                Login
              </Link>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Registration;
