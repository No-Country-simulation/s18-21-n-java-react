import React from "react";
import Image from "next/image";
import { marcasList } from "@/lib/utils";

export const InifiniteScroll = () => {
  return (
    <div className="relative flex overflow-hidden py-6">
      {/* Contenedor de imágenes con animación */}
      <div className="flex space-x-8 animate-loop-scroll">
        {marcasList.map((marca, index) => (
          <div
            className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 border rounded-xl shadow-lg shadow-purple-300 relative"
            key={`${index}-marca`}
          >
            <Image
              src={marca.url}
              alt={marca.name}
              fill
              objectFit="fill"
              className="max-w-none p-4"
            />
          </div>
        ))}
      </div>

      {/* Duplicado para la animación continua, pero desplazado fuera de la vista */}
      <div
        className="flex space-x-8 animate-loop-scroll"
        style={{ transform: "translateX(100%)" }} // Desplazar el segundo contenedor
        aria-hidden="true"
      >
        {marcasList.map((marca, index) => (
          <div
            className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 border rounded-xl shadow-lg shadow-purple-300 relative"
            key={`${index}-marca-hidden`}
          >
            <Image
              src={marca.url}
              alt={marca.name}
              fill
              objectFit="fill"
              className="max-w-none p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
