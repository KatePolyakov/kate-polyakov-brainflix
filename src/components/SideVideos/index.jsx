import React from 'react';

export const SideVideos = (props) => {
  const { setNewVideo, videoDataShort, currentVideo } = props;

  let videoArr = videoDataShort.filter(() => {
    return videoDataShort.id !== currentVideo.id;
  });

  return (
    <div className="video__list">
      <p>NEXT VIDEOS</p>
      <div>
        {videoArr.map((video) => (
          <button key={video.id} onClick={() => setNewVideo(video)}>
            <img src={video.image} alt={video} width="150px" />
            <p>{video.title}</p>
            <p>{video.channel}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
