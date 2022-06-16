// Dependences
import React, { Fragment } from 'react';

// Media
import AnalisysImg01 from '../images/analisys/analisys01.png';
import AnalisysImg02 from '../images/analisys/analisys02.png';
import AnalisysImg03 from '../images/analisys/analisys03.png';

const Analisys = [AnalisysImg01, AnalisysImg02, AnalisysImg03];

const AnalisysPromoHidden = () => {
  return (
    <Fragment>
      {/* Title */}
      <div className="m-4 pt-8">
        <p className="text-2xl sm:text-3xl text-black pb-4">
          Análisis y recomendaciones para correjir tu golpe
        </p>
      </div>
      {/* Text */}
      <div className="flex flex-col-reverse sm:flex-row lg:flex-col-reverse xl:flex-row p-4">
        <p className="sm:w-2/5 lg:w-full xl:w-1/2 text-md text-gray-600 text-justify pt-4 sm:pt-0 sm:pr-4 lg:pt-4 xl:pt-0">
          Si quieres mejorar tu desempeño en el campo de manera sencilla, te
          ofrecemos la posibilidad de que recibas un{' '}
          <span className="text-lime-700 font-bold text-lg">
            análisis completo{' '}
          </span>
          y detallado de tu golpe con recomendaciones de como corregirlo y
          mejorarlo, apoyado de tecnología de{' '}
          <span className="text-lime-700 font-bold text-lg">
            BigData & Inteligencia Artificial
          </span>
        </p>

        {/* Images */}
        <div className="sm:w-3/5 lg:w-full xl:w-1/2 grid grid-cols-3 gap-2">
          {Analisys.map((Img, key) => (
            <img
              src={Img}
              className="object-cover w-full h-full bg-center shadow-lg border-2 border-gray-200"
              alt="análisis golf"
              key={key}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default AnalisysPromoHidden;
