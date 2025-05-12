
const StudentTestimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            feedback:
                "This platform completely transformed my learning experience. The tutors are exceptional, and the flexible schedules made it easy to learn at my own pace.",
            image: "/src/assets/student1.jpg",
            rating: 5,
        },
        {
            name: "Michael Lee",
            feedback:
                "I loved the interactive classes and practical assignments. The certification helped me secure a new job in my field. Highly recommend it!",
            image: "/src/assets/student2.jpeg",
            rating: 4.5,
        },
        {
            name: "Aisha Khan",
            feedback:
                "The course materials are comprehensive and easy to follow. The global accessibility allowed me to connect with people worldwide.",
            image: "/src/assets/student3.avif",
            rating: 5,
        },
        {
            name: "Daniel Roberts",
            feedback:
              "The personalized attention I received made a huge difference in my learning journey. The tutors are truly dedicated, and the interactive tools kept me engaged throughout the course.",
            image: "/src/assets/student4.avif",
            rating: 4.8,
          }
    ];

    return (
        <section className="bg-gradient-to-br from-gray-500 to-gray-200 py-16 rounded-md mt-20 mb-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    "What Our Students Say"
                </h2>
                <p className="text-center text-gray-800 mb-10">
                    Hear from our students about their experiences and achievements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-2 border-stone-300"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-24 h-24 border-2 border-gray-500 rounded-full mx-auto mb-4 mt-3"
                            />
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                "{testimonial.feedback}"
                            </p>
                            <div className="text-yellow-400">
                                {"★".repeat(Math.floor(testimonial.rating)) +
                                    (testimonial.rating % 1 ? "☆" : "")}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentTestimonials;
