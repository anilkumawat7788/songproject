// AudioControls.js
import React, { useState, useEffect } from 'react';

const AudioControls = ({ isPlaying, currentSong, onPlayPause, onStop, onNext, onPrev }) => {
  const [progress, setProgress] = useState(0);
  const audioRef = React.createRef();

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current && audioRef.current.duration) {
        const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percentage);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateProgress);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, [audioRef]);

  return (
    <div className="audio-controls">
    {currentSong && (
      <div className="audio-player">
        <p className="song-info">Now Playing: {currentSong.title}</p>
        <audio ref={audioRef} src={currentSong.songUrl} />
        <div className="control-buttons">
          <button className="control-button" onClick={onPrev}>Prev</button>
          <button className="control-button" onClick={onPlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button className="control-button" onClick={onStop}>Stop</button>
          <button className="control-button" onClick={onNext}>Next</button>
        </div>
        <div className="progress-bar">
          <progress value={progress} max="100" />
        </div>
      </div>
    )}
  </div>
  );
};

export default AudioControls;
