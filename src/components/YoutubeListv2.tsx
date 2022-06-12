// Dependences
import React, { Fragment, useState } from 'react';

// Youtube API 3: get latest videos
// https://www.googleapis.com/youtube/v3/search?part=snippet&channelId={CHANNEL_ID}&maxResults={RESULTS}&order=date&type=video&key={YOUR_API_KEY}
const YOUTUBE_SEARCH_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
const CHANNEL_ID = 'UC8GCujkk3SVrAuUIZrnTsfA';
const RESULTS = 4;
const YOUTUBE = `${YOUTUBE_SEARCH_ITEMS_API}?part=snippet&channelId=${CHANNEL_ID}&maxResults=${RESULTS}&order=date&type=video&key=${
  import.meta.env.VITE_YOUTUBE_APY_KEY
}`;
// console.log('VITE_YOUTUBE_APY_KEY: ', import.meta.env.VITE_YOUTUBE_APY_KEY);

const YoutubeList = () => {
  const [links, setLinks] = useState([
    { linkOk: 'https://www.youtube-nocookie.com/embed/0QyvZ7Iblqc' },
    { linkOk: 'https://www.youtube-nocookie.com/embed/xlEH8apwBQ4' },
    { linkOk: 'https://www.youtube-nocookie.com/embed/E3lB6AYa7WQ' },
    { linkOk: 'https://www.youtube-nocookie.com/embed/BQgPCMzLoD8' },
  ]);

  // Get results from Youtube API v3
  let getData = async () => {
    // String final

    const response = await fetch(`${YOUTUBE}`);
    if (!response.ok) {
      console.log(response.statusText);
    }
    const data = await response.json();
    console.log('data: ', data);
    return data;
  };

  getData().then((data) => {
    console.log('data: ', data);
    var YoutubeID = [];
    for (let i = 0; i < RESULTS; i++) {
      YoutubeID.push({
        linkOk:
          'https://www.youtube-nocookie.com/embed/' + data.items[i].id.videoId,
      });
    }
    console.log('YoutubeID: ', YoutubeID);
    setLinks(YoutubeID);
  });

  return (
    <Fragment>
      {/* Grid */}

      <div className="grid overflow-hidden grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-1 gap-2 p-4">
        {links.map((link, key) => (
          <div className="box" key={key}>
            <iframe
              className="embed-responsive-item w-full"
              src={link.linkOk}
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
