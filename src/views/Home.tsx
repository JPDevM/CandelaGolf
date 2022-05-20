import React, { Fragment } from 'react';

import Media from '../components/Media';
import Profile from '../components/Profile';

const Home = () => {
  return (
    <Fragment>
      <main>
        <div className="w-screen h-screen bg-white">
          <div className="grid grid-cols-2 h-screen">
            <div className="text-center text-gray-400">
              <Media />
            </div>
            <div className="text-center text-gray-400">
              <Profile />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
