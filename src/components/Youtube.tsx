import React, { Fragment } from 'react';

import YoutubeList from './YoutubeList';

export const Youtube = () => {
  return (
    <Fragment>
      {/* Main */}
      <iframe
        className="embed-responsive-item w-full h-96"
        src="https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLhEZHRHHBAHjBvoxonXkma7zCwwKvQm95;autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {/* List */}
      <YoutubeList />
    </Fragment>
  );
};
export default Youtube;
