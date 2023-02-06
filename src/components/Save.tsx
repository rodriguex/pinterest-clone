function Save() {
  return (
    <div className="save_wallpaper w-full h-full flex justify-center items-center">
      <div className="flex justify-between w-4/5 items-center">
        <div className="save_text flex flex-col items-center gap-5">
          <h1 className="font-bold text-6xl">Save ideas you like</h1>
          <p className="text-2xl w-96 text-center">
            Collect your favorites so you can get back to them later.
          </p>
          <button className="p-3 save_button font-bold rounded-3xl w-fit">
            Explore
          </button>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-16">
            <div className="w-96 h-[420px] bg-gray-200 rounded-[50px] flex justify-center items-center font-bold text-3xl"></div>
            <div className="w-64 h-64 bg-gray-200 rounded-[50px] flex justify-center items-center font-bold text-3xl"></div>
          </div>

          <div className="mr-[15%] mt-[-18%] border self-end w-44 h-44 bg-gray-200 rounded-[50px] flex justify-center items-center font-bold text-3xl"></div>

          <div className="mr-[10%] flex justify-end gap-12">
            <div className="w-56 h-56 bg-gray-200 rounded-[50px] flex justify-center items-center font-bold text-3xl"></div>
            <div className="w-56 h-56 mt-[7%] bg-gray-200 rounded-[50px] flex justify-center items-center font-bold text-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Save;
