import React, { Fragment } from 'react';

import Youtube from '../components/Youtube';

export const Profile = () => {
  return (
    <Fragment>
      <div className="container mx-auto">
        {/* Title */}
        <div className="p-4">
          <h1 className="text-black font-semibold font-mono text-5xl tracking-wide text-center underline decoration-pink-500 decoration-4">
            Juan Pablo Candela
          </h1>
          <p className="pt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et atque
            deserunt sint perspiciatis veniam placeat officiis voluptatibus enim
            tempore, officia ratione fugiat excepturi alias eaque repudiandae,
            vero reprehenderit error cum!
          </p>
          <div className="pt-8">
            <Youtube />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Profile;
