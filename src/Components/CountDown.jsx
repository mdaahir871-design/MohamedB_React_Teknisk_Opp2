import React, { useState, useEffect } from "react";

export default function Countdown({ startSeconds }) {
  const [secondsLeft, setSecondsLeft] = useState(startSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return; // Stopper når det blir 0

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount or when count changes
  }, [secondsLeft]);

  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      {secondsLeft > 0 ? (
        <p>{secondsLeft} seconds remaining</p>
      ) : (
        <p>Gratulerer med Dagen :-)</p>
      )}
    </div>
  );
}