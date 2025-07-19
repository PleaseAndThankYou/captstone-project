export default function Footer() {
    return (
      <footer style={{
        backgroundColor: '#222',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
        bottom: 0,
        width: '100%',
        fontSize: '0.9rem'
      }}>
        © {new Date().getFullYear()} Little Lemon - Kody Meta Front-End Dev Capstone Project
      </footer>
    );
  }
