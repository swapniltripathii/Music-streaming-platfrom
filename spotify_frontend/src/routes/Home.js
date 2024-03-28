import { Icon } from "@iconify/react";
import spotify_logo from "../assests/images/spotify_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";

const focusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces ",
    imgUrl:
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with ambient and post-rock music ",
    imgUrl:
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background ",
    imgUrl:
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Focus Flow",
    description: "Uptempo instrumental hip hop beats ",
    imgUrl:
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house ",
    imgUrl:
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {
  return (
    <div className=" h-full w-full flex bg-black pt-2 pb-2 pr-2 pl-2">
      {/* This first div will be the left panel */}
      <div className=" h-full w-1/5 bg-gradient-to-b from-green-500 to-black flex flex-col justify-between pb-10 rounded-2xl">
        <div>
          {/* this div is for logo*/}
          <div className="logoDiv p-6">
            <img src={spotify_logo} alt="spotify logo" width={125} />
          </div>
          <div className="py-5">
            <IconText
              iconName={"material-symbols:home"}
              displayText={" Home "}
              active
            />
            <IconText
              iconName={"bitcoin-icons:search-outline"}
              displayText={"Search"}
            />
            <IconText
              iconName={"icomoon-free:books"}
              displayText={" Your Library"}
            />
          </div>
          <div className="pt-5">
            <IconText
              iconName={"material-symbols-light:add-box"}
              displayText={" Create Playlist "}
            />
            <IconText
              iconName={"noto:blue-heart"}
              displayText={" Liked Songs"}
            />
          </div>
        </div>
        <div className=" px-5 ">
          <div className=" border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="mingcute:earth-line" />
            <div className="ml-2 text-sm font-semibold"> English</div>
          </div>
        </div>
      </div>
      {/* This sec div will be the right part(main content)*/}
      <div className=" h-full w-4/5 bg-gradient-to-b from-blue-500 to-black rounded-2xl pb-2 overflow-auto">
        <div className="navbar w-full h-1/10 bg-app-black  flex items-center justify-end rounded-t-2xl ">
          <div className="w-1/2 flex item-center h-full justify-end rounded-2xl pt-4 px-2">
            {/* <div className="w-3/5 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div> */}
            <div className="w-1/5 flex justify-center bg-app-black h-3/5 rounded-full items-center pr-6">
              <IconText displayText={"Sign Up"} targetLink="/signup" />
            </div>
            <div className="w-1/5 flex justify-center bg-app-black h-3/5 pr-6 rounded-full items-center">
              <IconText
                iconName={""}
                displayText={"Log In"}
                targetLink="/login"
              />
              {/* <div className=" bg-white h-2/3 w-2/5 px-1 flex flex-col items-center justify-center rounded-full font-semibold cursor-pointer" onClick="/login" >
              Log In
              </div> */}
            </div>
          </div>
        </div>
        <div className="content p-6 pt-0 overflow-auto">
          <PlaylistView titleText="Focus" cardsData={focusCardsData} />
          {/* <PlaylistView
            titleText="Spotify Playlists"
            cardsData={focusCardsData}
          />
          <PlaylistView
            titleText="Sounds of India"
            cardsData={focusCardsData}
          /> */}
        </div>
      </div>
    </div>
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
