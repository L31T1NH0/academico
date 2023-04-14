import React, { useState } from "react";
import candidatos from "./assets/data.json";

interface Candidato {
  name: string;
  proposta: string;
  foto: string;
}

const Candidatos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false); // Estado que controla a abertura do modal
  const [candidatoSelecionado, setCandidatoSelecionado] = useState<Candidato>(); // Estado que armazena o candidato selecionado

  const handleClick = (candidato: Candidato) => {
    setCandidatoSelecionado(candidato);
    setModalOpen(true);
  };

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 mt-16 mb-16 mx-6">
      {candidatos.CandidatosG.map((candidato: Candidato, index: number) => (
        <div
          key={index}
          className="bg-gray-100 hover:bg-gray-50 rounded text-center 
          shadow-inner hover:shadow-xl p-4 hover:scale-105 transition-all cursor-pointer border"
          onClick={() => handleClick(candidato)}
        >
          <img
            src={candidato.foto}
            alt={candidato.name}
            className="w-32 h-32 rounded-xl mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {candidato.name}
          </h3>
          <p className="text-gray-600 line-clamp-4">{candidato.proposta}</p>
        </div>
      ))}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-60 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 mx-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {candidatoSelecionado?.name}
            </h2>
            <p className="text-gray-600 mb-4">
              {candidatoSelecionado?.proposta}
            </p>
            <button
              className="bg-emerald-500 hover:bg-emerald-700 transition-all text-white py-2 px-4 rounded-lg"
              onClick={() => setModalOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidatos;
