import { useRef, useState, useCallback, useEffect } from "react";
import StyledAudioPlayer from "./styled-audio-player";

const SPEEDS = [1, 1.25, 1.5, 2];

const formatTime = (seconds) => {
  if (!seconds || !isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIndex, setSpeedIndex] = useState(0);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [isPlaying]);

  const handleSeek = useCallback((e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, x / rect.width));
    audio.currentTime = ratio * duration;
  }, [duration]);

  const cycleSpeed = useCallback(() => {
    const nextIndex = (speedIndex + 1) % SPEEDS.length;
    setSpeedIndex(nextIndex);
    if (audioRef.current) {
      audioRef.current.playbackRate = SPEEDS[nextIndex];
    }
  }, [speedIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  if (!audioUrl) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <StyledAudioPlayer>
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      <button className="play-btn" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div className="player-body">
        <span className="time">{formatTime(currentTime)} / {formatTime(duration)}</span>
        <div className="progress-wrap" onClick={handleSeek}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <button className="speed-btn" onClick={cycleSpeed}>
        {SPEEDS[speedIndex]}x
      </button>
    </StyledAudioPlayer>
  );
};

export default AudioPlayer;
