// Dependences
import React, { Fragment } from 'react';

// Youtube API 3: get latest videos
// https://www.googleapis.com/youtube/v3/search?part=snippet&channelId={CHANNEL_ID}&maxResults={RESULTS}&order=date&type=video&key={YOUR_API_KEY}
// https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC8GCujkk3SVrAuUIZrnTsfA&maxResults=4&order=date&type=video&key=AIzaSyDjOdjKdRTQBwa2JQ382IJF54BKGcpy8vc
const YOUTUBE_SEARCH_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
const CHANNEL_ID = 'UC8GCujkk3SVrAuUIZrnTsfA';
const RESULTS = 4;

// console.log('VITE_YOUTUBE_APY_KEY: ', import.meta.env.VITE_YOUTUBE_APY_KEY);

export const YoutubeList = () => {
  let getData = async () => {
    // String final
    // const response = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC8GCujkk3SVrAuUIZrnTsfA&maxResults=4&order=date&type=video&key=AIzaSyDjOdjKdRTQBwa2JQ382IJF54BKGcpy8vc");
  
    const response = await fetch(
      `${YOUTUBE_SEARCH_ITEMS_API}?part=snippet&channelId=${CHANNEL_ID}&maxResults=${RESULTS}&order=date&type=video&key=${
        import.meta.env.VITE_YOUTUBE_APY_KEY
      }`
    );
    // console.log('response: ', response);

    const Data = await response.json();
    console.log('Data: ', Data);
    return Data;
    // return Data
  };
  const links2 = getData().then((data) => {
    var YoutubeID = [];
    for (let i = 0; i < RESULTS; i++) {
      YoutubeID.push(
        'https://www.youtube-nocookie.com/embed/' + data.items[i].id.videoId
      );
    }
    console.log('YoutubeID (for): ', YoutubeID);
    return YoutubeID;
  });

  console.log('getData (function): ', getData());


  const links = [
    'https://www.youtube-nocookie.com/embed/_I26FAHxVEY',
    'https://www.youtube-nocookie.com/embed/7f_LjrrAuoo',
    'https://www.youtube-nocookie.com/embed/zND-seMFALA',
    'https://www.youtube-nocookie.com/embed/WbBbsPDF5OQ',
  ];
  return (
    <Fragment>
      {/* Grid */}

      <div className="grid overflow-hidden grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-1 gap-2 p-4">
        {links.map((link, key) => (
          <div className="box" key={key + link}>
            <iframe
              className="embed-responsive-item w-full"
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
