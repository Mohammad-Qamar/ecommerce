import React, { useState } from "react";
import { Howl } from "howler";
import "./css.css";

const SoundNotification = () => {
  const [soundPlayed, setSoundPlayed] = useState(false);

  const successSound = new Howl({
    src: ["success.mp3"], // Add the success sound file here
    volume: 0.5,
  });

  const errorSound = new Howl({
    src: ["error.mp3"], // Add the error sound file here
    volume: 0.5,
  });

  const playSound = (type) => {
    if (type === "success") {
      successSound.play();
    } else {
      errorSound.play();
    }
    setSoundPlayed(true);
  };

  return (
    <div>
      <button onClick={() => playSound("success")}>Success Sound</button>
      <button onClick={() => playSound("error")}>Error Sound</button>
    </div>
  );
};

export default SoundNotification;
