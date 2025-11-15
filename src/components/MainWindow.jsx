import { useState } from "react";
import FormWindow from "./FormWindow";
import CV from "./CV";
import "../styles/MainWindow.css";

export default function MainWindow() {
    const [data, setData] = useState({work: [], education: [], skills: []});

    return (
        <>
            <div className="background"></div>
            <div className="main-window">
                <FormWindow data={data} setData={setData}/>
                <CV data={data}/>
            </div>
        </>
    );
}