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

const AudioPlayer = ({ audioUrl, audioDuration }) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragRatioRef = useRef(null);
  const wasPlayingBeforeDragRef = useRef(false);
  const durationRef = useRef(0);
  // If the server told us the duration, lock it immediately and ignore
  // anything the browser comes up with — its VBR-MP3 estimates drift.
  const durationLockedRef = useRef(Boolean(audioDuration));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(audioDuration || 0);
  const [speedIndex, setSpeedIndex] = useState(0);

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  useEffect(() => {
    if (audioDuration && audioDuration > 0) {
      setDuration(audioDuration);
      durationLockedRef.current = true;
    }
  }, [audioDuration]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [isPlaying]);

  const handlePointerDown = useCallback((e) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !durationRef.current) return;

    isDraggingRef.current = true;
    wasPlayingBeforeDragRef.current = !audio.paused;
    if (wasPlayingBeforeDragRef.current) audio.pause();

    const updateRatio = (clientX) => {
      const rect = bar.getBoundingClientRect();
      const x = clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, x / rect.width));
      dragRatioRef.current = ratio;
      setCurrentTime(ratio * durationRef.current);
    };

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updateRatio(clientX);

    const handlePointerMove = (ev) => {
      if (!isDraggingRef.current) return;
      const cx = ev.touches ? ev.touches[0].clientX : ev.clientX;
      updateRatio(cx);
    };

    const handlePointerUp = () => {
      const ratio = dragRatioRef.current;
      isDraggingRef.current = false;
      dragRatioRef.current = null;

      if (ratio !== null && audio && durationRef.current > 0) {
        audio.currentTime = ratio * durationRef.current;
      }
      if (wasPlayingBeforeDragRef.current) {
        audio.play().catch(() => {});
      }

      document.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("mouseup", handlePointerUp);
      document.removeEventListener("touchmove", handlePointerMove);
      document.removeEventListener("touchend", handlePointerUp);
    };

    document.addEventListener("mousemove", handlePointerMove);
    document.addEventListener("mouseup", handlePointerUp);
    document.addEventListener("touchmove", handlePointerMove);
    document.addEventListener("touchend", handlePointerUp);
  }, []);

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

    // Lock the first finite duration we get and ignore further updates.
    // Browsers continuously refine audio.duration for VBR MP3s during playback,
    // which would make the displayed total grow if we kept reacting to it.
    const onDurationChange = () => {
      if (durationLockedRef.current) return;
      const d = audio.duration;
      if (isFinite(d) && d > 0) {
        setDuration(d);
        durationLockedRef.current = true;
      }
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => {
      if (isDraggingRef.current) return;
      const d = durationRef.current;
      if (d > 0 && audio.currentTime >= d) {
        audio.pause();
        audio.currentTime = 0;
        setCurrentTime(0);
        setIsPlaying(false);
        return;
      }
      setCurrentTime(audio.currentTime);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("ended", onEnded);

    // When audio is served from cache, durationchange/loadedmetadata can fire
    // before this effect attaches listeners. Run the handler manually so we
    // don't miss the initial duration.
    if (audio.readyState >= 1 /* HAVE_METADATA */) {
      onDurationChange();
    }

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  if (!audioUrl) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <StyledAudioPlayer>
      <audio ref={audioRef} src={audioUrl} preload="auto" />
      <button
        className="play-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div className="player-body">
        <span className="time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <div
          className="progress-wrap"
          ref={progressRef}
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
        >
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
