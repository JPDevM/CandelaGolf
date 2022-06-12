import React, { Fragment } from 'react';

import Media from '../components/Media';
import Profile from '../components/Profile';

const Home = () => {
  return (
    <Fragment>
      <main>
        {/* Scroll: https://daily-dev-tips.com/posts/tailwind-css-fixed-and-scrollable-section/ */}
        <div className="w-screen h-screen bg-white">
          <div className="grid grid-cols-1 h-screen md:grid-cols-2 relative">
            {/* fixed section */}
            <div className="text-center text-gray-400">
              <Media />
            </div>
            {/* scrollable sections */}
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
