import searchFirst from "./../assets/search_first.png";
import searchSecond from "./../assets/search_second.png";
import searchThird from "./../assets/search_third.png";
import searchFourth from "./../assets/search_fourth.png";

function Search() {
  return (
    <div
      id="search"
      className="search_wallpaper w-full h-full flex items-center"
    >
      <div className="relative w-1/2 flex justify-center items-center">
        <img
          src={searchFirst}
          className="w-40 absolute top-[-280px] right-[230px] z-10"
        />
        <img src={searchSecond} className="absolute w-72 h-auto z-20" />
        <img
          src={searchThird}
          className="absolute top-[-150px] left-[160px] w-52"
        />
        <img
          src={searchFourth}
          className="absolute top-[30px] right-[230px] w-40"
        />
        <div className="absolute left-[280px] top-[-90px] w-fit p-8 search_input font-bold text-[25px] bg-white z-30 rounded-[100px]">
          easy chicken dinner
        </div>
      </div>

      <div className="w-1/2 search_text flex items-center flex-col gap-[22px]">
        <h1 className="font-bold text-6xl mt-[33px]">Search for an idea</h1>
        <p className="w-full max-w-[400px] text-center text-2xl leading-7">
          What do you want to try next? Think of something you’re into—like
          “easy chicken dinner”—and see what you find.
        </p>
        <button className="px-4 py-3 w-fit search_button rounded-full font-semibold">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Search;
