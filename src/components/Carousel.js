import React from 'react'

function Carousel() {
  return (
<>
<div className='container m-auto'>

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets.turbologo.com/blog/en/2021/07/20052636/spotify-brand-1-1-958x575.png" className="d-block w-60" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://betanews.com/wp-content/uploads/2021/11/spotify_headphones.jpg" className="d-block w90" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.moneysavingexpert.com/content/dam/mse/editorial-image-library/homepage/hero-spotify-mobile-phone-headphones-music.png" className="d-block w-90" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

</>
  )
}

export default Carousel