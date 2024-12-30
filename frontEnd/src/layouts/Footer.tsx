import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="he-foo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a 
              href="https://github.com/LudmiM/" 
              target="_blank" 
              rel="noopener noreferrer" 

              className="hover-icon"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ludmilaml/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover-icon"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:ludmila.mloza@gmail.com" 
              className="hover-icon"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <p className="text-sm text-center">
            &copy; 2024 Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

