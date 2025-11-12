export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Your Name. Built with React & Vite.</p>
      </div>
    </footer>
  );
}

