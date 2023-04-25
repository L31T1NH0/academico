import React from "react";
import { Link, useParams } from "react-router-dom";
import candidatos from "../assets/base/data.json";

interface Candidato {
  name?: string | null;
  foto: string;
  preview?: string;
  whatsicon?: string | null;
  WhatsApp?: string;
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
      <button className="bg-zinc-300 hover:text-white hover:bg-green-300 transition-all rounded-lg p-2 hover:scale-105 mx-4 mt-4 relative">
        <Link to={"/team"}>
          <img
            src="https://res.cloudinary.com/dwx8c4qi2/image/upload/v1682417916/ECOA/ICON/arrow-back-outline_yufo2u.png"
            width={20}
            height={20}
          />
        </Link>
      </button>
      <div className="mx-4 my-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="text-center sm:text-left">
            <img
              src={candidato?.foto}
              alt={candidato?.name}
              width={164}
              height={164}
              className="max-sm:w-32 max-sm:h-32 rounded-full mx-auto mb-4 bg-zinc-100 shadow-inner"
            />
            <h2 className="text-2xl max-sm:text-xl font-inter font-bold text-zinc-950 flex justify-center">
              {candidato?.name}
            </h2>
            <button className="mx-auto flex justify-center my-1">
              <a href={candidato?.WhatsApp}>
                <img src={candidato?.whatsicon} width={24} height={24} />
              </a>
            </button>
            <p className="text-zinc-950 font-inter max-w-md flex justify-center mx-auto max-sm:text-xs">
              {candidato?.preview}
            </p>
          </div>
          <div className="mb-4">
            {candidatoPropostas.map((proposta, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl max-sm:text-xl font-inter font-bold text-zinc-950 mb-2">
                  {proposta.titulo}
                </h3>
                {proposta.regulamentos?.map((reg, i) => (
                  <p
                    key={i}
                    className="text-zinc-950 mb-2 flex justify-center font-inter max-sm:text-xs"
                  >
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
