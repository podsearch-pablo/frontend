import ImageResult from '../Result/ImageResult';
import Scrunch from '../Result/Scrunch';

const NavBar = () => {
    return (
        <>
            <div class="container mx-auto flex flex-wrap p-5 pt-20 flex-col md:flex-row items-center">

                <a className="absolute left-0 h-[150px] w-[150px] ml-10 " href="https://www.youtube.com/c/ColinandSamir/featured">
                    <img src={require('./cnslogo.png')} />
                </a>
                <a className="absolute right-0 h-[150px] w-[150px] ml-10 " href="https://twitter.com/thepablohansen">
                    <img src={require('./Plogo.png')} />
                </a>

            </div>

        </>
    )
}

export default NavBar;