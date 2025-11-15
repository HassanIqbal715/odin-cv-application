import { useState } from "react";
import FormItem from "./FormItem";
import FormHeading from "./FormHeading";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormSwitch from "./FormSwitch";
import FormDescription from "./FormDescription";

export default function FormWork({ data, setData }) {
    const [activeKey, setActiveKey] = useState(-1);
    const [activeDate, setActiveDate] = useState(false);
    
    function handleDateSwitch() {
        if (activeDate == true) {
            if (activeIndex == -1)
                return;

            setData(prev => {
                const updatedWork = [...prev.work];
                updatedWork[activeIndex] = {
                    ...updatedWork[activeIndex], dateEnd: ""
                };

                return { ...prev, work: updatedWork };
            });
        }
        setActiveDate(!activeDate);
    }

    function updateActiveKey(key) {
        setActiveKey((prev) => (key));

        const index = data.work.findIndex(item => item.key === key);

        if (data.work[index].dateEnd != "") {
            setActiveDate((prev) => (true));
        }
        else {
            setActiveDate((prev) => (false));
        }
    }

    function addWork() {
        setData({...data, work: [...data.work, {
            key: crypto.randomUUID(),
            title: "",
            dateStart: "",
            dateEnd: "",
            description: ""
        }]});
    }

    function deleteWork() {
        setData(prev => {
            let updatedWork = [...prev.work];
            updatedWork = updatedWork.filter((item) => item.key != activeKey);

            return {...prev, work: updatedWork};
        });
    }

    let activeIndex = data.work.findIndex((item) => item.key === activeKey);
    console.log(activeIndex);

    function input(key, value) {
        if (activeIndex == -1)
            return;

        setData(prev => {
            const updatedWork = [...prev.work];
            updatedWork[activeIndex] = {
                ...updatedWork[activeIndex], [key]: value
            };

            return { ...prev, work: updatedWork };
        });
    }

    return (
        <div className="form-body">
            <FormHeading text="All Works"/>
            {data.work.map((item, index) => {
                return (
                    <FormItem key={item.key} id={item.key} title={item.title} 
                    dateStart={item.dateStart} setActive={updateActiveKey}
                    dateEnd={item.dateEnd} description={item.description} 
                    isActive={activeKey == item.key}/>
                );
            })}
            {data.work.length < 2 && 
                <FormButton text="Add Work" onClick={addWork}/>
            }
            {activeIndex != -1 &&
                <>
                    <FormHeading text="Edit Work"/>
                    <FormInput text="Job Title" type="text" setData={input}
                        id="title" value={data.work[activeIndex].title}/>
                    <FormInput text="Start Date" type="date" setData={input}
                        id="dateStart" value={data.work[activeIndex].dateStart}
                    />
                    <FormSwitch text="Have you stopped working here?"
                        handleClick={handleDateSwitch} active={activeDate} />
                    {activeDate &&
                        <FormInput text="End Date" type="date" setData={input}
                            id="dateEnd" value={data.work[activeIndex].dateEnd}
                        />
                    }
                    <FormDescription text="Description" type="text" 
                    id="description" setData={input}
                    value={data.work[activeIndex].description}/>
                    <FormButton text="Delete Work" onClick={deleteWork} />
                </>
            }
        </div>
    );
}