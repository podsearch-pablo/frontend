
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Mess from "../Mess/Mess";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";

import SearchExample from '../SearchExample/SearchExample';
import NavBar2 from "../NavBar/NavBar2";

const RouterNav = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>

                    <Route path="/" element={
                        <div className="h-screen w-full bg-[#250C45]">
                            <NavBar />
                            <Home />
                        </div>
                    } />
                    <Route path="/test" element={<Mess />} />
                    <Route path="/searching" element={
                        <div className="h-screen bg-[#250C45]">
                            <NavBar />
                            <Search />
                        </div>

                    } />
                    <Route path="/searchex" element={
                        <div className="h-screen bg-[#250C45]">
                            <NavBar2 />
                            <SearchExample />
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
            <Footer />

        </>
    );
};

export default RouterNav;
