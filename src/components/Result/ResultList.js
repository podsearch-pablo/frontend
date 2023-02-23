
import { useState, useEffect, useRef} from "react"


import YellowResult from "./YellowResult";

/**
 * Dynamically renedered list of results for specific video/pod/article
 * If more than 3, will be a drop down button
 */
const ResultList = (props) => {


    const dict = props.dictionary
    const [item, setItem] = useState();
    let lst = useRef([]);

    

    useEffect(() => {
        const setDisplay = () => {
            lst.current = [];
            console.log("effect called");
    
            for (let x = 0; x < dict.length; x++) {
                lst.current.push(
                    <div className="pl-15 pb-8">
                        <YellowResult keyword={props.search} m={dict[x]['text']} key={dict[x]['exactTime']} link={dict[x]['link']} time={dict[x]['exactTime']} />
                    </div>);
            }
            setItem(lst.current);
        }
        

        lst.current= [];

        if (dict.length > 3) {
            for (let x = 0; x < 3; x++) {
                lst.current.push(
                    <div className="pl-15 pb-8">
                        <YellowResult keyword={props.search} m={dict[x]['text']} key={dict[x]['exactTime']} link={dict[x]['link']} time={dict[x]['exactTime']} />
                    </div>);
            } 
            lst.current.push(
                <img alt="See more arrow" onClick={setDisplay}  className="pl-20 justify-center h-1/6 w-2/3"
                 src={require('./png/triangle.png')}>
                </img>
            )
        }
        else {
            setDisplay();
            return;
        }
        setItem(lst.current);

    }, [dict, props.dictionary, props.search]
    );

    return (
        <>
            {item}
        </>

    )
}

export default ResultList;