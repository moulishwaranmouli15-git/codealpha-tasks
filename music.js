const songs = [
    {
        title: "Song One",
        artist: "Artist A",
        src: "song1.mp3"
    },
    {
        title: "Song Two",
        artist: "Artist B",
        src: "song2.mp3"
    },
     {
        title: "Song Three",
        artist: "Artist C",
        src: "song3.mp3"
    },
     {
        title: "Song Four",
        artist: "Artist D",
        src: "song4.mp3"
    }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playlist = document.getElementById("playlist");

function loadSong(i) {
    title.textContent = songs[i].title;
    artist.textContent = songs[i].artist;
    audio.src = songs[i].src;
}

function playPause() {
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause();
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;

    document.getElementById("currentTime").textContent =
        formatTime(audio.currentTime);
    document.getElementById("duration").textContent =
        formatTime(audio.duration);
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("ended", nextSong); // Autoplay

function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return min + ":" + (sec < 10 ? "0" + sec : sec);
}

// Playlist
songs.forEach((song, i) => {
    let li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => {
        index = i;
        loadSong(index);
        audio.play();
    };
    playlist.appendChild(li);
});

loadSong(index);
