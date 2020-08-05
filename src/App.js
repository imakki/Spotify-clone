import React, { useEffect, useState, useContext } from "react";
import Login from "./Login";
import Player from "./Player";
import "./App.css";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataContextValue } from "./DataProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataContextValue();
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1Etk95D1JHlwAp").then((response) =>
        dispatch({
          type: "SET_FAVS",
          discover_weekly: response,
        })
      );
    }
  }, []);
  useEffect(() => {
    console.log(user);
    console.log(token);
    console.log(playlists);
  }, [user, token]);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
