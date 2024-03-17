
import React from 'react'; 
import './style.css';

const Dashboard = () => {
    return (
        <div className="header">  
            {/* Welcome Banner */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <img src="/profile-placeholder.jpg" alt="Profile" className="w-10 h-10 rounded-full mr-4" /> 
                    <h1 className="text-2xl font-bold">Welcome, User!</h1>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="center">
                <div className="row">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
                <div className="row">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
