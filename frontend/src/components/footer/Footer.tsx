import { IoLogoLinkedin } from "react-icons/io5";

export const Footer = () => {
  const devs = [
    { name: "Elisa Lucero", link: "http://www.linkedin.com/in/elilucero", role: "TL" },
    { name: "David Yánez", link: "https://www.linkedin.com/in/david--yanez/", role: "Frontend" },
    { name: "Luis Delgado", link: "https://linkedin.com/in/ledg555", role: "Backend" },
    { name: "Alexander Machicado", link: "https://www.linkedin.com/in/machicadogomezalexander/", role: "Backend" },
    { name: "Angel Suárez", link: "https://www.linkedin.com/in/angel-suarez-232744210", role: "Frontend" },
    { name: "Carlos Valencia", link: "https://www.linkedin.com/in/carlosvalencia07/", role: "Backend" },
    { name: "Agustín Moldavsky", link: "https://github.com/AgustinMolda", role: "Frontend" },
    { name: "Alejo Colazurda", link: "https://www.linkedin.com/in/alejo-colazurda", role: "Frontend" },
  ];

  // Filtrar los devs por rol
  const tlDevs = devs.filter(dev => dev.role === "TL");
  const frontendDevs = devs.filter(dev => dev.role === "Frontend");
  const backendDevs = devs.filter(dev => dev.role === "Backend");

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección de Navegación */}
          <div className="text-center md:text-left ">
            <h2 className="text-xl font-bold mb-4">Navegación</h2>
            <ul className="grid grid-cols-1 gap-4">
              <li className="mb-2">
                <a href="/products" className="p-3 text-center rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  Productos
                </a>
              </li>
              <li className="mb-2">
                <a href="/categories" className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  Categorías
                </a>
              </li>
              <li className="mb-2">
                <a href="/offers" className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  Ofertas del mes
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  Nosotros
                </a>
              </li>
              <li className="mb-2">
                <a href="/help" className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  Ayuda
                </a>
              </li>
            </ul>
          </div>


          {/* Sección de Información */}
          <div>
            <h2 className="text-xl font-bold mb-4">SmartStore</h2>
            <p className="text-gray-400">
              Los mejores productos tecnológicos al alcance de tus manos.
              Encuentra dispositivos de última generación y ofertas exclusivas
              solo aquí en SmartStore.
            </p>
          </div>

          {/* Sección de Integrantes */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-center">Integrantes</h2>
            
            {/* TL */}
            <h3 className="text-m text-center font-semibold mb-2 mt-4 text-gray-300">TL</h3>
            <div className="grid grid-cols-1 gap-4">
              {tlDevs.map((dev, index) => (
                <a
                  key={index}
                  href={dev.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-white"
                >
                  <span className="lg:truncate">{dev.name}</span>
                  <IoLogoLinkedin className="h-6 w-4 ml-2 flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* Frontend */}
            <h3 className="text-m text-center font-semibold mb-2 mt-4 text-gray-300">Frontend</h3>
            <div className="grid grid-cols-1 gap-4">
              {frontendDevs.map((dev, index) => (
                <a
                  key={index}
                  href={dev.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-white"
                >
                  <span className="lg:truncate">{dev.name}</span>
                  <IoLogoLinkedin className="h-6 w-4 ml-2 flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* Backend */}
            <h3 className="text-m text-center font-semibold mb-2 mt-4 text-gray-300">Backend</h3>
            <div className="grid grid-cols-1 gap-4">
              {backendDevs.map((dev, index) => (
                <a
                  key={index}
                  href={dev.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-white"
                >
                  <span className="lg:truncate">{dev.name}</span>
                  <IoLogoLinkedin className="h-6 w-4 ml-2 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de Derechos Reservados */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 SmartStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};