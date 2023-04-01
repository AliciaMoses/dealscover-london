import Navbar from "../navbar/Navbar";


import "./LandingPage.css";

const LandingPage = () => {

  const token = window.localStorage.getItem("token");
  
  if (token) {
    return (
    <>
    <Navbar />
    <main>
      <br></br>
      <div className="row align-items-md-stretch">
        <div className="col-md-12">
          <div className="h-100 p-5  bg rounded-3">
            <div className="container col-xxl-12 px-4 py-5 rounded-3 custom-container">
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5 shadow-lg">
                <div className="col-10 col-sm-8 col-lg-6 ">
                  <img
                    src="https://i.postimg.cc/zvQWtF2X/iphone-g657d0fa51-1920.jpg"
                    className="d-block mx-lg-auto img-fluid"
                    alt="iphone"
                    width="700"
                    height="500"
                    loading="lazy"
                  ></img>
                </div>
                <div className="col-lg-6">
                  <h1 className="display-5 mb-3 custom-heading">
                    Welcome to Dealscover London
                  </h1>
                  <p className="lead">
                    Get ready for non-stop entertainment in one of the world's
                    most vibrant cities with Dealscover London! We're your
                    one-stop-shop for the most affordable and exciting events
                    happening right on your doorstep.
                  </p><br></br>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <a href="gallery">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg px-4 me-md-2"
                    >
                      View Events
                    </button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="pt-3 mt-4 text-muted border-top">
      Dealscover: London 2023
    </footer>
  </>
);
  } else {
    return (
      <>
        <Navbar />
        <main>
          <br></br>
          <div className="row align-items-md-stretch">
            <div className="col-md-12">
              <div className="h-100 p-5  bg rounded-3">
                <div className="container col-xxl-12 px-4 py-5 rounded-3 custom-container">
                  <div className="row flex-lg-row-reverse align-items-center g-5 py-5 shadow-lg">
                    <div className="col-10 col-sm-8 col-lg-6 ">
                      <img
                        src="https://i.postimg.cc/zvQWtF2X/iphone-g657d0fa51-1920.jpg"
                        className="d-block mx-lg-auto img-fluid"
                        alt="iphone"
                        width="700"
                        height="500"
                        loading="lazy"
                      ></img>
                    </div>
                    <div className="col-lg-6">
                      <h1 className="display-5 mb-3 custom-heading">
                        Welcome to Dealscover London
                      </h1>
                      <p className="lead">
                        Get ready for non-stop entertainment in one of the world's
                        most vibrant cities with Dealscover London! We're your
                        one-stop-shop for the most affordable and exciting events
                        happening right on your doorstep.
                      </p>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <a href="signup">
                        <button
                          type="button"
                          className="btn btn-dark btn-lg px-4 me-md-2"
                        >
                          Join Us
                        </button></a>
                        <button className="btn btn-light btn-lg" type="button">
                          <a href="gallery">View Events</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="pt-3 mt-4 text-muted border-top">
          Dealscover: London 2023
        </footer>
      </>
    );
  }
};

export default LandingPage;
