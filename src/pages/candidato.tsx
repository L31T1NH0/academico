import React from "react";
import { useParams } from "react-router-dom";
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
    <div className="mx-4 my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="text-center sm:text-left">
          <img
            src={candidato?.foto}
            alt={candidato?.name}
            className="w-48 h-48 max-sm:w-32 max-sm:h-32 rounded-full mx-auto mb-4 bg-zinc-100 shadow-inner"
          />
          <h2 className="text-2xl max-sm:text-xl font-bold text-zinc-950 flex justify-center">
            {candidato?.name}
          </h2>
          <p className="text-zinc-950 mt-4 max-w-md flex mx-auto max-sm:text-xs">
            {candidato?.preview}
          </p>
        </div>
        <div>
          {candidatoPropostas.map((proposta, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl max-sm:text-xs font-bold text-zinc-950 mb-2">
                {proposta.titulo}
              </h3>
              {proposta.regulamentos?.map((reg, i) => (
                <p key={i} className="text-zinc-950 mb-2 max-sm:text-xs">
                  {reg}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidato;
