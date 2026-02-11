export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background flashing image */}
      <div className="bg-flash" aria-hidden />

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: 24,
        }}
      >
        <div style={{ maxWidth: 720, width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            Sorry
          </div>

          <p
            style={{
              marginTop: 12,
              fontSize: 16,
              lineHeight: 1.6,
              opacity: 0.8,
            }}
          >
            I’m working on this. Check back soon.
          </p>

          <div
            style={{
              marginTop: 24,
              padding: 16,
              borderRadius: 12,
              border: "1px solid rgba(0,0,0,0.12)",
              backdropFilter: "blur(2px)",
            }}
          >
            <div style={{ fontSize: 14, opacity: 0.75 }}>Status</div>
            <div style={{ marginTop: 6, fontSize: 16 }}>
              github.com/joelmathewsssss
            </div>
          </div>

          <div style={{ marginTop: 28, fontSize: 13, opacity: 0.6 }}>
            © {new Date().getFullYear()} Joel Mathews
          </div>
        </div>
      </div>
    </main>
  );
}
