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

    top?.addEventListener("wheel", (e) => {
      e.preventDefault();

      if (e.deltaY > 0) {
        search?.scrollIntoView({ behavior: "smooth" });
      }
    });

    search?.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();

        if (e.deltaY < 0) {
          top?.scrollIntoView({ behavior: "smooth" });
        } else {
          save?.scrollIntoView({ behavior: "smooth" });
        }
      },
      { passive: false }
    );

    save?.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();

        if (e.deltaY < 0) {
          search?.scrollIntoView({ behavior: "smooth" });
        } else {
          shop?.scrollIntoView({ behavior: "smooth" });
        }
      },
      { passive: false }
    );

    shop?.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();

        if (e.deltaY < 0) {
          save?.scrollIntoView({ behavior: "smooth" });
        } else {
          bottom?.scrollIntoView({ behavior: "smooth" });
        }
      },
      { passive: false }
    );

    bottom?.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();

        if (e.deltaY < 0) {
          shop?.scrollIntoView({ behavior: "smooth" });
        }
      },
      { passive: false }
    );
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
