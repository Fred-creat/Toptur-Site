import { useState } from "react";
import styled from "styled-components";

const VideoWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  top: 0;
  left: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.55);
  }
`;

const PlayButton = styled.div`
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);

  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: "▶";
    font-size: 40px;
    margin-left: 6px;
    color: #0077b6;
  }
`;

export default function VideoPlayer({ src }) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = (e) => {
    setPlaying(true);
    e.target.closest("div").querySelector("video").play();
  };

  return (
    <VideoWrapper>
      <video src={src} controls={playing} />

      <Overlay show={!playing} onClick={handlePlay}>
        <PlayButton />
      </Overlay>
    </VideoWrapper>
  );
}
