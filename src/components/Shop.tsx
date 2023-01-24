import shopWallpaper from "./../assets/shop_wallpaper.png";
import shopInsta from "./../assets/shop_insta.png";
import shopAvatar from "./../assets/shop_avatar.png";

function Shop() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="shop_left_wallpaper w-1/2 flex justify-center items-center h-full">
        <div className="relative top-[18%] left-[-29%]">
          <img src={shopInsta} className="w-52" />
          <img
            src={shopAvatar}
            className="absolute bottom-[-2%] left-[-24%] w-24"
          />
          <div className="flex flex-col text-white w-fit m-auto mt-2">
            <span className="font-semibold">Scout the City</span>
            <span>56.7k followers</span>
          </div>
        </div>
      </div>

      <div className="shop_wallpaper w-1/2 h-full flex flex-col justify-center items-center gap-8">
        <h1 className="w-full max-w-lg text-center font-bold text-6xl">
          See it, make it, try it, do it
        </h1>
        <p className="text-2xl w-96 text-center">
          The best part of Pinterest is discovering new things and ideas from
          people around the world.
        </p>
        <button className="rounded-3xl shop_button p-3 font-bold">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Shop;
