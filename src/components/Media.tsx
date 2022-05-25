import React, { Fragment } from 'react';
import Carousel from 'nuka-carousel';

import Profile1 from '../images/profile/profile-1.jpg';
import Profile2 from '../images/profile/profile-2.jpg';

export const Media = () => {
  return (
    <Fragment>
      {/* <div
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
      </div> */}

      {/* <img
          src={Profile1}
          className="min-h-full transition ease-in-out delay-50 hover:scale-105 duration-300"
          alt="Profile image of Juan Pablo Candela"
        /> */}

      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} className="text-white p-4 shadow">
            Anterior
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className="text-white p-4 shadow">
            Siguiente
          </button>
        )}
        autoplay={true}
      >
        <img
          src={Profile1}
          className="h-screen transition ease-in-out delay-50 hover:scale-105 duration-300"
          alt="Profile image of Juan Pablo Candela"
        />
        <img
          src={Profile2}
          className="h-screen transition ease-in-out delay-50 hover:scale-105 duration-300"
          alt="Profile image of Juan Pablo Candela"
        />
      </Carousel>
    </Fragment>
  );
};
export default Media;
