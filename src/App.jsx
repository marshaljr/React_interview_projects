import "./App.css";
import TreeMenu from "./components/tree-menu";
import menus from "./components/tree-menu/data";
// import LoadMoreData from "./components/load-more-data";
// import ImageSlider from "./components/image-slider";
// import StarRating from "./components/star-rating";
// import Accordian from "./components/accordian/index";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <StarRating noOfStars={8} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} /> */}
      {/* <LoadMoreData /> */}
      <TreeMenu menus={menus} />
    </div>
  );
}

export default App;
