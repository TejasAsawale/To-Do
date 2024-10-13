import React, { useState } from 'react';

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const handleNotificationsToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    return (
        <div className="settings-page">
        <h2>Settings</h2>
        <div className="setting-option">
            <label>
            <input type="checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
            Dark Mode
            </label>
        </div>
        <div className="setting-option">
            <label>
            <input type="checkbox" checked={notificationsEnabled} onChange={handleNotificationsToggle} />
            Enable Notifications
            </label>
        </div>
        </div>
    );
};

export default Settings;
