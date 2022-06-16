// Dependences
import React, { Fragment, useState, useEffect } from 'react';

// Youtube API 3: get latest videos
// https://www.googleapis.com/youtube/v3/search?part=snippet&channelId={CHANNEL_ID}&maxResults={RESULTS}&order=date&type=video&key={YOUR_API_KEY}
const YOUTUBE_SEARCH_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
const CHANNEL_ID = 'UC8GCujkk3SVrAuUIZrnTsfA';
const RESULTS = 4;
const YOUTUBE = `${YOUTUBE_SEARCH_ITEMS_API}?part=snippet&channelId=${CHANNEL_ID}&maxResults=${RESULTS}&order=date&type=video&key=${
  import.meta.env.VITE_YOUTUBE_APY_KEY
}`;

// console.log('VITE_YOUTUBE_APY_KEY: ', import.meta.env.VITE_YOUTUBE_APY_KEY);

//test
//www.mariokandut.com/how-to-fetch-data-with-react-hooks/
//dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le

const YoutubeList = () => {
  const [links, setLinks] = useState([
    { linkOk: 'https://www.youtube-nocookie.com/embed/0QyvZ7Iblqc' },
    { linkOk: 'https://www.youtube-nocookie.com/embed/xlEH8apwBQ4' },
    { linkOk: 'https://www.youtube-nocookie.com/embed/E3lB6AYa7WQ' },
    { linkOk: 'https://www.youtube-nocookie.com/embed/BQgPCMzLoD8' },
  ]);
  const [data, setData] = useState([]);

  // Get results from Youtube API v3
  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(`${YOUTUBE}`);
      if (!response.ok) {
        console.log(response.statusText);
      }
      const json = await response.json();
      console.log('json: ', json);
      setData(json);
    };
    fetchData();
  }, [setData]);

  // Reemplazar links con nuevos 
  console.log('data: ', data);

  

  return (
    <Fragment>
      {/* Grid */}
      <div className="justify-self-end grid overflow-hidden grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-1 gap-1 pt-4">
        {links.map((link, key) => (
          <div className="box aspect-w-16 aspect-h-9 bg-gray-200" key={key}>
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
