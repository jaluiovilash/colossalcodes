/* eslint-disable @next/next/no-img-element */
const UnderMaintenance = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-center px-4 py-8 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.15),transparent_70%)] animate-pulse"></div>

      {/* Neon grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(#ff880025 1px, transparent 1px),
            linear-gradient(90deg, #ff880025 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* GIF */}
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjl4b2xxMzhveTNjbGtyb3lsb3pqbHp4bmg2dGRnaHRxcjlmZTV2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yph35Uf4OQAVxpSJTe/giphy.gif"
        alt="System reboot in progress"
        className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-6 z-10 drop-shadow-[0_0_20px_rgba(255,120,0,0.4)]"
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-transparent bg-clip-text tracking-wide z-10">
        ⚡ Epic Launch Incoming
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl md:max-w-3xl mb-6 z-10 leading-relaxed">
        We’re upgrading the system to deliver a more powerful and advanced
        ColossalCodes platform.{" "}
      </p>

      {/* Divider */}
      <div className="h-1 w-32 sm:w-40 md:w-52 mx-auto bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full mb-8 opacity-80"></div>

      {/* Button */}
      <a
        href="https://youtube.com/@colossalcodes"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-4 py-2 
          sm:px-6 sm:py-3 
          text-sm sm:text-base md:text-lg text-gray-900
          rounded-xl font-bold
          bg-gradient-to-r from-orange-400 to-orange-600 
          shadow-[0_0_15px_rgba(255,120,0,0.6)]
          hover:shadow-[0_0_25px_rgba(255,120,0,0.9)]
          transition-all duration-300 z-10
        "
      >
        Subscribe us on YouTube
      </a>

      {/* Footer */}
      <div className="text-xs sm:text-sm text-gray-500 mt-10 z-10">
        &copy; {new Date().getFullYear()}{" "}
        <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-transparent bg-clip-text font-semibold">
          ColossalCodes
        </span>{" "}
        — Rebooting for greatness.
      </div>
    </div>
  );
};

export default UnderMaintenance;
