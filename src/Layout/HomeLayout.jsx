import React from 'react';
import Banner from '../Components/Banner/Banner';
import Stats from '../Components/Stats/Stats';
import LanguageCategory from '../Components/LanguageCategory/LanguageCategory';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto my-10 space-y-10'>
            <section>
                <Banner></Banner>
            </section>

            {/* Stats */}
            <section>
                <Stats></Stats>
            </section>

            {/* Language Category */}
            <section>
                <LanguageCategory></LanguageCategory>
            </section>

        </div>
    );
};

export default HomeLayout;