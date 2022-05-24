import React, { Fragment } from 'react';


export const Youtube = () => {
  return (
    <Fragment>
      {/* Main */}
      <iframe
        className="embed-responsive-item w-full h-96"
        src="https://www.youtube.com/embed/_I26FAHxVEY"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
    </Fragment>
  );
};
export default Youtube;
