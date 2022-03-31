import React from 'react'

type Props = {}

const Sile = (props: Props) => {
  return (
<div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active float-left w-full">
      <img
        src="https://cdn.honda.com.vn/motorbikes/August2021/0iWnMT7utbGIadCX6CS0.jpg"
        className="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://cdn.honda.com.vn/motorbikes/October2021/DBSFFeIyA2rDz3ymUWDL.jpg"
        className="block w-full"
        alt="Camera"
      />
    </div>
    <div className="carousel-item float-left w-full">
      <img
        src="https://cdn.honda.com.vn/motorbikes/December2021/HRoSXCmUDgeC0mvNem98.jpg"
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>  )
}

export default Sile