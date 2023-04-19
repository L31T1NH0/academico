import React from "react";
import { Link } from "react-router-dom";
import candidatos from "../assets/base/data.json";

interface Candidato {
  id: string;
  name: string;
  proposta: string;
  foto: string;
  preview?: string;
}

const Candidatos: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-4 my-8 mx-4 max-w-max max-h-max">
      {candidatos.CandidatosG.sort((a, b) => a.name.localeCompare(b.name)).map(
        (candidato: Candidato, index: number) => (
          <Link key={index} to={`/candidato/${candidato.name}`}>
            <div className="transition-all cursor-pointer border rounded flex md:flex-row md:items-start">
              <img
                src={candidato.foto}
                alt={candidato.name}
                className="max-sm:mt-1 max-sm:mx-1
                w-32 h-32 md:w-36 md:h-36 rounded-l md:rounded-r-none max-sm:rounded-r sm:rounded-r  md:mb-0 md:mr-4 shadow-inner"
              />
              <div className="flex flex-col justify-center  max-sm:mx-4">
                <h3 className="text-xl font-bold text-zinc-950 mb-2">
                  {candidato.name}
                </h3>
                <p className="text-zinc-800 line-clamp-4 break-words whitespace-pre-wrap">
                  {candidato.preview}
                </p>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Candidatos;
