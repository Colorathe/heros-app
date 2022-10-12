import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../../ui/components/Navbar";
import Marvel from "../../heroes/pages/Marvel";
import Dc from "../../heroes/pages/Dc";
import Search from "../pages/Search";
import Hero from "../pages/Hero";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<Marvel />} />
          <Route path='dc' element={<Dc />} />
          <Route path='search' element={<Search />} />
          <Route path='hero/:id' element={<Hero />} />

          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
