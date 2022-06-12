import React, { Fragment } from 'react';

export const Youtube = () => {
  return (
    <Fragment>
      {/* Main */}
      <div className="bg-gray-600 aspect-w-16 aspect-h-9">
        <iframe
          className=""
          src="https://www.youtube.com/embed/_I26FAHxVEY"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Fragment>
  );
};
export default Youtube;
