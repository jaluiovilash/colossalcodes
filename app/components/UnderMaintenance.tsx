/* eslint-disable @next/next/no-img-element */
const UnderMaintenance = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-center p-6 overflow-hidden">
      {/* Subtle animated glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.15),transparent_70%)] animate-pulse"></div>

      {/* Neon grid lines */}
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

      {/* Animated GIF */}
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjl4b2xxMzhveTNjbGtyb3lsb3pqbHp4bmg2dGRnaHRxcjlmZTV2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yph35Uf4OQAVxpSJTe/giphy.gif"
        alt="System reboot in progress"
        className="w-44 h-44 mb-6 relative z-10 drop-shadow-[0_0_20px_rgba(255,120,0,0.4)]"
      />

      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-transparent bg-clip-text tracking-wide z-10">
        ⚡ Epic Launch Incoming
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg max-w-2xl mb-6 z-10 leading-relaxed">
        Our system is undergoing a deep rebuild to prepare for the next
        generation of learning and engineering tools. A more advanced, more
        capable ColossalCodes is being assembled behind the scenes.{" "}
      </p>

      {/* Neon divider */}
      <div className="h-1 w-52 mx-auto bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full mb-8 opacity-80"></div>

      {/* YouTube CTA */}
      <a
        href="https://youtube.com/@colossalcodes"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 rounded-xl text-black font-bold text-lg
                   bg-gradient-to-r from-orange-400 to-orange-600 
                   shadow-[0_0_15px_rgba(255,120,0,0.6)]
                   hover:shadow-[0_0_25px_rgba(255,120,0,0.9)]
                   transition-all duration-300 z-10"
      >
        Subscribe us on YouTube
      </a>

      {/* Footer */}
      <div className="text-sm text-gray-500 mt-10 z-10">
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
