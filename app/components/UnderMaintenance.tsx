const UnderMaintenance = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">We&apos;ll Be Back Soon!</h1>
            <p className="text-lg max-w-md">
                Our site is currently undergoing maintenance to improve your experience.
                Please check back later. We appreciate your patience!
            </p>
            <div className="mt-6 text-sm text-gray-500">&copy; {new Date().getFullYear()} ColossalCodes</div>
        </div>
    );
};

export default UnderMaintenance;
