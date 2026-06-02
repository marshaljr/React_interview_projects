import "./App.css";
import LoadMoreData from "./components/load-more-data";
// import ImageSlider from "./components/image-slider";
// import StarRating from "./components/star-rating";
// import Accordian from "./components/accordian/index";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <StarRating noOfStars={8} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} /> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
