import { useState } from "react";
import ImageResult from "../Result/ImageResult";

const Query = () => {
    const [question, setQuestion] = useState("");
    const [answerFound, setAnswerFound] = useState(false);
    const [answer, setAnswer] = useState();
    const [imageId, setImageId] = useState();
    const [link, setLink] = useState();


    const searchQuery = () => {
        console.log(question);
        setAnswerFound(false);

        fetch('http://127.0.0.1:5000/query', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: question
            })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                setAnswer(data.answer)
                setImageId(data.relevant[0][4]);
                setLink(data.relevant[0][3] + '?t=' + data.relevant[0][0]);

                console.log("IMAGE IS " + data.relevant[0][4]);
                setAnswerFound(true)
            });
    };


    const searchPoem = () => {
        console.log(question);
        setAnswerFound(false);

        fetch('http://127.0.0.1:5000/poem', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: question
            })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                let hops = data.answer.replaceAll('\n', <br />)
                setAnswer(<>{hops} </>)
                setImageId(data.relevant[0][4]);
                setLink(data.relevant[0][3] + '?t=' + data.relevant[0][0]);
                console.log(data.answer);
                console.log("IMAGE IS " + data.relevant[0][4]);
                setAnswerFound(true)
            });
    }



    return (
        <>
            <div className="flex justify-center text-center justify-center align-center ">
                <p className="font-custom1 absolute top-5 left-1/2 transform -translate-x-1/2 text-white pt-9 text-5xl">Ask Colin and Samir</p>



                <div class="pt-24 flex  ">
                    <div class="flex flex-col items-center">

                        <div class="justify-center flex flex-row mb-3 w-96 pb-14">

                            <textarea
                                value={question} onInput={e => setQuestion(e.target.value)}
                                className="
                            form-control
                            blockDream is a purple cow because he is different from other Minecraft streamers. He is faceless, and he coded his videos so that at
                            w-full
                            text-2xl
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your question..."
                            ></textarea>
                            <button onClick={() => { searchQuery(); }} class="bottom-0 h-1/2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Search
                            </button>
                            <button onClick={() => { searchPoem(); }} class="bottom-0 h-1/2 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                                Poem
                            </button>


                        </div>
                        {answerFound ? <div className="flex flex-col items-center pb-7">
                            <div className="rounded-md text-justify bg-yellow-400 w-1/3 ">
                                <p className="p-5">
                                    {answer}
                                </p>
                            </div>
                            {/*<p className="text-white">
                                Relevant Clip
    </p>*/}
                            <div className="w-1/2">
                                <a className="pl-7 pt-7 " href={link}>
                                    <ImageResult id={imageId} />
                                </a>
                            </div>
                        </div>

                            :
                            <></>
                        }
                    </div>
                </div>

            </div>

        </>

    );
}

export default Query;