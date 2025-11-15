import { useState } from "react";
import FormHeading from "./FormHeading";
import FormItem from "./FormItem";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormSwitch from "./FormSwitch";

export default function FormEducation({ data, setData }) {
    const [activeKey, setActiveKey] = useState(-1);
    const [activeDate, setActiveDate] = useState(false);
    
    function handleDateSwitch() {
        if (activeDate == true) {
            if (activeIndex == -1)
                return;

            setData(prev => {
                const updated = [...prev.education];
                updated[activeIndex] = {
                    ...updated[activeIndex], dateEnd: "", hasGraduated: false
                };

                return { ...prev, education: updated };
            });
        }
        else {
            if (activeIndex == -1)
                return;

            setData(prev => {
                const updated = [...prev.education];
                updated[activeIndex] = {
                    ...updated[activeIndex], hasGraduated: true
                };

                return { ...prev, education: updated };
            });
        }

        setActiveDate(!activeDate);
    }

    function addInstitute() {
        setData({...data, education: [...data.education, {
            key: crypto.randomUUID(),
            title: "",
            name: "",
            dateStart: "",
            dateEnd: "",
            hasGraduated: false,
            description: ""
        }]});
    }

    function deleteInstitute() {
        setData(prev => {
            let updated = [...prev.education];
            updated = updated.filter((item) => item.key != activeKey);
            return({...prev, education: updated});
        });
    }

    const activeIndex = data.education.findIndex(
        (item) => item.key === activeKey);

    function input(key, value) {
        if (activeIndex == -1)
            return;

        setData(prev => {
            const updated = [...prev.education];
            updated[activeIndex] = {
                ...updated[activeIndex], [key]: value
            };

            return { ...prev, education: updated };
        });
    }

    function updateActiveKey(key) {
        setActiveKey((prev) => (key));
        
        const index = data.education.findIndex(item => item.key === key);

        if (data.education[index].hasGraduated == true) {
            setActiveDate((prev) => (true));
        }
        else {
            setActiveDate((prev) => (false));
        }
    }

    return (
        <div className="form-body">
            <FormHeading text="All Institutes" />
            {data.education.map((item) => {
                return (
                    <FormItem title={item.title} dateStart={item.dateStart}
                    dateEnd={item.dateEnd} description={item.description}
                    hasGraduated={item.hasGraduated} id={item.key}
                    isActive={activeKey == item.key} setActive={updateActiveKey}
                    institute={item.name} key={item.key}/>
                );
            })}

            {data.education.length < 4 &&
                <FormButton text="Add Institute" onClick={addInstitute}/>
            }

            {activeIndex != -1 &&
                <>
                    <FormHeading text="Edit Institute" />

                    <FormInput text="Degree" type="text" setData={input} 
                    id="title" value={data.education[activeIndex].title} />
                    <FormInput text="Institute Name" type="text" setData={input} 
                    id="name" value={data.education[activeIndex].name} />
                    <FormInput text="Start Date" type="date" setData={input}
                    id="dateStart" value={data.education[activeIndex].dateStart}
                    />
                    
                    <FormSwitch text="Have you graduated?"
                    handleClick={handleDateSwitch} active={activeDate} />
                    {activeDate &&
                        <>
                            <FormInput text="End Date" type="date" 
                            setData={input} id="dateEnd" 
                            value={data.education[activeIndex].dateEnd} />
                            <FormInput text="Graduated with..." type="text" 
                            setData={input} id="description" 
                            value={data.education[activeIndex].description} />
                        </>
                    }
                    <FormButton text="Delete Institute" 
                        onClick={deleteInstitute}/>
                </>
            }
        </div>
    );
}