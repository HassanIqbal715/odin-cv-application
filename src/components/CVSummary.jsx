import CVHeading from "./CVHeading";

export default function CVSummary(props) {
    if (props.summary && props.summary.trim() != "") {
        return (
            <>
                <CVHeading text="SUMMARY" />
                <div className="summary-text cv-text">{props.summary}</div>
            </>
        );
    }
}
