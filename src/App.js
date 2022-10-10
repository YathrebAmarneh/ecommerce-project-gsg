import './App.css';
import Sale from './components/sale';
import Navbar from './components/navbar';
import ImageSlider from './components/image-slider';
import Featured from './components/featured';
import AboutMatter from './components/about-matter';
import Shop from './components/shop';
import RecommendedVideos from './components/recommended-videos';
import AsSoonOn from './components/as-soon-on';
import Footer from './components/footer';
import Explore from './components/explore';

function App() {
return(<>
<Sale/>
<Navbar/>
<ImageSlider/>
<Featured/>
<AboutMatter/>
<Explore/>
<Shop/>
<RecommendedVideos/>
<AsSoonOn/>
<Footer/>
</>)


}
export default App;
