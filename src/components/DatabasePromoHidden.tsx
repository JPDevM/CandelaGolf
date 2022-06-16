// Dependencies
import React, { Fragment } from 'react';

// Media

const DatabasePromoHidden = () => {
  return (
    <Fragment>
      {/* title */}
      <div className="m-4">
        <p className="text-3xl text-black pb-4">
          La mayor base de datos de golf de PGA Tour
        </p>
      </div>
      <div className="flex m-4">
        {/* video */}
        <div className="w-3/5">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="bg-gray-200"
              src="https://www.youtube.com/embed/ltc-8uMCu7A"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        {/* text */}
        <div className="w-2/5 pl-4">
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
