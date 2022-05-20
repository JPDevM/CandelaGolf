import React, { Fragment } from 'react'

import Profile1 from '../images/profile/profile-1.jpeg';

const Home = () => {
  return (
    <Fragment>
      <main>
        <div className="w-screen h-screen bg-white">
          <div className="grid grid-cols-2 h-screen">
            <div className="border-2 border-dashed border-gray-500 text-center text-gray-400">
              <div
                style={{ backgroundImage: `url(${Profile1})` }}
                className="bg-fixed h-screen"
              />
            </div>
            <div className="border-2 border-dashed border-gray-500 text-center text-gray-400">
              some texte
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home
