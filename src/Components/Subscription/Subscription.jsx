

const Subscription = () => {
    return (
        <div className="my-16 pb-2 px-4 text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
            <p className="mb-6 text-gray-600">
                Subscribe to our newsletter and never miss a new course or update.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full sm:max-w-xs"
                />
                <button className="btn btn-primary">Subscribe</button>
            </div>
        </div>

    );
};

export default Subscription;