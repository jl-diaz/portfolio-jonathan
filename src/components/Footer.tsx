
const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-gray-900 bg-black/50">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Jonathan Diaz. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
