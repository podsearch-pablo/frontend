import ImageResult from "../Result/ImageResult";
import Title from "../Result/Title";
import Date from "../Result/Date";
import Scrunch from "../Result/Scrunch";
const SearchExample = () => {
    return (
        <>
            <div className="display-flex text-center justify-center align-center ">
                <p className="font-custom1 absolute top-5 left-1/2 transform -translate-x-1/2 text-white pt-9 text-5xl">Search Colin and Samir</p>


                <form onSubmit={() => { }} className="bg-blue pt-12 w-1/2  align-center ">
                    <label for="default-search" className="justify-center mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="justify-center relative">
                        <div className="flex absolute inset-y-0  items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block font-bold text-2xl p-4 pl-10 w-full text-lg text-white bg-[#3730A3] rounded-full focus:ring-blue-500  dark:bg-gray-700  dark:placeholder-white dark:text-white dark:focus:ring-blue-500" placeholder="Search content..." required />
                    </div>
                </form>

            </div>

            <div className="pt-10 grid grid-cols-10">
                <div className="col-span-3">

                    <div className="content-center">
                        <ImageResult />
                    </div>

                </div>

                <div className="item2 col-span-4">
                    <Title />
                    <div className="pl-15 pb-8">
                        <Scrunch />
                    </div>
                    <div className="pl-15 pb-8">
                        <Scrunch />
                    </div>
                    <div className="pl-15 pb-8">
                        <Scrunch />
                    </div>
                </div>
                <div className="item2 col-span-3">
                    <div className="pr-80">
                        <Date date="10/3/2" />
                    </div>
                </div>



            </div>

        </>

    );
}

export default SearchExample;