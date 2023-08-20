import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);
const CURRENT_TIME = 'videoplayer-current-time';
const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME)) ?? 0;

player.setCurrentTime(savedTime);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(evt.seconds));

  if (evt.seconds === evt.duration) {
    localStorage.removeItem(CURRENT_TIME);
  }
}
