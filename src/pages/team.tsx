import React from "react";
import { Link } from "react-router-dom";
import candidatos from "../assets/base/data.json";

interface Candidato {
  id: string;
  name: string;
  proposta: string;
  foto: string;
}

const Candidatos: React.FC = () => {
  return (
    <div
      className="
        grid 
        sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
        gap-4 my-16 mx-4 max-w-max max-h-48"
    >
      {candidatos.CandidatosG.sort((a, b) => a.name.localeCompare(b.name)).map(
        (candidato: Candidato, index: number) => (
          <Link key={index} to={`/candidato/${candidato.name}`}>
            <div
              className="
                hover:ring hover:ring-emerald-400 rounded text-center 
                p-4 transition-all cursor-pointer border
              "
            >
              <div className="flex items-center">
                <img
                  src={candidato.foto}
                  alt={candidato.name}
                  className="w-24 h-24 rounded mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mx-auto">
                  {candidato.name}
                </h3>
              </div>
              <p className="text-gray-600 line-clamp-4">{candidato.proposta}</p>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Candidatos;
