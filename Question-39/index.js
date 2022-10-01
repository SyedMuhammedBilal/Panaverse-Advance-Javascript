function make_album(artist, album, ...make_album) {
  if (make_album.length > 0) {
    var album = {
        artist: artist,
        album: album,
        tracks: make_album[0]
    }
    return album
  } else {
    var album = {
        artist: artist,
        album: album
    }
    return album
  }
}

make_album("Justin Bieber", "Believe")
make_album("Adele", "21", 12)