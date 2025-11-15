import FormHeaderItem from "./FormHeaderItem";
import "../styles/FormHeader.css";

export default function FormHeader({ activeSection, setActiveSection }) {
    const headerItems = [
        {key: "Personal Info", iconLink: "/src/assets/icons/person.svg"}, 
        {key: "Education", iconLink: "/src/assets/icons/school.svg"}, 
        {key: "Work Experience", iconLink: "/src/assets/icons/work.svg"},
        {key: "Skills", iconLink: "/src/assets/icons/skill.svg"}
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
                        borderTopRightRadius: i === 3 ? "32px" : 0,
                        borderBottomRightRadius: i === 3 ? "32px" : 0,
                    }}
                />
            ))}
        </div>
    );
}