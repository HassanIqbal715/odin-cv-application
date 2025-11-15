import FormInput from "./FormInput";
import FormHeading from "./FormHeading";
import FormDescription from "./FormDescription";

export default function FormPersonal({ data, setData }) {
    function input(key, value) {
        setData(prev => {
            return { ...prev, [key]: value };
        });
    }

    return (
        <div className="form-body">
            <FormHeading text="Introduction" />

            <div className="form-input-container">
                <FormInput text="First Name" type="text" setData={input}
                    id="firstName" value={data.firstName}/>
                <FormInput text="Last Name" type="text" setData={input}
                    id="lastName" value={data.lastName}/>
            </div>
            <FormInput text="Occupation" type="text" setData={input} 
                id="occupation" value={data.occupation}/>
            <FormDescription text="Describe Yourself" type="text" 
                setData={input} id="summary" value={data.summary} />

            <FormHeading text="Contact" />

            <FormInput text="Contact Number" type="number" setData={input} 
                id="contact"  value={data.contact}/>
            <FormInput text="Email" type="email" setData={input} 
                id="email"  value={data.email}/>

            <FormHeading text="Address" />

            <FormInput text="Country" type="text" setData={input} 
                id="country" value={data.country}/>
            <FormInput text="City" type="text" setData={input} 
                id="city" value={data.city}/>
            <div className="form-input-container">
                <FormInput text="Area" type="text" setData={input} 
                id="area" value={data.area}/>
                <FormInput text="Postal Code" type="number" setData={input} 
                id="postalCode" value={data.postalCode}/>
            </div>
        </div>
    );
}