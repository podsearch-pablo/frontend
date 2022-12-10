
/**
 * Single image result
 */
const ImageResult = (prop) => {
    return (
        
        <img className="w-5/6" src={require('./jpg/' + prop.id + '.jpg')}/>

    );
}
export default ImageResult;