
import { useState } from "react"

import { useEffect } from "react";
import Scrunch from "./Scrunch";

const ScrunchList = (props) => {


    const [dict, setDict] = useState(props.dictionary);
    const [item, setItem] = useState();
    const [visible, setVisible] = useState(false)
    let lst = [];

    const setDisplay = () => {
        lst = [];
        console.log("effect called");


        for (let x = 0; x < dict.length; x++) {
            lst.push(
                <div className="pl-15 pb-8">
                    <Scrunch keyword={props.search} m={dict[x]['text']} key={dict[x]['exactTime']} link={dict[x]['link']} time={dict[x]['exactTime']} />
                </div>);


        }
        setItem(lst);
    }

    useEffect(() => {
        lst = [];
        console.log("effect called");


        if (dict.length > 3) {
            for (let x = 0; x < 3; x++) {
                lst.push(
                    <div className="pl-15 pb-8">
                        <Scrunch keyword={props.search} m={dict[x]['text']} key={dict[x]['exactTime']} link={dict[x]['link']} time={dict[x]['exactTime']} />
                    </div>);
            }
            lst.push(
                <img onClick={setDisplay}  className="pl-20 justify-center h-1/6 w-2/3"
                 src={require('./triangle.png')}>
                </img>

            )

        }
        else {
            setDisplay();
            return;
        }






        setItem(lst);

    }, [dict, props.dictionary]
    );

    return (
        <>
            {item}
        </>

    )
}

export default ScrunchList;