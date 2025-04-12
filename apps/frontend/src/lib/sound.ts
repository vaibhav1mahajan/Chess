let myMoveSound: HTMLAudioElement | null = null;
let opponentMoveSound: HTMLAudioElement | null = null;
let errorSound: HTMLAudioElement | null = null;

export const initSounds = () => {
  myMoveSound = new Audio('/sounds/my-move.mp3');
  opponentMoveSound = new Audio('/sounds/opponent-move.mp3');
  errorSound = new Audio('/sounds/error.mp3');
};

export const playMyMoveSound = () => {
  console.log("playMyMoveSound ", myMoveSound)
  if (myMoveSound) {
    myMoveSound.currentTime = 0;
    console.log("playing...")
    myMoveSound.play();
  }
};

export const playOpponentMoveSound = () => {
  console.log("opponent move sound")
  if (opponentMoveSound) {
    console.log("playing...")
    opponentMoveSound.currentTime = 0;
    opponentMoveSound.play();
  }
};

export const playErrorSound = () => {
  if (errorSound) {
    errorSound.currentTime = 0;
    errorSound.play();
  }
};
