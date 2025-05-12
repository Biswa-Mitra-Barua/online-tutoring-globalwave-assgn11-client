import React from 'react';

const Faq = () => {
    return (
        <div className="my-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

            <div className="space-y-4">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How do I enroll in a course?
                    </div>
                    <div className="collapse-content">
                        <p>Just click on the course you’re interested in and press the “Enroll Now” button. You’ll need to log in or sign up first.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Are the courses free or paid?
                    </div>
                    <div className="collapse-content">
                        <p>We offer both free and premium courses. Each course page will clearly show the pricing details.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Do I get a certificate after completion?
                    </div>
                    <div className="collapse-content">
                        <p>Yes! You’ll receive a certificate of completion once you finish the course and pass the final assessment.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;