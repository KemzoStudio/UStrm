let srcUrl = document.getElementById('url');
let startButton = document.getElementById('startButton');
let audioPlayer = document.getElementById('player');
let downloadLink = document.getElementById('downloadLink');

var controls = [
    'play-large', // The large play button in the center
    'rewind', // Rewind by the seek time (default 10 seconds)
    'play', // Play/pause playback
    'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'duration', // The full duration of the media
    'mute', // Toggle mute
    'volume', // Volume control
    'settings', // Settings menu
    'download', // Download
    'airplay', // Airplay (currently Safari only)
];


startButton.onclick = () => {
    let url = srcUrl.value;

    var player = new Plyr('#player', {
        controls,
        tooltips: { controls: true, seek: true },
        speed: { selected: 1, options: [0.75, 1, 1.25] }
    });
    
    player.config.urls.download = url;
    audioPlayer.src = url;
    downloadLink.href = url;
    player.config.urls.download = url;
};