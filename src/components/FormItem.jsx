import { convertDate } from "../utils/utils";

// Used to store information about education and professional experience

export default function FormItem({ title, dateStart, dateEnd, description, 
    hasGraduated, isActive, setActive, id, institute }) {
    
    const fStDate = (dateStart && dateStart != "") ? convertDate(dateStart) :"";
    let fEdDate = "Present";
    if (dateEnd != "") {
        fEdDate = convertDate(dateEnd);
    }
    
    const detailList = description.split("\n");
    
    return (
        <div className={`form-item ${isActive == true ? " active" : ""}`}
            onClick={() => (setActive(id))}>
            <h4 className="form-item-title">{title}</h4>
            <span className="form-item-text">{fStDate} - {fEdDate}</span>
            {institute && institute != "" && (<div>{institute}</div>)}
            {(!hasGraduated || hasGraduated == "") && <ul>
                {detailList.map((item, i) => {
                    if (item.trim() != "") {
                        return (
                            <li key={i}>{item}</li>
                        );
                    }
                })}
            </ul>}
        </div>
    );
}