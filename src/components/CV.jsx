import CVIntroduction from "./CVIntroduction";
import CVSummary from "./CVSummary";
import CVEducation from "./CVEducation";
import CVWork from "./CVWork";
import "../styles/CV.css";

export default function CV({ data }) {
    return (
        <div className="CV">
            <CVIntroduction 
                firstName={data.firstName} lastName={data.lastName}
                occupation={data.occupation} postalCode={data.postalCode} 
                city={data.city} area={data.area} country={data.country}
                contact={data.contact} email={data.email}
            />
            <CVSummary summary={data.summary} />
            <CVWork work={data.work} />
            <CVEducation education={data.education} />
        </div>
    );
}