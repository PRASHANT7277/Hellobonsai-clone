export const StopwatchTime = ( time ) => {
  let hr = Math.floor( ( time / ( 1000 * 60 * 60 ) ) % 24 );
  let min = Math.floor( ( time / ( 1000 * 60 ) ) % 60 );
  let sec = Math.floor( ( time / 1000 ) % 60 );

  let hours = hr < 10 ? "0" + hr : hr;
  let minutes = min < 10 ? "0" + min : min;
  let seconds = sec < 10 ? "0" + sec : sec;

  return `${ hours } : ${ minutes } : ${ seconds }`;
};