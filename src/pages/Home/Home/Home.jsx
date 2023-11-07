import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="slider-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 slider-content-wrap">
              <div className="slider-content">
                <h6> We are here for </h6>
                <h1>Office, House & Anywhere You can Get our Service</h1>
                <p>We can make deliver your Order on time.</p>
                <a href="#" className="btn btn-primary">
                  View More
                </a>
              </div>
              <div className="header-social">
                <ul className="d-flex">
                  <li>
                    <span>Follow us</span>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
