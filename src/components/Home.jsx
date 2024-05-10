import { Link } from "react-router-dom";
import getImageUrl from "../utils";


function Home() {
    const homeBgImage = getImageUrl("background-home-mobile.jpg");
    const homeBg = "public/background-home-mobile.jpg"

    return (
        <section className={`home h-screen w-full bg-no-repeat overflow-auto text-white bg-center bg-cover xs:bg-home-mobile sm:bg-home-tablet md:bg-home-desktop`}>
            <div className="flex h-full flex-col lg:flex-row pt-20 sm:pt-32 items-center px-8">
                <div className="flex flex-col items-center grow lg:w-1/2 lg:h-2/3">
                    <p className="text-sky-200">SO, YOU WANT TO TRAVAEL TO</p>
                    <h3 className="text-8xl my-6 grow">SPACE</h3>
                    <p className="w-full md:w-3/5 md:text-2xl text-center text-sky-200 grow "> So, you want to travel to
                        Space
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="flex mt-8 grow text-lg lg:h-1/2 items-center justify-center">
                    <Link to={'/destination'}>
                        <div className="xs:w-28 xs:h-28 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center text-black hover:cursor-pointer">
                            Explore
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home;