import dataJson from "../assets/data.json";
import lauchVechilePotrait from "../assets/technology/image-launch-vehicle-portrait.jpg"
import lauchVechileLand from "../assets/technology/image-launch-vehicle-landscape.jpg"
import spacePortPotrait from "../assets/technology/image-spaceport-portrait.jpg"
import spacePortLand from "../assets/technology/image-spaceport-landscape.jpg"
import spaceCapsulePotrait from "../assets/technology/image-space-capsule-portrait.jpg"
import spaceCapsuleLand from "../assets/technology/image-space-capsule-landscape.jpg"
import { useState } from "react";

const technology = dataJson.technology;
function Technology() {

    const [tech, setTech] = useState(technology[0]);
    console.log(tech)
    let techImage;
    if(tech === technology[0]){
        techImage = lauchVechileLand;
    }
    else if(tech === technology[1]){
        techImage = spacePortLand;
    }else if(tech === technology[2]){
        techImage = spaceCapsuleLand;
    }

    return (
        <section className={`destination h-screen w-full bg-no-repeat overflow-auto text-white bg-center bg-cover bg-tech-mobile xs:bg-tech-mobile sm:bg-tech-mobile md:bg-tech-tablet lg:bg-tech-desktop`}>
            <div className="flex h-full flex-col pt-20 sm:pt-40 items-center px-8 pb-4">
                <h1 className=" uppercase text-3xl">Space Launch 101</h1>
                <div className="flex flex-col lg:flex-row justify-center items-center grow bg-center">
                    <img src={techImage} alt="space-tech" className="w-full lg:w-1/2 my-5 grow" />
                    <div className="button-tab flex lg:flex-col gap-4 w-full items-center justify-center lg:items-end lg:pr-4">
                        <TechButton number="1" setTechnology={setTech}
                                            isActive={tech === technology[0]}
                                    
                        />
                        <TechButton number="2" setTechnology={setTech}
                                            isActive={tech === technology[1]}
                        />
                        <TechButton number="3" setTechnology={setTech}
                                            isActive={tech === technology[2]}
                        />
                    </div>
                    <TechDetails tech={tech} />
                </div>
                
            </div>
        </section>
    )
}

function TechButton({ number, setTechnology, isActive}) {
    const index = Number(number) -1 ;
    const clickHandler = () => {
        setTechnology(technology[index]);
        console.log(index);
    }

    let buttonStyle = "border-white bg-transparent"
    if(isActive){
        buttonStyle = "bg-white text-black"
    }
    return (
        <button className={` w-8 h-8 rounded-full border ${buttonStyle}`}
                onClick={clickHandler}>
            {number}
        </button>
    )
}

function TechDetails({tech}) {
    return (
        <div className=" flex flex-col items-center my-6 gap-5">
            <h2 className=" uppercase text-center">the terminology</h2>
            <h3 className=" uppercase text-3xl text-center">{tech.name}</h3>
            <p className=" text-sm text-center leading-6">{tech.description}</p>
        </div>
    )
}

export default Technology;