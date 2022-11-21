import { useState } from "react";
import Loading from '../Loading/Loading';
import { useNavigate } from "react-router-dom";
import Image from "../Result/ImageResult";

import Title from "../Result/Title";

import Scrunch from "../Result/Scrunch";
import ImageResult from "../Result/ImageResult";
import Date from "../Result/Date";
const Home = () => {
    const [display, setDisplay] = useState();
    let navigate = useNavigate();


    const handlSearch = () => {
        setDisplay(
            <Loading />

        );
    }



    return (
        <div className="w-full h-full">
            



            <div className="pt-7 mx-auto items-center display-flex flex-col justify-center align-center text-center">

            <p className="font-custom1 text-white pt-9 text-8xl">Search Colin and Samir</p>
                
                <form onSubmit={() => { navigate('/searching/?h') }} className="pl-15 bg-blue pt-12 align-center w-1/2">
                    <label for="default-search" className="justify-center mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="justify-center relative text-center">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block font-bold text-2xl justify-center p-4 pl-10 w-full text-m text-white bg-[#3730A3] rounded-full focus:ring-blue-500  dark:bg-gray-700  dark:placeholder-white dark:text-white dark:focus:ring-blue-500" placeholder="Search content..." required />
                    </div>
                    {display}
                </form>

            </div>


            





        </div>
    );
}

export default Home;