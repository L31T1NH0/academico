import React from "react";
import { useParams } from "react-router-dom";
import candidatos from "../assets/base/data.json";

interface Candidato {
  id: string;
  name: string;
  proposta: string;
  foto: string;
}

const Candidato: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const candidato = candidatos.CandidatosG.find(
    (candidato: Candidato) => candidato.name === name
  );

  const propostaArray = candidato?.proposta.split(".");

  return (
    <div className="mx-4 my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="text-center sm:text-left">
          <img
            src={candidato?.foto}
            alt={candidato?.name}
            className="w-48 h-48 max-sm:w-32 max-sm:h-32 rounded-full mx-auto mb-4 bg-zinc-100 shadow-inner"
          />
          <h2 className="text-2xl max-sm:text-xl font-bold text-gray-950 flex justify-center">
            {candidato?.name}
          </h2>
        </div>
        <div>
          {propostaArray?.map((part, index) => {
            const parts = part.split(":");
            return parts.length > 1 ? (
              <h3
                key={index}
                className="text-xl max-sm:text-xs font-bold text-zinc-950 mb-4 flex justify-center"
              >
                {parts[1]}
              </h3>
            ) : (
              <p key={index} className="text-zinc-800 mb-4 max-sm:text-xs">
                {part.trim() + "."}
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Candidato;
