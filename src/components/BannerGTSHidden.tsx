// Dependences
import React, { Fragment } from 'react';

// Media
import BannerGTS01 from '../images/bannerGTS-A.png';
import BannerGTS02 from '../images/bannerGTS-B.png';

const BannerGTSHidden = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <img src={BannerGTS01} className="" alt="Banner GTS" />
        <img src={BannerGTS02} className="" alt="Banner GTS" />
      </div>
    </Fragment>
  );
};
export default BannerGTSHidden;
