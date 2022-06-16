// Dependencias
import React, { Fragment } from 'react';

// Components
import Youtube from './Youtube';
import YoutubeList from './YoutubeList';
import ProfileHidden from './ProfileHidden';

// Media
import Logo1 from '../images/logo/logo1.png';
import Logo2 from '../images/logo/logo2.png';
import Logo3 from '../images/logo/logo3.jpg';
import Logo4 from '../images/logo/logo4.png';
import Sponsor01 from '../images/logo/logo4.png';

export const Profile = () => {
  const Logos = [Logo1, Logo2, Logo3, Logo4];
  const Sponsors = [Sponsor01];

  return (
    <Fragment>
      <div className="container mx-auto">
        {/* Main Screen */}
        <div className="p-4 flex flex-col justify-between h-screen sm:h-auto md:h-screen">
          {/* Title */}
          <div className="flex-none">
            <h1 className="text-black font-mono text-3xl sm:text-5xl lg:text-3xl xl:text-5xl tracking-wide text-center underline decoration-pink-500 decoration-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500 drop-shadow-md shadow-black">
              Juan Pablo Candela
            </h1>
            <p className="pt-2 sm:pt-4 text-sm sm:text-md">
              Professional golf player, with full status on the Euro Pro Tour,
              qualify for the Challenge 2022 and DP World Tour.
            </p>
          </div>

          {/* Logos */}
          <div className="pt-4 flex-none">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-4 gap-4 place-items-center">
              {Logos.map((Logo, Key) => (
                <img
                  src={Logo}
                  className="h-8 sm:h-12 md:h-6 lg:h-10 xl:h-12 grayscale hover:grayscale-0"
                  alt="pga europro tour logo"
                  key={Key + Logo}
                />
              ))}
              <div className="w-full h-full col-span-2 sm:col-span-4 md:col-span-1 lg:col-span-2 xl:col-span-4">
                <div className="w-full bg-gradient-to-l from-lime-600 to-transparent flex flex-row items-center justify-around py-2">
                  <img
                    src={Sponsors[0]}
                    className="h-8 sm:h-12 md:h-6 lg:h-10 xl:h-12"
                    alt="Sponsor logo"
                  />
                  <p className="text-white text-center text-md text">Sponsor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Video */}
          <div className="grow pt-4">
            <Youtube />
          </div>

          {/* List */}
          <div className="flex-none ">
            <YoutubeList />
          </div>
        </div>
        {/* End Main Screen */}

        {/* Hidden Screen use Scroll */}
        <div className="">
          <ProfileHidden />
        </div>
      </div>
    </Fragment>
  );
};
export default Profile;
