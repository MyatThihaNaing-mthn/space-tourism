import Navbar from "./Navbar";

function MainContainer({children}){
    return(
        <div className="w-full h-screen">
            <Navbar/>
            {children}
        </div>
    )
}

export default MainContainer;