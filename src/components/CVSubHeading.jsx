import { convertDate } from "../utils/utils";

export default function CVSubheading({ title, dateStart, dateEnd }) {
    const fStDate = (dateStart && dateStart != "") ? convertDate(dateStart) :"";
    let fEdDate = "Present";
    if (dateEnd != "") {
        fEdDate = convertDate(dateEnd);
    }

    return (
        <div className="section-subheading">
            <span>{title}</span>
            <span>{fStDate} - {fEdDate}</span>
        </div>
    );
}