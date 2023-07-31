import { useState, useEffect } from "react";

const colors = ["red", "orange", "green", "blue", "indigo", "violet"];

export default function MaltaText() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 500);
    return () => clearInterval(interval);
  }, [colorIndex]);

  return (
    <div>
      <h1>
        Malta Text <span style={{ color: colors[colorIndex] }}>Remote</span>
      </h1>
    </div>
  );
}
