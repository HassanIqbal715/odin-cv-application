import FormPersonal from "./FormPersonal";
import FormEducation from "./FormEducation";
import FormWork from "./FormWork";
import FormSkills from "./FormSkills";
import "../styles/FormBody.css";

export default function FormBody({ section, data, setData }) {
    if (section === "Personal Info") {
        return (
            <FormPersonal data={data} setData={setData} />
        );
    }
    else if (section === "Education") {
        return (
            <FormEducation data={data} setData={setData} />
        );
    }
    else if (section === "Work Experience") {
        return (
            <FormWork data={data} setData={setData} />
        );
    }
    else {
        return (
            <FormSkills data={data} setData={setData} />
        );
    }
}