
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";

import NavBar2 from "../NavBar/NavBar2";
import DynamicSearch from "../SearchExample/DynamicSearch";

const RouterNav = () => {


    return (
        <>

            <BrowserRouter>
                <Routes>

                    <Route path="/" element={
                        <div className="min-h-screen bg-[#250C45]">
                            <NavBar2 />
                            <DynamicSearch />
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
            <Footer />

        </>
    );
};

export default RouterNav;
