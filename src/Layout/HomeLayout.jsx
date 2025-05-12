import Banner from '../Components/Banner/Banner';
import Stats from '../Components/Stats/Stats';
import LanguageCategory from '../Components/LanguageCategory/LanguageCategory';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';
import StudentTestimonials from '../Components/StudentTestimonials/StudentTestimonials';
import Faq from '../Components/Faq/Faq';
import Subscription from '../Components/Subscription/Subscription';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto my-10 space-y-10'>
            <section>
                <Banner></Banner>
            </section>

            <section>
                <Stats></Stats>
            </section>

            <section>
                <LanguageCategory></LanguageCategory>
            </section>

            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>

            <section>
                <StudentTestimonials></StudentTestimonials>
            </section>
            <section>
                <Faq></Faq>
            </section>
            <section>
                <Subscription></Subscription>
            </section>

        </div>
    );
};

export default HomeLayout;