import React, { Fragment } from 'react';

export const YoutubeList = () => {
  const links = [
    'https://www.youtube-nocookie.com/embed/0QyvZ7Iblqc',
    'https://www.youtube-nocookie.com/embed/xlEH8apwBQ4',
    'https://www.youtube-nocookie.com/embed/E3lB6AYa7WQ',
    'https://www.youtube-nocookie.com/embed/BQgPCMzLoD8',
    // 'https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLhEZHRHHBAHjBvoxonXkma7zCwwKvQm95;autoplay=1',
    // 'https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLhEZHRHHBAHjBvoxonXkma7zCwwKvQm95;autoplay=1',
  ];
  return (
    <Fragment>
      {/* Grid */}

      <div className="grid overflow-hidden grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-1 gap-2 p-4">
        {links.map((link, key) => (
          <div className="box" key={key + link}>
            <iframe
              className="embed-responsive-item w-full bg-gray-200"
              src={link}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default YoutubeList;
