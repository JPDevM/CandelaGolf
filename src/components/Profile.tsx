// Dependencias
import React, { Fragment } from 'react';

// Components
import Youtube from '../components/Youtube';
import YoutubeList from './YoutubeList';

// Media
import Logo1 from '../images/logo/logo1.png';
import Logo2 from '../images/logo/logo2.png';
import Logo3 from '../images/logo/logo3.jpg';
import Logo4 from '../images/logo/logo4.png';

export const Profile = () => {
  const Logos = [Logo1, Logo2, Logo3, Logo4];

  return (
    <Fragment>
      <div className="container mx-auto ">
        {/* Title */}
        <div className="p-4 flex flex-col justify-between h-screen">
          <div className="flex-none">
            <h1 className="text-black  font-mono text-5xl tracking-wide text-center underline decoration-pink-500 decoration-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-lime-500">
              Juan Pablo Candela
            </h1>
            <p className="pt-4">
              Professional golf player, with full status on the Euro Pro Tour,
              qualify for the Challenge 2022 and DP World Tour.
            </p>
          </div>
          <div className="pt-4 flex-none">

            <div className="flex gap-8 justify-center">
              {Logos.map((Logo, Key) => (
                <img
                  src={Logo}
                  className="h-12 grayscale hover:grayscale-0"
                  alt="pga europro tour logo"
                  key={Key+Logo}
                />
              ))}
            </div>
          </div>
          <div className="pt-8 grow">
            <Youtube />
          </div>
          <div className="pt-4 flex-none">
            {/* List */}
            <YoutubeList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Profile;
