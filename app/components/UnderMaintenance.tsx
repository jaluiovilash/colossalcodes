const UnderMaintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center p-6">
      {/* Animated GIF */}
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjl4b2xxMzhveTNjbGtyb3lsb3pqbHp4bmg2dGRnaHRxcjlmZTV2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yph35Uf4OQAVxpSJTe/giphy.gif"
        alt="Maintenance in progress"
        className="w-40 h-40 mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-transparent bg-clip-text">
        🚧 We&apos;ll Be Back Soon!
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg max-w-md mb-6">
        Our site is currently undergoing scheduled maintenance. We’ll be back in{" "}
        <span className="font-bold text-orange-400">15 days</span> with exciting
        updates! ✨
      </p>

      {/* Gradient line */}
      <div className="h-1 w-40 mx-auto bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full mb-6"></div>

      {/* Footer */}
      <div className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-transparent bg-clip-text font-semibold">
          ColossalCodes
        </span>{" "}
        by jaluiovilash
      </div>
    </div>
  );
};

export default UnderMaintenance;
