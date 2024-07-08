import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const StoryPage = () => {
    return (
        <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto p-6 text-center">
                <Header/>
            </div>
            <div className="relative z-10 pb-20">
                <main className="container mx-auto p-6">
                    <h1>Story Page</h1>
                    {/* Ajoutez ici le contenu de votre page Story */}
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export default StoryPage;
