// Dependences
import React, { Fragment } from 'react';

// Media
import GolfImg1 from '../images/golfGround.png';
import GolfImg2 from '../images/golfista.png';

const ContentPromoHidden = () => {
  return (
    <Fragment>
      {/* Title */}
      <div className="m-4 pt-8">
        <p className="text-2xl sm:text-3xl text-black pb-4">
          !Evoluciona tu golf hasta donde quieras!
        </p>
      </div>
      {/* Subtitle */}
      <div className="m-4">
        <p className="text-md text-gray-600">
          Estamos preparado para acompañarte en un proceso de mejora continua de
          tu práctica del golf con{' '}
          <span className="text-lime-700 font-bold text-lg">
            {' '}
            clases online,
          </span>{' '}
          propuestas de entrenamiento según tu nivel y recomendaciones
          correctivas específicas, apoyadas con tecnología de{' '}
          <span className="text-lime-700 font-bold text-lg">
            BigData e Inteligencia Artificial.
          </span>
        </p>
      </div>

      <div className="m-4">
        {/* Sección 1 */}
        <div
          id="cursos"
          className="w-full py-4 h-40 relative flex flex-wrap content-center"
        >
          <div className="w-full bg-gradient-to-r from-green-900 to-lime-600 p-4 flex rounded-lg shadow-xl border-2 border-white">
            <p className="pl-32 sm:pl-44 text-sm sm:text-md text-right text-white tracking-wide">
              <span className="font-extrabold text-lg">Curso </span>completo,
              donde podrá aprender y dominar todos los conceptos necesarios para
              comprender el Golf, con una explicación sencilla y directa.{' '}
              <a href="#" className="font-bold underline text-lime-300 italic">
                Más Info.
              </a>
            </p>
          </div>

          <img
            className="h-28 sm:h-40 absolute top-0 left-4 "
            src={GolfImg2}
            alt="Golf ground"
          />
        </div>

        {/* Sección 2 */}
        <div
          id='ejercicios'
          className="w-full py-4 h-40 relative flex flex-wrap content-center">
          <div className="w-full bg-gradient-to-l from-green-900 to-lime-500 p-4 flex rounded-lg shadow-xl border-2 border-white">
            <p className="pr-24 text-left text-white text-sm sm:text-md tracking-wide">
              <span className="font-extrabold text-lg">Plantillas </span>de
              práctica, con planes de ejercicios específicos para la corrección
              de los aspectos claves del juego, según tu nivel y necesidad.{' '}
              <a href="#" className="font-bold underline text-lime-300 italic">
                Más Info
              </a>
            </p>
          </div>

          <img
            className="h-40 absolute top-0 right-4"
            src={GolfImg1}
            alt="Golf ground"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default ContentPromoHidden;
