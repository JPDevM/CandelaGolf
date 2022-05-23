import React, { Fragment } from 'react';

import Youtube from '../components/Youtube';
import YoutubeList from './YoutubeList';


export const Profile = () => {
  return (
    <Fragment>
      <div className="container mx-auto ">
        {/* Title */}
        <div className="p-4 flex flex-col justify-between h-screen">
          <div className="flex-none">
            <h1 className="text-black  font-mono text-5xl tracking-wide text-center underline decoration-pink-500 decoration-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-600">
              Juan Pablo Candela
            </h1>
            <p className="pt-4">
              Professional player and Princeton Economics alum with full status
              on the Euro Pro Tour, planning to qualify for the Challenge and DP
              World Tour.
            </p>
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
