import CVHeading from "./CVHeading";
import CVSubheading from "./CVSubHeading";
import CVText from "./CVText";
import CVList from "./CVList";

export default function CVEducation(props) {
    if (props.education.length == 0) {
        return (
            <></>
        );
    }

    return (
        <>
            <CVHeading text="EDUCATION" />
            {props.education.map((item, i) => {
                return ( 
                    <>
                        <CVSubheading title={item.title} key={i}
                        dateStart={item.dateStart} dateEnd={item.dateEnd} />
                        <CVText text={item.name} />
                        <CVList itemsList={item.description.split("\n")} 
                        preText="Graduated with"/>
                    </>
                )
            })}
        </>
    );
}