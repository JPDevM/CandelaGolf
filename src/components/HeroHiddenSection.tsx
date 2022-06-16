// Dependencies
import React, { Fragment } from 'react';

// Media
import ImageFace from '../images/face.jpg';
import BgBalls from '../images/svg/overlapping-circles.svg';


const HeroHiddenSection = () => {
  return (
    <Fragment>
      <div className="m-4">
        <p className="text-3xl text-black pb-4">
          Mejora tu golf ahora.
          <br />
          Disfruta de este gran deporte.
        </p>
      </div>
      <div className="flex m-4">
        <div className="w-2/3 pr-4">
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
          className="w-1/3"
          style={{
            backgroundImage: `url(${BgBalls})`,
          }}
        >
          <div className="p-4 flex justify-center">
            <img
              src={ImageFace}
              className="shadow rounded-lg w-40 border-8 border-white"
              alt="Photo Face Juan Pablo Candela"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HeroHiddenSection;
