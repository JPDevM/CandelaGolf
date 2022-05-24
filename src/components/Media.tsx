import React, { Fragment } from 'react';

import Profile1 from '../images/profile/profile-1.jpg';

export const Media = () => {
  return (
    <Fragment>
      <div
        style={{ backgroundImage: `url(${Profile1})` }}
        className="bg-no-repeat bg-center bg-local hover:bg-fixed h-full transition ease-in-out delay-50 hover:scale-105 duration-300"
      >
        <div className="">
          <div className="flex justify-around py-4">
            <a
              href=""
              className="p-2 inline-flex items-center justify-center text-center bg-white text-lime-500 text-base border border-lime-500 rounded-md bg-gradient-to-r hover:from-lime-400 hover:to-lime-600 hover:border-white hover:text-white transition"
            >
              Curso
            </a>

            <a
              href=""
              className="p-2 inline-flex items-center justify-center text-center bg-white text-lime-500 text-base border border-lime-500 rounded-md bg-gradient-to-r hover:from-lime-400 hover:to-lime-600 hover:border-white hover:text-white transition"
            >
              Entrenamiento
            </a>

            <a
              href=""
              className="p-2 inline-flex items-center justify-center text-center bg-white text-lime-500 text-base border border-lime-500 rounded-md bg-gradient-to-r hover:from-lime-400 hover:to-lime-600 hover:border-white hover:text-white transition"
            >
              Recomendaciones
            </a>

            <a
              href=""
              className="p-2 inline-flex items-center justify-center text-center bg-white text-lime-500 text-base border border-lime-500 rounded-md bg-gradient-to-r hover:from-lime-400 hover:to-lime-600 hover:border-white hover:text-white transition"
            >
              Tienda
            </a>
          </div>
        </div>
      </div>
      {/* <img
          src={Profile1}
          className="min-h-full transition ease-in-out delay-50 hover:scale-105 duration-300"
          alt="Profile image of Juan Pablo Candela"
        /> */}

      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: '50%' }}
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg"
                className="block w-full"
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: '50%' }}
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(124).jpg"
                className="block w-full"
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: '50%' }}
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg"
                className="block w-full"
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50"></div>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </Fragment>
  );
};
export default Media;
