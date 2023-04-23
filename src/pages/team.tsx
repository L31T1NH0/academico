import React from "react";
import { Link } from "react-router-dom";
import candidatos from "../assets/base/data.json";

interface Candidato {
  foto? : string;
  name: string;
  preview?: string;
}

const Candidatos: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 gap-4 my-8 mx-4 ">
      {candidatos.CandidatosECOA.map((candidato: Candidato, index: number) => (
        <Link key={index} to={`/candidato/${candidato.name}`}>
          <div className="transition-all cursor-pointer border rounded flex md:flex-row md:items-start">
            <img
              src={candidato.foto}
              alt={candidato.name}
              width={36}
              height={36}
              className="w-32 h-32 max-sm:w-24 max-sm:h-24 rounded-l md:mr-4 shadow-inner"
            />
            <div className="flex-col grid justify-center max-sm:mx-4 sm:mx-2 lg:mx-0">
              <h3 className="text-xl sm:text-lg font-bold text-zinc-950 ">
                {candidato.name}
              </h3>
              <p className="text-zinc-800 line-clamp-4 sm:line-clamp-none lg:line-clamp-4 break-words mr-2 max-sm:text-xs sm:text-xs lg:text-base">
                {candidato.preview}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Candidatos;
