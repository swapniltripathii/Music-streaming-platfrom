import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({ info, playSound }) => {
  const { currentSong, setCurrentSong } = useContext(songContext);

  return (
    <div
      className="flex hover:bg-gray-500 hover:bg-opacity-20 p-2 rounded-md"
      onClick={() => {
        setCurrentSong(info);
      }}
    >
      <div
        className="w-12 h-12 bg-cover bg-center rounded-md"
        style={{
          backgroundImage: `url("${info.thumbnail}")`,
        }}
      ></div>
      <div className="flex w-full">
        <div className="text-white flex flex-col justify-center pl-3 w-5/6">
          <div className=" cursor-pointer hover:underline"> {info.name}</div>
          <div className="text-sm text-gray-400 cursor-pointer hover:underline">
            {info.artist.firstName + " " + info.artist.lastName}
          </div>
        </div>
        <div className="w-1/6 flex items-center justify-center text-gray-400 text-md">
          <div></div>
          {/*<div className="text-gray-400 flex item-center justify-center pl-3 text-xl"> ... </div>*/}
        </div>
      </div>
    </div>
  );
};

export default SingleSongCard;
