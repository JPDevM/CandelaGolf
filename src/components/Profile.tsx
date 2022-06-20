// Dependencias
import React, { Fragment } from 'react';

// Components
import Youtube from './Youtube';
import YoutubeList from './YoutubeList';
import ProfileHidden from './ProfileHidden';
import Sponsors from './Sponsors';

export const Profile = () => {
  return (
    <Fragment>
      <div className="container mx-auto">
        {/* Main Screen */}
        <div className="p-4 flex flex-col justify-between h-auto md:h-screen">
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
            <Sponsors />
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
