export default function Footer() {
  return (
    <footer
      className="bg-gray-900 py-8 px-6"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-gray-400 text-sm">
          © 2026 All Rights Reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Powered by{" "}
          <span
            className="font-semibold"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            KQube
          </span>
        </p>
      </div>
    </footer>
  );
}