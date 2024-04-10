function createPlaylist(playlistName) {
  let playlist = [];
  return {
    addSong: function (songName, artist) {
      playlist.push({ songName, artist });
    },
    listSongs: function () {
      if (playlist.length === 0) {
        console.log(playlistName + "Playlist is Empty.");
      } else {
        console.log(
          playlistName +
            "Playlist : " +
            playlist
              .map((song) => song.songName + " by: " + song.artist)
              .join(",")
        );
      }
    },
  };
}

function addSong(playlist, songName, artist) {
  playlist.addSong(songName, artist);
}
function listSongs(playlist) {
  playlist.listSongs();
}

const myPlaylist = createPlaylist("My Favorites");

addSong(myPlaylist, "Song1", "Artist1");
addSong(myPlaylist, "Song2", "Artist2");
addSong(myPlaylist, "Song3", "Artist3");

listSongs(myPlaylist);

/**My FavoritesPlaylist : Song1 by: Artist1,Song2 by: Artist2,Song3 by: Artist3 */
