import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/Home.jsx";
import AboutPage from "./components/Pages/AboutPage/About.jsx";
import LiveIllustration from "./components/Pages/EventPage/LiveIllustration.jsx";
import Weddings from "./components/Pages/EventPage/Weddings.jsx";
import CustomPortraits from "./components/Pages/EventPage/CustomPortraits.jsx";
import Portfolio from "./components/Pages/PortfolioPage/Portfolio.jsx";
import Book from "./components/Pages/BookPage/Book.jsx";
import BrandEvents from "./components/Pages/EventPage/BrandEvents.jsx";
import BirthdaysAndShowers from "./components/Pages/EventPage/BirthdaysAndShowers.jsx";
import TiffanyCo from "./components/Pages/EventPage/TiffanyCo.jsx";
import Creed from "./components/Pages/EventPage/Creed.jsx";
import LatestWedding from "./components/Pages/EventPage/LatestWedding.jsx";
import BridalShower from "./components/Pages/EventPage/BridalShower.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="book" element={<Book />} />
        <Route path="/live" element={<LiveIllustration />} />
        <Route path="/wedding" element={<Weddings />} />
        <Route path="/brand" element={<BrandEvents />} />
        <Route path="/other" element={<BirthdaysAndShowers />} />
        <Route path="/custom" element={<CustomPortraits />} />
        <Route path="/brand/tiffany&co" element={<TiffanyCo />} />
        <Route path="/brand/creed" element={<Creed />} />
        <Route path="/wedding/jay&anh" element={<LatestWedding />} />
        <Route path="/bridalshower/jasmine" element={<BridalShower />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
