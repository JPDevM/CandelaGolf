// Dependences
import React, { Fragment } from 'react';

// Media
import AnalisysImg01 from '../images/analisys/analisys01.jpg';
import AnalisysImg02 from '../images/analisys/analisys02.png';
import AnalisysImg03 from '../images/analisys/analisys03.png';

const AnalisysPromoHidden = () => {
  return (
    <Fragment>
      <div className="m-4 pt-8">
        <p className="text-3xl text-black pb-4">
          Análisis y recomendaciones para correjir tu golpe
        </p>
      </div>
      <div className="flex p-4">
        <p className="w-1/2 text-md text-gray-600 text-justify pr-4">
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
        <div className="w-1/2 grid grid-cols-3 gap-2">
          <img
            src={AnalisysImg01}
            className="bg-local w-full"
            alt="análisis golf"
          />
          <img
            src={AnalisysImg02}
            className="bg-local w-full"
            alt="análisis golf"
          />
          <img
            src={AnalisysImg03}
            className="bg-local w-full"
            alt="análisis golf"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default AnalisysPromoHidden;
