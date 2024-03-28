// import { useState } from "react";
// import LoggedInContainer from "../containers/LoggedInContainer";
// import { Icon } from "@iconify/react";
// import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
// import SingleSongCard from "../components/shared/SingleSongCard";

// const SearchPage = () => {
//   const [isInputFocused, setInputFocused] = useState(false);
//   const [searchText, setSearchText] = useState("");
//   const [songData, setSongData] = useState([]);

//   const searchSong = async () => {
//     // this fuction will call the search api
//     const response = await makeAuthenticatedGETRequest(
//       "/song/get/songname/" + searchText
//     );
//     setSongData(response.data);
//   };

//   return (
//     <LoggedInContainer curtActiveScreen="search">
//       <div className=" w-full py-6 ">
//         <div
//           className={`w-1/3 p-3 text-sem rounded-full bg-gray-800 flex px-5 space-x-3 items-center ${
//             isInputFocused ? "border border-white" : ""
//           }`}
//         >
//           <Icon icon="gg:search" className=" text-2xl text-white " />
//           <input
//             type="text"
//             placeholder="What do you want to listen to?"
//             className=" w-full bg-gray-800 focus:outline-none text-white "
//             onFocus={() => {
//               setInputFocused(true);
//             }}
//             onBlur={() => {
//               setInputFocused(false);
//             }}
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 searchSong();
//               }
//             }}
//           />
//         </div>
//         {songData.length > 0 ? (
//           <div className="pt-8 space-y-3">
//             <div className=" text-white">
//               Search results for "
//               <span className=" font-bold">{searchText}</span>"
//             </div>
//             {songData.map((item) => {
//               return (
//                 <SingleSongCard
//                   info={item}
//                   key={JSON.stringify(item)}
//                   playSound={() => {}}
//                 />
//               );
//             })}
//           </div>
//         ) : (
//           <div className=" text-white pt-10">Nothing to show here.</div>
//         )}
//       </div>
//     </LoggedInContainer>
//   );
// };

// export default SearchPage;

import { useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";

const SearchPage = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [songData, setSongData] = useState([]);

  const searchSong = async () => {
    // Convert the search text to lowercase
    const searchTextLower = searchText.toLowerCase();

    // Call the search API with the lowercase search text
    const response = await makeAuthenticatedGETRequest(
      "/song/get/songname/" + searchTextLower
    );

    // Update the song data state with the response
    setSongData(response.data);
  };

  return (
    <LoggedInContainer curtActiveScreen="search">
      <div className=" w-full py-6 ">
        <div
          className={`w-1/3 p-3 text-sem rounded-full bg-gray-800 flex px-5 space-x-3 items-center ${
            isInputFocused ? "border border-white" : ""
          }`}
        >
          <Icon icon="gg:search" className=" text-2xl text-white " />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className=" w-full bg-gray-800 focus:outline-none text-white "
            onFocus={() => {
              setInputFocused(true);
            }}
            onBlur={() => {
              setInputFocused(false);
            }}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchSong();
              }
            }}
          />
        </div>
        {songData.length > 0 ? (
          <div className="pt-8 space-y-3">
            <div className=" text-white">
              Search results for "
              <span className=" font-bold">{searchText}</span>"
            </div>
            {songData.map((item) => {
              return (
                <SingleSongCard
                  info={item}
                  key={JSON.stringify(item)}
                  playSound={() => {}}
                />
              );
            })}
          </div>
        ) : (
          <div className=" text-white pt-10">Nothing to show here.</div>
        )}
      </div>
    </LoggedInContainer>
  );
};

export default SearchPage;
