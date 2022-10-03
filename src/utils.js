export const fromSecsToMinutesAndSeconds = (time) => {
  let m = Math.floor(time % 3600 / 60).toString().padStart(2, '0'),
    s = Math.floor(time % 60).toString().padStart(2, '0');
  
  return m + ':' + s;
};

export const randomIntFromInterval = (max)=> {
  return Math.floor(Math.random() * max)
}