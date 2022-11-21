import Player from '@vimeo/player';
import loadash from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player1 = new Player(iframe);

player1.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

function f(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
}

player1.on('timeupdate', loadash(f, 1000));