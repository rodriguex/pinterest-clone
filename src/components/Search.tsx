import searchFirst from "./../assets/search_first.png";
import searchSecond from "./../assets/search_second.png";
import searchThird from "./../assets/search_third.png";
import searchFourth from "./../assets/search_fourth.png";

function Search() {
  return (
    <div className="search_wallpaper w-full h-full flex justify-center items-center">
      <div className="flex justify-between w-2/3 items-center">
        <div className="relative w-full">
          <img
            src={searchFirst}
            className="absolute top-[-270px] right-[38%] w-40 z-10"
          />
          <img
            src={searchSecond}
            className="absolute top-[-200px] w-72 h-auto z-20"
          />
          <img
            src={searchThird}
            className="absolute top-[-130px] left-[-22%] w-40"
          />
          <img
            src={searchFourth}
            className="absolute top-[50px] left-[35%] w-40"
          />
          <div className="absolute top-[-50px] left-[-10%] w-fit p-8 search_input font-bold text-[25px] bg-white z-30 rounded-[100px]">
            easy chicken dinner
          </div>
        </div>

        <div className="w-full search_text flex items-center flex-col gap-5">
          <h1 className="font-bold text-6xl">Search for an idea</h1>
          <p className="w-full max-w-md text-2xl">
            What do you want to try next? Think of something you’re into—like
            “easy chicken dinner”—and see what you find.
          </p>
          <button className="p-4 w-fit search_button rounded-full mt-3 font-semibold">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
