// Dependencies
import React, { Fragment } from 'react'

// Media
// Media
import Logo1 from '../images/logo/logo1.png';
import Logo2 from '../images/logo/logo2.png';
import Logo3 from '../images/logo/logo3.jpg';
import Logo4 from '../images/logo/logo4.png';
import Sponsor01 from '../images/logo/LogoSponsor01.png';

const Sponsors = () => {
    const Logos = [Logo1, Logo2, Logo3, Logo4];
    const Sponsors = [Sponsor01];
  return (
    <Fragment>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-4 place-items-center">
        {Logos.map((Logo, Key) => (
          <img
            src={Logo}
            className="h-8 sm:h-12 md:h-6 lg:h-10 xl:h-12 grayscale hover:grayscale-0"
            alt="pga europro tour logo"
            key={Key + Logo}
          />
        ))}
        <div className="w-full h-full col-span-4 md:col-span-1 lg:col-span-4 xl:col-span-4">
          <div className="w-full bg-gradient-to-r from-lime-600 to-transparent flex flex-row items-center justify-around py-2">
            <img
              src={Sponsors[0]}
              className="h-8 sm:h-12 md:h-6 lg:h-10 xl:h-12"
              alt="Sponsor logo"
            />
            <p className="text-gray-500 font-bold text-left text-xl md:text-xs lg:text-xl xl:text-sm">
              Sponsor
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Sponsors