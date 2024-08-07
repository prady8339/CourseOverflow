import { createContext, useState, useContext } from "react";

export const usePlaylist = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const userId = user?.id || 1;
  console.log(userId);
  const [stepNumber, setStepNumber] = useState(1);
  const [backStatus, setBackStatus] = useState(false);
  const [nextStatus, setNextStatus] = useState(false);
  const [fetchingVideos, setFetchingVideos] = useState(false);
  const [playlistData, setPlaylistData] = useState({
    draftId: null,
    title: "",
    desc: "",
    thumbnail: "",
    cloudinaryPublicId: null,
    topicList: [],
    videoList: [],
    coursePDF: null,
    authorId: userId,
  });

  return {
    stepNumber,
    setStepNumber,
    backStatus,
    setBackStatus,
    nextStatus,
    setNextStatus,
    fetchingVideos,
    setFetchingVideos,
    playlistData,
    setPlaylistData,
  };
};

export const PlaylistContext = createContext();

export const usePlaylistContext = () => {
  const playlist = useContext(PlaylistContext);
  if (!playlist) {
    throw new Error(
      "usePlaylistContext must be used within a PlaylistProvider"
    );
  }
  return playlist;
};
