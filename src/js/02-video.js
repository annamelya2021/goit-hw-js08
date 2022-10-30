import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const getStorageData = localStorage.getItem(KEY);
player.setCurrentTime(getStorageData || 0);
