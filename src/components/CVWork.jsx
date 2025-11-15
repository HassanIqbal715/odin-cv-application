import CVHeading from "./CVHeading";
import CVList from "./CVList";
import CVSubheading from "./CVSubHeading";

export default function CVWork(props) {    
    if (props.work.length == 0) {
        return (
            <></>
        );
    }

    return (
        <>
            <CVHeading text="PROFESSIONAL EXPERIENCE" />
            {props.work.map((item, i) => {
                return ( 
                    <div key={i}>
                        <CVSubheading title={item.title}
                        dateStart={item.dateStart} dateEnd={item.dateEnd} />
                        <CVList itemsList={item.description.split("\n")}/>
                    </div>
                )
            })}
        </>
    );
}