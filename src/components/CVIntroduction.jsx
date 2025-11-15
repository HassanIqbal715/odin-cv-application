export default function CVIntroduction(props) {
    function checkProp(key) {
        return props[key] && props[key].trim() != "";
    }

    const cityComma = checkProp("city") && checkProp("area");
    const codeComma = checkProp("postalCode") && (checkProp("city") || 
        checkProp("area"));
    const countryComma = checkProp("country") && (
        checkProp("city") || checkProp("area") || checkProp("postalCode")
    );
    const contactPipe = checkProp("contact") && (
        checkProp("city") || checkProp("area") || checkProp("postalCode") ||
        checkProp("country")
    );
    const emailPipe = checkProp("email") && (
        checkProp("city") || checkProp("area") || checkProp("postalCode") ||
        checkProp("country") || checkProp("contact")
    );

    return (
        <>
            <h1 className="cv-title">{props.firstName} {props.lastName}</h1>
            <h2 className="cv-subtitle">{props.occupation}</h2>
            <span className="cv-text">
                {props.area}
                {(cityComma == true) ? ", " : ""}{props.city}
                {(codeComma == true) ? ", " : ""}{props.postalCode}
                {(countryComma == true) ? ", " : ""}{props.country}
                {(contactPipe == true) ? " | " : ""}{props.contact}
                {(emailPipe == true) ? " | " : ""}{props.email}
            </span>
        </>
    );
}