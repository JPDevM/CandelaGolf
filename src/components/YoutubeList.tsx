import React, { Fragment } from 'react';

export const YoutubeList = () => {
  const links = [
    'https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLhEZHRHHBAHjBvoxonXkma7zCwwKvQm95;autoplay=1',
    'https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLhEZHRHHBAHjBvoxonXkma7zCwwKvQm95;autoplay=1',
    'https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLhEZHRHHBAHjBvoxonXkma7zCwwKvQm95;autoplay=1',
    'https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLhEZHRHHBAHjBvoxonXkma7zCwwKvQm95;autoplay=1',
    // 'https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLhEZHRHHBAHjBvoxonXkma7zCwwKvQm95;autoplay=1',
    // 'https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLhEZHRHHBAHjBvoxonXkma7zCwwKvQm95;autoplay=1',
  ];
  return (
    <Fragment>
      {/* Grid */}

      <div className="grid overflow-hidden grid-cols-4 grid-rows-1 gap-2 p-4">
        {links.map((link) => (
          <div className="box">
            <iframe
              className="embed-responsive-item w-full h-48"
              src={link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default YoutubeList;
