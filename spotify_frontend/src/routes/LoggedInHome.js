import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces ",
    imgUrl:
      "https://images.unsplash.com/photo-1452724931113-5ab6340ce080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBpYW5vfGVufDB8fDB8fHww",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with ambient and post-rock music ",
    imgUrl:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background ",
    imgUrl:
      "https://images.unsplash.com/photo-1581447109200-bf2769116351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdHVybWVudGFsJTIwc3R1ZHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Focus Flow",
    description: "Uptempo instrumental hip hop beats ",
    imgUrl:
      "https://images.unsplash.com/photo-1614112678956-4bfcb20dbba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvY3VzJTIwZmxvd3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house ",
    imgUrl:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww",
  },
];

const Home = () => {
  return (
    <LoggedInContainer curtActiveScreen="home">
      <PlaylistView titleText="Focus" cardsData={focusCardsData} />
      {/* <PlaylistView titleText="Spotify Playlists" cardsData={focusCardsData} />
      <PlaylistView titleText="Sounds of India" cardsData={focusCardsData} /> */}
    </LoggedInContainer>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold m-4 ">{titleText}</div>
      <div className="w-full flex justify-between space-x-4">
        {
          //cards data will be an array
          cardsData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })
        }
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className=" bg-black bg-opacity-50 w-1/5 p-4 rounded-lg">
      <div className="py-3 pt-2">
        <img className=" w-full rounded-md" src={imgUrl} alt="label" />
      </div>
      <div className=" text-white font-semibold py-3">{title}</div>
      <div className=" text-gray-500 text-sx">{description}</div>
    </div>
  );
};

export default Home;
