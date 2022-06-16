import React, { Fragment } from 'react';

import Media from '../components/Media';
import Profile from '../components/Profile';

const Home = () => {
  return (
    <Fragment>
      <main>
        {/* Scroll: https://daily-dev-tips.com/posts/tailwind-css-fixed-and-scrollable-section/ */}
        <div className="w-screen h-screen bg-white">
          {/* fixed section */}
          <div className="relative text-center text-gray-400">
            <div className="relative hidden lg:block lg:fixed w-full lg:w-1/2 text-center text-gray-400">
              <Media />
            </div>
            {/* scrollable sections */}
            <div className="w-full lg:w-1/2 lg:ml-auto text-center text-gray-400">
                <Profile />
              </div>
            {/* </div> */}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
