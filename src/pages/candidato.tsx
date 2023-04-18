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

  if (!candidato) {
    return <h1>Candidato não encontrado.</h1>;
  }

  return (
    <div className="my-16 mx-4 max-w-max max-h-48">
      <img
        src={candidato.foto}
        alt={candidato.name}
        className="w-72 h-72 rounded mb-4 mx-auto"
      />
      <h1 className="text-4xl font-bold text-center mb-4">{candidato.name}</h1>
      <p className="text-gray-600 text-center">{candidato.proposta}</p>
    </div>
  );
};

export default Candidato;
