import React from "react";
import { Link, useParams } from "react-router-dom";
import candidatos from "../assets/base/data.json";

interface Candidato {
  name?: string | null;
  foto: string;
  preview?: string;
  propostas: {
    titulo: string;
    regulamentos: string[];
  }[];
}

const Candidato: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const candidato = candidatos.CandidatosECOA.find(
    candidato => candidato.name === name
  );
  const candidatoPropostas = candidato?.propostas ?? [];

  return (
    <div>
      <Link className="cursor-default" to={"/team"}>
        <button className="bg-zinc-200 hover:scale-105 hover:text-white hover:bg-emerald-300 transition-all rounded-sm w-10 h-10 mx-4 mt-4 relative">
          🡐
        </button>
      </Link>
      <div className="mx-4 my-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="text-center sm:text-left">
            <img
              src={candidato?.foto}
              alt={candidato?.name}
              className="w-48 h-48 max-sm:w-32 max-sm:h-32 rounded-full mx-auto mb-4 bg-zinc-100 shadow-inner"
            />
            <h2 className="text-2xl max-sm:text-xl font-inter font-bold text-zinc-950 flex justify-center">
              {candidato?.name}
            </h2>
            <p className="text-zinc-950 mt-4 font-inter max-w-md flex justify-center mx-auto max-sm:text-xs">
              {candidato?.preview}
            </p>
          </div>
          <div className="mb-4">
            {candidatoPropostas.map((proposta, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl max-sm:text-xs font-inter font-bold text-zinc-950 mb-2">
                  {proposta.titulo}
                </h3>
                {proposta.regulamentos?.map((reg, i) => (
                  <p
                    key={i}
                    className="text-zinc-950 mb-2 flex justify-center font-inter max-sm:text-xs">
                    {reg}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidato;
