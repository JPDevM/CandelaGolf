import React, { Fragment } from 'react';

import Youtube from '../components/Youtube';

import Profile1 from '../images/profile/profile-1.jpeg';

const Home = () => {
  const API_KEY = 'AIzaSyClqThNUw8LgdC5Ckt6AZ6iJ801myDGyKY';
  return (
    <Fragment>
      <main>
        <div className="w-screen h-screen bg-white">
          <div className="grid grid-cols-2 h-screen">
            <div className="text-center text-gray-400">
              <div
                style={{ backgroundImage: `url(${Profile1})` }}
                className="bg-fixed h-screen transition ease-in-out delay-50 hover:scale-105 duration-300"
              />
            </div>
            <div className="text-center text-gray-400">
              <div className="container mx-auto">
                {/* Title */}
                <div className="p-8">
                  <h1 className="text-black font-semibold font-mono text-5xl tracking-wide text-center underline decoration-pink-500 decoration-4">
                    Juan Pablo Candela
                  </h1>
                  <p className="pt-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                    atque deserunt sint perspiciatis veniam placeat officiis
                    voluptatibus enim tempore, officia ratione fugiat excepturi
                    alias eaque repudiandae, vero reprehenderit error cum!
                  </p>
                  <div className="p-8">
                    <Youtube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
