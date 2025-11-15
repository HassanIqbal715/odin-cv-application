import { useState } from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import "../styles/FormWindow.css";

export default function FormWindow({ data, setData }) {
    const [activeSection, setActiveSection] = useState("Personal Info");

    return (
        <div className="form-window">
            <FormHeader activeSection={activeSection} 
                setActiveSection={setActiveSection}/>
            <FormBody section={activeSection} data={data} setData={setData}/>
        </div>
    );
}