import { useState } from "react";
import Font from "react-font";
import { Text } from "react-font";


//widths of screen split up into 395, 633, 227-> this lives in the middle of 633.

const Scrunch = (props) => {
    const [message, setMessage] = useState("It had many elements of a fun time, without a real regard for the time of it, hahaha");
    const [time, setTime] = useState("32:03")


    return (
        <>

            <div className="block relative flex justify-center p-4 pl-5 pr-5 w-5/6 text-xl text-black bg-[#F2F61E] rounded-xl focus:ring-blue-500  dark:bg-gray-700  dark:placeholder-white dark:text-white dark:focus:ring-blue-500">
                <Font family='Viga'>
                    <Text className="text-left">
                        {message}
                    </Text>

                    <div className="flex-row flex absolute bottom-0 right-0">

                        <div>
                            {time}
                        </div>
                        <a href="https://youtu.be/IjoTYJNr8DA?t=925">
                            <img src={require('./external.png')} className="h-5 w-5" />
                        </a>

                    </div>


                </Font>
            </div>

        </>
    )
}
export default Scrunch;