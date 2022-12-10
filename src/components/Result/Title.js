import Font from "react-font";

const Title = (props) => {

    return (
        <>
            <div className="text-white text-4xl pr-20 pb-10">
                <Font family="Inter">
                    {props.input}
                </Font>
            </div>

        </>

    )
}

export default Title;