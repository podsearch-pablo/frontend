

/**
 * Navigation bar - Uppermost element on website (CnS logo)
 */
const NavBar = () => {
    return (
        <>

            <div class="container mx-auto flex flex-wrap p-5 pt-20 flex-col md:flex-row items-center">

                <a className="absolute left-0 h-36 w-36 ml-10 " href="https://www.youtube.com/c/ColinandSamir/featured">
                    <img src={require('./cnslogo.png')} />
                </a>
                <a className="absolute right-0 h-40 w-40 ml-10 " href="https://twitter.com/thepablohansen">
                    <img src={require('./Plogo.png')} />
                </a>

            </div>

        </>
    )
}

export default NavBar;