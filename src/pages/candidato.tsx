import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/base/data.json";


const Candidato = () => {
  const { candidatoNome } = useParams<{ candidatoNome: string }>();
  const candidato = data.CandidatosG.find((c) => c.name === candidatoNome);


  
  if (!candidato) {
    console.log(data.CandidatosG);
    return <h1>Candidato não encontrado.</h1>;
  }

  return (

    <div className="bg-gray-100 min-h-screen">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">{candidato.name}</h2>
        </div>
        <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-row bg-white shadow rounded-lg overflow-hidden">
            <img
              className="w-48 h-auto object-cover"
              src={candidato.foto}
              alt={candidato.name}
            />
            <div className="px-6 py-4 w-full flex flex-col">
              <h3 className="font-bold text-lg mb-2">{candidato.name}</h3>
              <p className="text-gray-600 text-base mb-2">
                {candidato.proposta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidato;
