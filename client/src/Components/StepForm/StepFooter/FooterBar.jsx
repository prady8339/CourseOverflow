import React from "react";
import styles from "./FooterBar.module.css";
import { usePlaylistContext } from "../../../Contexts/PlaylistContext";
import baseURL from "../../../Config/apiConfig";

const FooterBar = () => {
  const {
    stepNumber,
    setStepNumber,
    setPlaylistId,
    backStatus,
    nextStatus,
    setNextStatus,
    setFetchingVideos,
    playlistData,
    setPlaylistData,
  } = usePlaylistContext();

  const updateDraft = async () => {
    try {
      console.log("Updating playlist");
      const response = await fetch(`${baseURL}/api/playlist/update-draft/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playlistData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Playlist updated successfully");
        console.log(data);
        setPlaylistData((prevData) => ({
          ...prevData,
          draftId: data.draftId,
        }));
      } else {
        console.error("Failed to update playlist");
      }
    } catch (error) {
      console.error("Error updating playlist:", error);
    }
  };

  const fetchVideos = async () => {
    setFetchingVideos(true);
    setNextStatus(false);
    try {
      const response = await fetch(
        `${baseURL}/api/playlist/fetch-videos/?draftId=${playlistData.draftId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Playlist fetched successfully");
        console.log(data);
        setPlaylistData((prevData) => ({
          ...prevData,
          videoList: data,
        }));
      } else {
        console.error("Failed to fetch playlist");
      }
    } catch (error) {
      console.error("Error fetching playlist:", error);
    }
    setFetchingVideos(false);
    setNextStatus(true);
  };

  const publishPlaylist = async () => {
    try {
      const response = await fetch(
        `${baseURL}/api/playlist/create-playlist/?draftId=${playlistData.draftId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Playlist published successfully");
        console.log(data);
        setPlaylistId(data.playlistId);
      } else {
        console.error("Failed to publish playlist");
      }
    } catch (error) {
      console.error("Error publishing playlist:", error);
    }
  };

  const handelBackClick = () => {
    updateDraft();
    console.log(playlistData);
    setStepNumber(stepNumber - 1);
  };

  const handelNextClick = () => {
    if (stepNumber === 2) {
      fetchVideos();
    } else if (stepNumber === 3) {
      publishPlaylist();
    } else {
      updateDraft();
    }
    console.log(playlistData);
    setStepNumber(stepNumber + 1);
  };

  return (
    <div className={styles.createFooter}>
      <button
        onClick={handelBackClick}
        className={`${styles["BackBtn"]} ${
          backStatus ? "" : styles["disabledBtn"]
        }`}
        disabled={!backStatus}
      >
        BACK
      </button>
      <button
        onClick={handelNextClick}
        className={`${styles["NextBtn"]} ${
          nextStatus ? "" : styles["disabledBtn"]
        }`}
        disabled={!nextStatus}
      >
        {stepNumber === 3 ? "FINISH" : "NEXT"}
      </button>
    </div>
  );
};

export default FooterBar;
