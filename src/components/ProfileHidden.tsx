// Dependencies
import React, { Fragment } from 'react';

// Components
import HeroHiddenSection from './HeroHiddenSection';
import BannerGTS from './BannerGTSHidden';
import Promo1 from './ContentPromoHidden'
import Promo2 from './AnalisysPromoHidden'
import PromoDatabase from './DatabasePromoHidden'
import Footer from './Footer';


const ProfileHidden = () => {
  return (
    <Fragment>
      <HeroHiddenSection />
      <BannerGTS />
      <Promo1 />
      <Promo2 />
      <PromoDatabase />
      <Footer />
    </Fragment>
  );
};
export default ProfileHidden;
