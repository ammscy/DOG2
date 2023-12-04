
import Navbar from "../Components/Navbar/Navbar.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card p-3 py-4">
              <h5>Find stores near you</h5>
              <div className="row g-3 mt-4">
                <div className="col-md-3 d-flex justify-content-center">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Category
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li>
                        <a className="dropdown-item" href="#">
                          Restaurant
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Pet friendly
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter address e.g. street, city and state or zip"
                  />
                </div>
                <div className="col-md-3">
                  <button className="btn btn-secondary btn-block">Search Results</button>
                </div>
              </div>
              <div className="mt-3">
                <a
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  className="advanced"
                >
                  Advanced Search With Filters <i className="fa fa-angle-down"></i>
                </a>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <input type="text" placeholder="Food type" className="form-control" />
                      </div>
                      <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Search by Distance" />
                      </div>
                      <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Search by Country" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
