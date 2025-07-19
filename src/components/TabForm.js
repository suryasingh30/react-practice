import { Component, useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

export const TabForm = () => {

    const [profileIsOpen, setIsProfileOpen] = useState(1);
    const [interestIsOpen, setIsInterestOpen] = useState(0);
    const [settingIsOpen, setIsSettingOpen] = useState(0);

    function profileClick(){
        setIsSettingOpen(0);
        setIsInterestOpen(0);
        setIsProfileOpen(1);
    }

    function interestClick(){
        setIsProfileOpen(0);
        setIsSettingOpen(0);
        setIsInterestOpen(1);
    }

    function settingClick(){
        setIsProfileOpen(0);
        setIsInterestOpen(0);
        setIsSettingOpen(1);
    }

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            name: "Profile",
            component: Profile
        },
        {
            name: "Interest",
            component: Interest
        },
        {
            name: "Setting",
            component: Setting
        }
    ];

    const ActiveTabComponent = tabs[activeTab].component;
    const [data, setData] = useState(
        {
            name: "name",
            age: "age",
            notification: "0",
            verify: ""
        }
    );

    const handleChange = (e) => {
        const {name , value} = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = () => {
        console.log(data.name);
        console.log(data.age);
        console.log(data.notification);
        console.log(data.verify);
    }

    return (
        // <>
        //     <h3>TabForm</h3>
        //     <div>
        //         <button onClick={profileClick}>Profile</button>
        //         <button onClick={interestClick}>Interest</button>
        //         <button onClick={settingClick}>Setting</button>
        //     </div>

        //     {profileIsOpen == 1 ? <Profile/> : <></>}
        //     {interestIsOpen == 1 ? <Interest/> : <></>}
        //     {settingIsOpen == 1 ? <Setting/> : <></>}
        // </>
    <>
        <div>
            {tabs.map((t, index) => (
                <button
                    key={index}
                    className="heading"
                    onClick={() => setActiveTab(index)}
                >
                    {t.name}
                </button>
            ))}
        </div>
        <div>
            <ActiveTabComponent data={data} handleChange={handleChange} submit={onSubmit}/>
        </div>
        <div>
            {activeTab > 0 && <button onClick={()=>setActiveTab(prev => prev-1)}>Prev</button>}
            {activeTab < tabs.length -1 && <button onClick={()=>setActiveTab(prev => prev+1)}>Next</button>}
        </div>
        <div>
            {activeTab+1 === tabs.length && <button onClick={onSubmit}>Submit</button>}
        </div>
    </>
    )
}