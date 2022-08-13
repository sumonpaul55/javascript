// function findsongs() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.data);
//     });
// }

const findsongs = () => {
  const searchText = document.getElementById("searchfield").value;
  const url = `https://api.lyrics.ovh/suggest/${searchText}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data = data.data;
      data = data.slice(0, 10);
      displaydata(data);
    });
  document.getElementById("searchfield").value = "";
};

const displaydata = (songsName) => {
  const container = document.getElementById("content-area");
  container.innerHTML = "";
  for (let i = 0; i < songsName.length; i++) {
    const creatElemtn = document.createElement("div");
    const perSongs = songsName[i];
    // console.log(perSongs);
    creatElemtn.className = "single-result row align-items-center my-3 p-3";
    creatElemtn.innerHTML = `
    <div class="col-md-9">
    <h3 class="lyrics-name"
        id="lyricsNmae">${perSongs.title}</h3>
    <p class="author lead">Album by <span>${perSongs.album.title}</span></p>
    <audio controls> <source src="${perSongs.preview}" </audio>
</div>
<div class="col-md-3 text-md-right text-center">
    <button class="btn btn-success" onclick="getlyrics('${perSongs.artist.name}','${perSongs.title}')">Get Lyrics</button>
</div>
    `;
    container.appendChild(creatElemtn);
  }
};

const getlyrics = async (artist, title) => {
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayLyrics(data.lyrics);
  } catch (error) {
    displayError("Sorry! I failed to load lyrics, Please try again later!!!");
  }
};

function displayLyrics(lyrics) {
  document.getElementById("show-lyrics").innerHTML = `
  <p class="lh-base text-primary"> ${lyrics}</p>
  `;
}
