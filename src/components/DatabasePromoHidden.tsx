// Dependencies
import React, { Fragment } from 'react';

// Media
import BgCircuit from '../images/svg/circuit-board.svg';

// Custom Variables
const YoutubeVideoID = 'ltc-8uMCu7A';

const DatabasePromoHidden = () => {
  return (
    <Fragment>
      {/* title */}
      <div className="m-4 pt-8">
        <p className="text-2xl sm:text-3xl text-black pb-4">
          La mayor base de datos de golf de PGA Tour
        </p>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row m-4">
        {/* video */}
        <div className="w-full sm:w-3/5 lg:w-full xl:w-1/2">
          <div
            className="aspect-w-16 aspect-h-9"
            style={{ backgroundImage: `url(${BgCircuit})` }}
          >
            <iframe
              className="p-8"
              src={`https://www.youtube.com/embed/` + `${YoutubeVideoID}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        {/* text */}
        <div className="w-full sm:w-2/5 lg:w-full xl:w-1/2 pt-4 sm:pt-0 sm:pl-4 lg:pt-4 xl:pt-0">
          <p className="text-md text-gray-600 text-justify">
            El PGA Tour, con sensores, GPS, cámaras y otros dispositivos de
            seguimiento, ha logrado desarrollar una gran base de datos, con más
            de{' '}
            <span className="text-lime-700 font-bold text-lg">
              174 millones
            </span>{' '}
            de atributos de tiro y{' '}
            <span className="text-lime-700 font-bold text-lg">80 mil</span>{' '}
            horas de video durante los últimos 20 años en funcionamiento.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default DatabasePromoHidden;
