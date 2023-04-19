import React from "react";
import { Link } from "react-router-dom";
import candidatos from "../assets/base/data.json";

interface Candidato {
  foto: string;
  name: string;
  preview?: string;
  proposta: string;
  id?: string;
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
                width={36}
                height={36}
                className="w-32 h-32 rounded-l  md:mr-4 shadow-inner"
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
