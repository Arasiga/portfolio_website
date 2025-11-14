export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Alex Rasiga. Built with React & Vite.</p>
      </div>
    </footer>
  );
}

