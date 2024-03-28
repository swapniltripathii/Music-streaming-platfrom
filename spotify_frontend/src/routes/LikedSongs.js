import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useState, useEffect } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";

const LikedSongs = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      setSongData(response.data);
    };
    getData();
  }, []);

  return (
    <LoggedInContainer curtActiveScreen="likedsongs">
      <div className=" text-white text-xl pb-4 pl-0 pt-8 font-semibold">
        Liked Songs
      </div>
      <div className=" space-y-2 overflow-auto">
        {songData.map((item) => {
          return <SingleSongCard info={item} playSound={() => {}} />;
        })}
      </div>
    </LoggedInContainer>
  );
};

export default LikedSongs;
