import React from "react";
import videoSrc from "../03/video.mp4";
import useLocalStore from "./useLocalStore";

const App = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStore("volume", "0");

  React.useEffect(()=> {
    if(!video.current) return;
    const n = Number(volume);
    if(n >= 0 && n <= 1) video.current.volume = n;
  }, [volume]);

  return (
    <div>
      {volume}
      <div className="flex">
        <button onClick={()=> setVolume("0")}>0</button>
        <button onClick={()=> setVolume("0.5")}>50</button>
        <button onClick={()=> setVolume("1")}>100</button>
      </div>
      <video controls ref={video} src={videoSrc} ></video>
    </div>
  );
};

export default App;
