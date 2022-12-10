
/**
 * Box with pre-configured date inside
 */
const Date = (props) => {
    const date = props.date;

    return (
        <>
            <div className="box border-8 border-black text-4xl text-white text-center">
                <div className="py-5">
                    {date}
                </div>
            </div>
        </>
    )
}

export default Date;