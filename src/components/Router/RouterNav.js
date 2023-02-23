
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import DynamicSearch from "../SearchExample/DynamicSearch";
import Query from "../Query/Query";
/**
 * Router for the application - dynamically renders the correct screen
 */
const RouterNav = () => {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div className="min-h-screen bg-[#250C45]">
                            <NavBar />
                            <DynamicSearch />
                        </div>
                    } />
                    <Route path="/query" element={
                        <div className="min-h-screen bg-[#250C45]">
                            <NavBar />
                            <Query />
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
            <Footer />

        </>
    );
};

export default RouterNav;
