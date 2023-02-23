
/**
 * Single image result
 */
const ImageResult = (prop) => {
    return (
        <img alt="Youtube video thumbnail" className="w-5/6" src={require('./jpg/' + prop.id + '.jpg')}/>

    );
}
export default ImageResult;