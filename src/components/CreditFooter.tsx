export default function CreditFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(43, 43, 41, 0.12)",
        padding: "28px 24px 40px",
        textAlign: "center",
        background: "rgb(251, 250, 246)",
      }}
    >
      <a
        href="https://parsanaderi-dev.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "rgba(43, 43, 41, 0.72)",
          fontFamily: "'GT Standard L Regular', 'Inter', sans-serif",
          fontSize: "13px",
          letterSpacing: "0.2px",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        Made by ParsaNaderi
      </a>
    </footer>
  );
}