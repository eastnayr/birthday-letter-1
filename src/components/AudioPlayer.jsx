import React, { useEffect, useRef, useState } from "react";

function AudioPlayer({ src = "/music/wavte.mp3", autoplay = true, loop = true }) {
  const audioRef = useRef(null);
  const [blocked, setBlocked] = useState(false);
  const [mutedAutoplay, setMutedAutoplay] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = loop;
    audio.preload = "auto";

    const tryPlayUnmuted = async () => {
      try {
        audio.muted = false;
        await audio.play();
        setBlocked(false);
        return true;
      } catch (e) {
        return false;
      }
    };

    const tryPlayMuted = async () => {
      try {
        audio.muted = true;
        await audio.play();
        setMutedAutoplay(true);
        setBlocked(true);
        return true;
      } catch (e) {
        setBlocked(true);
        return false;
      }
    };

    (async () => {
      if (!autoplay) return;
      const ok = await tryPlayUnmuted();
      if (!ok) {
        await tryPlayMuted();
      }
    })();

    const unmuteOnGesture = () => {
      if (!audio) return;
      if (mutedAutoplay) {
        audio.muted = false;
        audio.play().catch(() => {});
        setMutedAutoplay(false);
        setBlocked(false);
      }
    };

    window.addEventListener("click", unmuteOnGesture, { once: true });
    return () => window.removeEventListener("click", unmuteOnGesture);
  }, [autoplay, loop, mutedAutoplay]);

  const start = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.muted = false;
      await audio.play();
      setBlocked(false);
      setMutedAutoplay(false);
    } catch (e) {
      // still blocked
      setBlocked(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} style={{ display: "none" }} />
      {blocked && (
        <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 9999 }}>
          <button className="btn" onClick={start}>
            Play Music
          </button>
        </div>
      )}
    </>
  );
}

export default AudioPlayer;
