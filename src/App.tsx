import { useEffect } from "react";
import Top from "./components/Top";
import Search from "./components/Search";
import Save from "./components/Save";
import Shop from "./components/Shop";
import Bottom from "./components/Bottom";

function App() {
  useEffect(() => {
    let top = document.getElementById("top");
    let search = document.getElementById("search");
    let save = document.getElementById("save");
    let shop = document.getElementById("shop");
    let bottom = document.getElementById("bottom");

    let arrays = [
      { from: top, prev: null, next: search },
      { from: search, prev: top, next: save },
      { from: save, prev: search, next: shop },
      { from: shop, prev: save, next: bottom },
      { from: bottom, prev: shop, next: null },
    ];

    arrays.map((array: any) => {
      if (!array.prev) {
        array.from.addEventListener("wheel", (e: any) => {
          e.preventDefault();

          if (e.deltaY > 0) {
            array.next.scrollIntoView({ behavior: "smooth" });
          }
        });
      } else if (!array.next) {
        array.from.addEventListener("wheel", (e: any) => {
          e.preventDefault();

          if (e.deltaY < 0) {
            array.prev.scrollIntoView({ behavior: "smooth" });
          }
        });
      } else {
        array.from.addEventListener("wheel", (e: any) => {
          e.preventDefault();

          if (e.deltaY < 0) {
            array.prev.scrollIntoView({ behavior: "smooth" });
          } else {
            array.next.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    });
  }, []);

  return (
    <>
      <Top />
      <Search />
      <Save />
      <Shop />
      <Bottom />
    </>
  );
}

export default App;
