// Dependencies
import React, { Fragment } from 'react';

// Media


const DatabasePromoHidden = () => {
  return (
    <Fragment>
      <div className="m-4">
        <p className="text-3xl text-black pb-4">
          La mayor base de datos de golf de PGA Tour
        </p>
      </div>
      <div className="flex m-4">
        <div className="w-2/3 pr-4">
          <p className="text-md text-gray-500">
            El PGA Tour, con sensores, GPS, cámaras y otros dispositivos de
            seguimiento, ha logrado desarrollar una gran base de datos, con más
            de 174 millones de atributos de tiro y 80 000 horas de video durante
            los últimos 20 años en funcionamiento.
          </p>
        </div>
        <div
          className="w-1/3"
        >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className=""
                src="https://www.youtube.com/embed/ltc-8uMCu7A"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DatabasePromoHidden;
