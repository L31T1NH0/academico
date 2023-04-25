import React from "react";
import { Link } from "react-router-dom";
import candidatos from "../assets/base/data.json";

interface Candidato {
  foto?: string;
  name: string;
  preview?: string;
}

const Candidatos: React.FC = () => {
  return (
    <div>
      <button className="mx-4 mt-4">
        <Link to={"/"}>
          <img
            className="hover:scale-105 rounded-lg p-1 transition-all lg:w-14 lg:h-14 sm:w-10 max-sm:w-8 sm:h-10 max-sm:h-8"
            src={candidatos.icon}
            alt="icon"
          />
        </Link>
      </button>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4 my-2 mx-4">
        {candidatos.CandidatosECOA.map(
          (candidato: Candidato, index: number) => (
            <Link key={index} to={`/candidato/${candidato.name}`}>
              <div
                className="transition-all cursor-pointer border border-white sm:border-zinc-300 rounded flex md:flex-row 
            hover:bg-zinc-200/40 md:items-start"
              >
                <img
                  src={candidato.foto}
                  alt={candidato.name}
                  width={36}
                  height={36}
                  className="w-32 h-32 max-sm:w-24 max-sm:h-full rounded-l md:mr-4 shadow-inner"
                />
                <div className="flex-col grid justify-center max-sm:mx-4 sm:mx-2 lg:mx-0">
                  <a className="text-xl max-sm:text-xl font-semibold text-zinc-950">
                    {candidato.name}
                  </a>

                  <p className="text-zinc-950 max-sm:line-clamp-3  lg:line-clamp-4 break-words mr-2 max-sm:text-sm sm:text-xs lg:text-base">
                    {candidato.preview}
                  </p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Candidatos;
