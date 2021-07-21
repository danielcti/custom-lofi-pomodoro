import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Container, ButtonsControlContainer } from "./styles";
import {soundsList} from "../../utils/soundsUtils";

function Radio() {
  const [radioVolume, setRadioVolume] = useState(1);
  const [playingIndex, setPlayingIndex] = useState(0);

  function handleVolumeChange(e: any) {
    setRadioVolume(e.target.volume);
  }

  function previousSound() {
    if (playingIndex > 0) {
      setPlayingIndex(playingIndex - 1);
    }
  }

  function nextSound() {
    if (playingIndex < soundsList.length - 1) {
        setPlayingIndex(playingIndex + 1);
      }
  }

  return (
    <Container>
      <h3>
            {soundsList[playingIndex].name}
            <span>by {soundsList[playingIndex].author}</span>
        </h3>
      <ButtonsControlContainer>
        <button onClick={previousSound}>Previous</button>
        <button onClick={nextSound}>Next</button>
      </ButtonsControlContainer>
      <ReactAudioPlayer
        src={soundsList[playingIndex].src}
        controls
        onVolumeChanged={(e) => handleVolumeChange(e)}
        volume={radioVolume}
        controlsList="nodownload"
        autoPlay
      />
    </Container>
  );
}

export default Radio;
