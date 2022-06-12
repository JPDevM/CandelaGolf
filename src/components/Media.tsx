// Dependencies
import React, { Fragment } from 'react';
import Carousel from 'nuka-carousel';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';

// Media
import Profile1 from '../images/profile/profile-1.jpg';
import Profile2 from '../images/profile/profile-2.jpg';
import Profile3 from '../images/profile/profile-3.jpg';
import Ball from '../images/seo/favicon/android-chrome-256x256.png';

export const Media = () => {
  var profileImg = new Array();
  profileImg = [Profile1, Profile2, Profile3];

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
          <button onClick={previousSlide} className="p-4 flex">
            <ChevronDoubleLeftIcon className="w-8 text-gray-200" />
            <img className="w-8" alt="golf ball" src={Ball} />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className="p-4 flex">
            <img className="w-8" alt="golf ball" src={Ball} />
            <ChevronDoubleRightIcon className="w-8 text-gray-200" />
          </button>
        )}
        renderBottomCenterControls={({
          slideCount,
          currentSlide,
          goToSlide,
        }) => (
          <div className="flex gap-4">
              {[...Array(slideCount)].map((e, key) => (
                <div
                className={currentSlide == key ? 'active' : undefined}
                  key={key}
                >
                  <button
                    type="button"
                    aria-label="slide 1 bullet"
                    onClick={() => goToSlide(key)}
                  >
                    <img className="w-4" alt="golf ball" src={Ball} />
                  </button>
                </div>
              ))}
          </div>
        )}
        wrapAround={true}
        autoplay={true}
        autoplayInterval={4000}
      >
        {profileImg.map((img, key) => (
          <img
            src={img}
            key={key}
            className="object-cover h-screen transition ease-in-out delay-50 hover:scale-105 duration-300"
            alt="Profile image of Juan Pablo Candela"
          />
        ))}
      </Carousel>
    </Fragment>
  );
};
export default Media;
