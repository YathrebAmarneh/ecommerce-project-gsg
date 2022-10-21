import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Sale from "./components/sale";
import Navbar from "./components/navbar";
import ImageSlider from "./components/image-slider";
import Featured from "./components/featured";
import AboutMatter from "./components/about-matter";
import Shop from "./components/shop";
import RecommendedVideos from "./components/recommended-videos";
import AsSoonOn from "./components/as-soon-on";
import Footer from "./components/footer";
import Explore from "./components/explore";

function App() {
  const [data, setData] = useState([]);

  const [isFetch, setIsFetch] = useState(true);

  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get("https://dummyjson.com/products");
    setData(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetch) {
    return "Data is Loading ...";
  }
  //   console.log("data", data);
  return (
    <>
      <Sale />
      <Navbar />
      <ImageSlider />
      <Featured data={data} />
      <AboutMatter />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <AsSoonOn />
      <Footer />
    </>
  );
}
export default App;
