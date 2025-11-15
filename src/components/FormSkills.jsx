import FormHeading from "./FormHeading";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

export default function FormSkills({ data, setData }) {
    function addSkill() {
        setData({...data, skills : [...data.skills, ""]});
    }

    console.log(data);

    function input(id, value) {
        setData(prev => {
            const updatedSkills = [...prev.skills];
            updatedSkills[id] = value;
            return {...prev, skills: updatedSkills};
        });
    }

    return (
        <div className="form-body">
            <FormHeading text="All Skills" />
            {data.skills.length > 0 &&
                data.skills.map((skill, i) => {
                    return (
                        <FormInput text={`Skill ${i+1}`} type="text" 
                        setData={input} id={i} value={skill} />
                    );
                })
            }
            <FormButton text="Add Skill" onClick={addSkill} />
        </div>
    );
}