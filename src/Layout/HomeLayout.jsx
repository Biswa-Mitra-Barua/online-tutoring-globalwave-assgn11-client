import React from 'react';
import Banner from '../Components/Banner/Banner';
import Stats from '../Components/Stats/Stats';
import LanguageCategory from '../Components/LanguageCategory/LanguageCategory';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';
import StudentTestimonials from '../Components/StudentTestimonials/StudentTestimonials';

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

            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>

            <section>
                <StudentTestimonials></StudentTestimonials>
            </section>

        </div>
    );
};

export default HomeLayout;