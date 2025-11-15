import FormHeaderItem from "./FormHeaderItem";
import personSVG from "../assets/icons/person.svg";
import schoolSVG from "../assets/icons/school.svg";
import workSVG from "../assets/icons/work.svg";

import "../styles/FormHeader.css";

export default function FormHeader({ activeSection, setActiveSection }) {
    const headerItems = [
        {key: "Personal Info", iconLink: personSVG}, 
        {key: "Education", iconLink: schoolSVG}, 
        {key: "Work Experience", iconLink: workSVG}
    ];
    
    function handleClick(key) {
        if (key === activeSection)
            return;
        setActiveSection(key);
    }

    return (
        <div className="form-header">
            {headerItems.map((item, i) => (
                <FormHeaderItem 
                    key={item.key}
                    text={item.key}
                    active={item.key === activeSection}
                    imageLink={item.iconLink}
                    onClick={() => handleClick(item.key)}
                    style={{
                        borderTopLeftRadius: i === 0 ? "32px" : 0,
                        borderBottomLeftRadius: i === 0 ? "32px" : 0,
                        borderTopRightRadius: i === 2 ? "32px" : 0,
                        borderBottomRightRadius: i === 2 ? "32px" : 0,
                    }}
                />
            ))}
        </div>
    );
}