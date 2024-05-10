import { useState } from "react";
import getImageUrl from "../utils";

function Destination() {
    const moonImage = getImageUrl("/planets/image-moon.png");
    const marsImage = getImageUrl("/planets/image-mars.png");
    const europaImage = getImageUrl("/planets/image-europa.png");
    const titanImage = getImageUrl("/planets/image-titan.png");

    let plantDetailsSection;

    const [currentPlanet, setCurrentPlanet] = useState("Moon");
    let planetImage;
    if (currentPlanet === "Moon") {
        planetImage = moonImage;

        plantDetailsSection = <PlanetDetails name={`MOON`}
            description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
            distance={`384,400 km`}
            time={`4 days`}
        />
    }
    else if (currentPlanet === "Mars") {
        planetImage = marsImage;

        plantDetailsSection = <PlanetDetails name={`MARS`}
            description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
            distance={`225 mil. km`}
            time={`9 months`}
        />
    }
    else if (currentPlanet === "Europa") {
        planetImage = europaImage;

        plantDetailsSection = <PlanetDetails name={`EUROPA`}
            description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
            distance={`628 mil. km`}
            time={`3 years`}
        />
    }
    else if (currentPlanet === "Titan") {
        planetImage = titanImage;

        plantDetailsSection = <PlanetDetails name={`TITAN`}
            description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
            distance={`1.6 bil. km`}
            time={`7 years`}
        />
    }

    return (
        <section className={`home h-screen w-full bg-no-repeat overflow-auto text-white bg-center bg-cover xs:bg-destination-mobile sm:bg-destination-tablet md:bg-destination-desktop`}>
            <div className="flex h-full flex-col pt-20 sm:pt-32 items-center px-8 pb-4">
                <h3 className=" pb-8 text-xl font-bold">PICK YOUR DESTINATION</h3>
                <div className="flex h-full flex-col lg:flex-row items-center">
                    <img src={planetImage} alt={currentPlanet} className=" w-11/20 md:w-8/12" />
                    <article className="planet-details w-full flex flex-col items-center mt-6 grow shrink">
                        <div className="button-tab flex px-2 mb-5 grow shrink" >
                            <PlanetButton name="Moon" setPlanet={setCurrentPlanet} />
                            <PlanetButton name="Mars" setPlanet={setCurrentPlanet} />
                            <PlanetButton name="Europa" setPlanet={setCurrentPlanet} />
                            <PlanetButton name="Titan" setPlanet={setCurrentPlanet} />
                        </div>
                        {plantDetailsSection}
                    </article>
                </div>
            </div>
        </section>
    )
}

function PlanetButton({ name, setPlanet }) {

    const clickHandler = () => {
        setPlanet(name);
    }
    return (
        <button className="pl-2 pr-6 py-4 font-bold text-lg text-center"
            onClick={clickHandler}>{name}</button>
    )
}

function PlanetDetails({ name, description, distance, time }) {
    return (
        <div className="flex flex-col items-center grow shrink">
            <h1 className="text-7xl">{name}</h1>
            <p className="w-10/12 text-center grow shrink">{description}</p>
            <div className="divider-line w-full h-px bg-slate-600 mx-8 my-8">

            </div>
            <div className=" w-full text-left flex grow shrink">
                <div className=" w-full flex flex-col px-2 gap-1 items-center">
                    <span className=" uppercase text-sm">AVG DISTANCE </span>
                    <span className=" font-bold text-lg">{distance}</span>
                </div>
                <div className=" w-full flex flex-col px-2 gap-1 items-center">
                    <span className=" uppercase text-sm">EST. TRAVEL TIME </span>
                    <span className="font-bold text-lg">{time}</span>
                </div>
            </div>
        </div>
    )
}

export default Destination;