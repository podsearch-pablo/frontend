import Font from "react-font";
import { Text } from "react-font";

import React from "react";
//widths of screen split up into 395, 633, 227-> this lives in the middle of 633.

const Scrunch = (props) => {

    const message = props.m;

    const makeBold = () => {
        // Update the document title using the browser API
        return (message.replace(props.keyword, '<b>' + props.keyword + '</b>'));

    };


    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + ":" : "";
        let mDisplay = ""
        if (m > 9) {
            mDisplay = m + ":"
        }
        else if (m > 0) {
            mDisplay = "0" + m + ":"
        }
        else {
            mDisplay = "00:"
        }
        var sDisplay = s > 0 ? s : "";
        return hDisplay + mDisplay + sDisplay;
    }

    return (

        <>
            <div className="pt-5">


                <div className="block relative flex pb-5 justify-center p-4 pl-5 pr-5 w-5/6 text-3xl text-black bg-[#F2F61E] rounded-3xl focus:ring-blue-500  dark:bg-gray-700  dark:placeholder-white dark:text-white dark:focus:ring-blue-500">
                    <Font family='Viga'>
                        <Text className="text-left" >
                            <p dangerouslySetInnerHTML={{ __html: makeBold(message) }}>

                            </p>

                        </Text>




                        <div className="flex-row flex absolute bottom-0 right-2">

                            <div>
                                {secondsToHms(props.time)}
                            </div>
                            <a href={props.link}>
                                <img src={require('./external.png')} className="h-5 w-5" />
                            </a>

                        </div>


                    </Font>
                </div>
            </div>

        </>
    )
}
export default Scrunch;