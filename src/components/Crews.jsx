import dataJson from "../assets/data.json";
import { useState } from "react";
import getImageUrl from "../utils";

const crews = dataJson.crew;

function Crews() {
    const [crew, setCrew] = useState(crews[0]);
    return (
        <section className={`destination h-screen w-full bg-no-repeat overflow-auto text-white bg-center bg-cover  bg-crew-mobile xs:bg-crew-mobile sm:bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop`}>
            <div className="flex h-full flex-col pt-20 sm:pt-32 items-center px-8 pb-4">
                <h3 className=" uppercase pb-8 text-3xl">Meet your crew</h3>
                <CrewDetails crew={crew} setCrew={setCrew} />
            </div>
        </section>
    )
}


function CrewDetails({ crew, setCrew }) {
    const crewImage = getImageUrl(crew.images.png);
    const [currentActiveTab, setCurrentActiveTab] = useState(0);

    const clickHandler = (event) => {
        const id = event.target.id;
        if (id === "0") {
            setCrew(crews[0]);
            setCurrentActiveTab(0);
        } else if (id === "1") {
            setCrew(crews[1]);
            setCurrentActiveTab(1);
        } else if (id === "2") {
            setCrew(crews[2]);
            setCurrentActiveTab(2);
        } else if (id === "3") {
            setCrew(crews[3]);
            setCurrentActiveTab(3);
        }
    }
    return (
        <div className=" flex flex-col lg:flex-row-reverse h-4/5 w-full shrink grow items-center">
            <div className="crew-image flex flex-col items-center h-3/5 grow lg:w-2/4">
                <div className="h-4/5 shrink grow">
                    <img src={crewImage} alt={crew.name} className=" h-full object-cover w-full" />
                </div>
                <div className="divider-line w-full mt-px h-px bg-slate-500 mx-8 lg:hidden"></div>
            </div>
            <article className=" flex flex-col items-center crew-details h-9/20 shrink grow px-4 md:w-2/3 lg:w-2/4">
                <div className="button-container w-3/5 flex justify-between items-center pt-4 mt-auto">
                    <button className={`h-4 w-4 rounded-full ${currentActiveTab === 0 ? "bg-white" : " bg-gray-500"} `} id="0" onClick={clickHandler}></button>
                    <button className={`h-4 w-4 rounded-full ${currentActiveTab === 1 ? "bg-white" : " bg-gray-500"} `} id="1" onClick={clickHandler}></button>
                    <button className={`h-4 w-4 rounded-full ${currentActiveTab === 2 ? "bg-white" : " bg-gray-500"} `} id="2" onClick={clickHandler}></button>
                    <button className={`h-4 w-4 rounded-full ${currentActiveTab === 3 ? "bg-white" : " bg-gray-500"} `} id="3" onClick={clickHandler}></button>
                </div>
                <div className="flex flex-col items-center mt-6 lg:w-4/5">
                    <h3 className=" uppercase text-lg text-gray-500 font-semibold">{crew.role}</h3>
                    <h4 className="uppercase text-2xl md:text-3xl my-3">{crew.name}</h4>
                    <p className="text-sm md:text-base w-full text-center">{crew.bio}</p>
                </div>
            </article>
        </div>
    )
}

export default Crews;