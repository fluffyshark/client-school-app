import React, { useState, useEffect } from 'react';

type Props = {
    setLoggedIn: (isLoggedIn: boolean) => void;
};

const InactivityDetector = ({ setLoggedIn }: Props) => {
    const inactivityThreshold = 5000; // 5 minutes in milliseconds

    const checkForInactivity = () => {
        const expireTime = localStorage.getItem('expireTime');

        if (expireTime && Number(expireTime) < Date.now()) {
            console.log('User is inactive for too long. Logging out...');
            setLoggedIn(false);
        }
    };

    const updateExpireTime = () => {
        const expireTime = (Date.now() + inactivityThreshold).toString();
        localStorage.setItem('expireTime', expireTime);

        // After updating the expireTime, also set the user as logged in
        setLoggedIn(true);
    };

    useEffect(() => {
        const checkInterval = 5000; // Check for inactivity every 5 seconds

        const inactivityCheck = setInterval(checkForInactivity, checkInterval);

        return () => {
            clearInterval(inactivityCheck);
        };
    }, []);

    useEffect(() => {
        updateExpireTime();

        window.addEventListener('click', updateExpireTime);
        window.addEventListener('keypress', updateExpireTime);
        window.addEventListener('scroll', updateExpireTime);
        window.addEventListener('mousemove', updateExpireTime);

        return () => {
            window.removeEventListener('click', updateExpireTime);
            window.removeEventListener('keypress', updateExpireTime);
            window.removeEventListener('scroll', updateExpireTime);
            window.removeEventListener('mousemove', updateExpireTime);
        };
    }, []);

    return <>{/* You can render additional content here if needed */}</>;
};

export default InactivityDetector;
