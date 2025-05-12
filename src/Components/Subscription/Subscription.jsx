

const Subscription = () => {
    return (
        <div className="my-16 pb-2 px-4 text-center max-w-xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Stay Updated!</h2>
            <p className="mb-6 text-gray-400">
                Subscribe to our newsletter and never miss a new course or update.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full sm:max-w-xs"
                />
                <button className="btn btn-outline">Subscribe</button>
            </div>
        </div>

    );
};

export default Subscription;