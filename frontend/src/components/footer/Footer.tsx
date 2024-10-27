import { IoLogoLinkedin } from "react-icons/io5";

export const Footer = () => {
  const devs = [
    {
      name: "Alejo Colazurda",
      link: "https://www.linkedin.com/in/alejo-colazurda",
    },
    { name: "David Yénez", link: "https://www.linkedin.com/in/david--yanez/" },
    {
      name: "Diego Cabré",
      link: "https://www.linkedin.com/in/diegoantoniocabreperrone/",
    },
    { name: "Luis Delgado", link: "https://linkedin.com/in/ledg555" },
    {
      name: "Alexander Machicado",
      link: "https://www.linkedin.com/in/machicadogomezalexander/",
    },
    {
      name: "Antonio Ludeña",
      link: "https://www.linkedin.com/in/antonioluduenabereziuk/",
    },
    {
      name: "José Angel Suárez",
      link: "https://www.linkedin.com/in/angel-suarez-232744210",
    },
    {
      name: "Carlos Valencia",
      link: "https://www.linkedin.com/in/carlosvalencia07/",
    },
    {
      name: "Agustin Moldavsky",
      link: "https://github.com/AgustinMolda",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">SmartStore</h2>
            <p className="text-gray-400">
              Los mejores productos tecnológicos al alcance de tus manos.
              Encuentra dispositivos de última generación y ofertas exclusivas
              solo aquí en SmartStore.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Navegación</h2>
            <ul>
              <li className="mb-2">
                <a
                  href="/products"
                  className="hover:text-primario transition-colors"
                >
                  Productos
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/categories"
                  className="hover:text-primario transition-colors"
                >
                  Categorías
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/offers"
                  className="hover:text-primario transition-colors"
                >
                  Ofertas del mes
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about"
                  className="hover:text-primario transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/help"
                  className="hover:text-primario transition-colors"
                >
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-center">Devs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {devs.map((dev, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center sm:justify-start mb-4"
                >
                  <a
                    href={dev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-primario transition-colors"
                  >
                    <span>{dev.name}</span>
                    <IoLogoLinkedin className="h-6 w-6" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 SmartStore. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
