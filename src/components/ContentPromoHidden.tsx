// Dependences
import React, { Fragment } from 'react';

// Media
import GolfImg1 from '../images/golfGround.png';
import GolfImg2 from '../images/golfista.png';

const ContentPromoHidden = () => {
  return (
    <Fragment>
      <div className="m-4 pt-8">
        <p className="text-3xl text-black pb-4">
          !Evoluciona tu golf hasta donde quieras!
        </p>
      </div>
      <div className="">
        <p className="text-md text-gray-500">
          Estamos preparado para acompañarte en un proceso de mejora continua de
          tu práctica del golf con clases online, propuestas de entrenamiento
          según tu nivel y recomendaciones correctivas específicas, apoyadas con
          tecnología de BigData e Inteligencia Artificial.
        </p>
      </div>
      {/* Sección 1 */}
      <div className="w-full p-4 h-40 relative flex">
        <div className="w-full bg-green-200 h-20 p-2 flex">
          <p className="pl-48 text-left text-gray-700">
            Curso completo, donde podrá aprender y dominar todos los conceptos
            necesarios para comprender el Golf, con una explicación sencilla y
            directa.
          </p>
        </div>
        <div className="h-20">
          <a
            href="#"
            className="flex items-center justify-center w-40 p-2 ml-4 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700"
          >
            Más Info
          </a>
        </div>
        <img
          className="h-40 absolute top-0 left-4"
          src={GolfImg2}
          alt="Golf ground"
        />
      </div>
      {/* Sección 2 */}
      <div className="w-full p-4 h-40 relative flex">
        <div className="h-20">
          <a
            href="#"
            className="flex items-center justify-center w-40 p-2 mr-4 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700"
          >
            Más Info
          </a>
        </div>
        <div className="w-full bg-green-200 p-2 h-20 flex">
          <p className="pr-48 text-left text-gray-700">
            Plantillas de práctica, con planes de ejercicios específicos para la
            corrección de los aspectos claves del juego, según tu nivel y
            necesidad.
          </p>
        </div>

        <img
          className="h-40 absolute top-0 right-4"
          src={GolfImg1}
          alt="Golf ground"
        />
      </div>
    </Fragment>
  );
};
export default ContentPromoHidden;
