// Dependencies
import React, { Fragment } from 'react';

// Media
import ImageFace from '../images/face.jpg';
import BgBalls from '../images/svg/overlapping-circles.svg';


const HeroHiddenSection = () => {
  return (
    <Fragment>
      <div className="m-4 pt-8">
        <p className="text-2xl sm:text-3xl text-black">
          Mejora tu golf ahora.
          <br />
          Disfruta de este gran deporte.
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row m-4 pb-8">
        <div className="whit-full sm:w-1/2 sm:pr-4 md:w-2/3 lg:w-1/2 pt-4 sm:pt-0">
          <p className="text-md text-gray-600 text-justify">
            Bienvenido a nuestro espacio, en la cual podrá encontrar lo
            necesario para{' '}
            <span className="text-lime-700 font-bold text-lg"> mejorar </span>
            muy rápidamente su performance en el golf, este deporte que tanto
            amamos y tanto tiempo nos lleva dominar. Permanente incorporamos
            lecciones con recomendaciones prácticas, que podrá utilizara su día
            a día, tanto en la práctica como en el campo. Nuestro objetivo es
            que el{' '}
            <span className="text-lime-700 font-bold text-lg">disfrute </span>de
            este deporte, sea permanente, incluso en los momentos que toca
            aprender.
          </p>
        </div>
        <div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2"
          style={{ backgroundImage: `url(${BgBalls})` }}
        >
          <div className="p-4 flex justify-center w-full max-h-44 sm:max-h-56">
            <img
              src={ImageFace}
              className="rounded-lg object-contain flex"
              alt="Photo Face Juan Pablo Candela"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HeroHiddenSection;
