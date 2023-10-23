import React from 'react';

function NavbarComponent() {
    return (
        <nav className="bg-gradient-to-t from-blue-800 via-indigo-700 to-gray-700 p-7">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <img className='object-scale-down w-40' src='/images/livechecklogo1.png' alt="Live Check"></img>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;