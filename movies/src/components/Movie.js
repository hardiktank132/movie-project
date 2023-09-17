import React from 'react'
import "./movies.css";
import { Link } from 'react-router-dom';
function Movie() {
  return (
    <div>
      <>
     
  
  <nav className="navbar navbar-expand-lg navbar-dark navback">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#latest-movies">
              Latest Release
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#upcoming-movies">
              Upcoming Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#trailers">
              Trailer
            </a>
          </li>
        </ul>
        <Link to="/" className="btn btn-outline-danger" type="submit">
          LOGOUT
        </Link>
      </div>
    </div>
  </nav>
  <div
    id="carouselExampleControls"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./images/jailer.jpg" className="d-block w-100" alt="..." />
        
      </div>
      <div className="carousel-item">
        <img src="./images/jawan.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="./images/3ekka.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <section className="movies-1" id="latest-movies">
    <h2>Recommended Movies</h2>
    <div className="flex-container">
      <div className="item1">
        <div className="card text-bg-dark">
          <Link to="/booking"> 
          <img src="./images/jailer-v.jpg" className="card-img" alt="..." />
          </Link>
        </div>
      </div>
      <div className="item2">
        <div className="card text-bg-dark">
        <Link to="/booking">
          <img src="./images/jawan-v.jpg" className="card-img" alt="..." />
          </Link>
        </div>
      </div>
      <div className="item3">
        <div className="card text-bg-dark">
        <Link to="/booking">
          <img src="./images/mm-v.jpg" className="card-img" alt="..." />
          </Link>
        </div>
      </div>
      <div className="item3">
        <div className="card text-bg-dark">
        <Link to="/booking">
          <img src="./images/3ekka-v.jpg" className="card-img" alt="..." />
          </Link>
        </div>
      </div>
      <div className="item3">
        <div className="card text-bg-dark">
        <Link to="/booking">
          <img src="./images/gadar2-v.jpg" className="card-img" alt="..." />
        </Link>
        </div>
      </div>
    </div>
  </section>
  <section className="upcomingmovies" id="upcoming-movies">
    <h2>Upcoming Movies</h2>
    <div className="flex-container">
      <div className="item1">
        <div className="card text-bg-dark">
          <img src="./images/up1.jpg" className="card-img" alt="..." />
        </div>
      </div>
      <div className="item2">
        <div className="card text-bg-dark">
          <img src="./images/up2.jpg" className="card-img" alt="..." />
        </div>
      </div>
      <div className="item3">
        <div className="card text-bg-dark">
          <img src="./images/up3.jpg" className="card-img" alt="..." />
        </div>
      </div>
      <div className="item3">
        <div className="card text-bg-dark">
          <img src="./images/up4.jpg" className="card-img" alt="..." />
        </div>
      </div>
      <div className="item3">
        <div className="card text-bg-dark">
          <img src="./images/up5.jpg" className="card-img" alt="..." />
        </div>
      </div>
    </div>
  </section>
  <section className="upcomingmovies" id="trailers">
    <h2>Trailer</h2>
    <div className="flex-container">
      <div className="item1">
        <div className="card text-bg-dark">
          <a href="https://youtu.be/qN3wfuPYTI4?si=bCZjt_uybwewIHHv">
            <img src="./images/t1.jpg" className="card-img" alt="..." />
          </a>
        </div>
      </div>
      <div className="item2">
        <a href="https://youtu.be/bUR_FKt7Iso?si=z-9jCHIYeRjTpQME">
          <div className="card text-bg-dark">
            <img src="./images/t2.jpg" className="card-img" alt="..." />
          </div>
        </a>
      </div>
      <div className="item3">
        <a href="https://youtu.be/jV7qK1kfD70?si=bl4MeIbfqosDq7gh">
          <div className="card text-bg-dark">
            <img src="./images/t3.jpg" className="card-img" alt="..." />
          </div>
        </a>
      </div>
      <div className="item3">
        <a href="https://youtu.be/XQR8gPraRPs?si=9mLt64Qoi7NXM0iL">
          <div className="card text-bg-dark">
            <img src="./images/t4.jpg" className="card-img" alt="..." />
          </div>
        </a>
      </div>
      <div className="item3">
        <a href="https://youtu.be/u5W0a3Qqe7M?si=2-D-ibPao12K_Eld">
          <div className="card text-bg-dark">
            <img src="./images/t5.jpg" className="card-img" alt="..." />
          </div>
        </a>
      </div>
    </div>
  </section>
  <footer className="footer">
  <div className="containerssss">
    <div className="row">
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">our services</a>
          </li>
          <li>
            <a href="#">privacy policy</a>
          </li>
          <li>
            <a href="#">affiliate program</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>get help</h4>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">shipping</a>
          </li>
          <li>
            <a href="#">returns</a>
          </li>
          <li>
            <a href="#">order status</a>
          </li>
          <li>
            <a href="#">payment options</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>online shop</h4>
        <ul>
          <li>
            <a href="#">watch</a>
          </li>
          <li>
            <a href="#">bag</a>
          </li>
          <li>
            <a href="#">shoes</a>
          </li>
          <li>
            <a href="#">dress</a> 
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

</>




  
    </div>
  )
}

export default Movie
