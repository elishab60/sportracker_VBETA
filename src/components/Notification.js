// components/Notification.js
import React from 'react';

const Notification = ({ message }) => (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow-md">
        {message}
    </div>
);

export default Notification;