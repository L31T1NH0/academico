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
    <div
      className="
    grid 
    sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
    gap-4 my-16 mx-4 max-w-max max-h-48"
    >
      {candidatos.CandidatosG.sort((a, b) => a.name.localeCompare(b.name)).map(
        (candidato: Candidato, index: number) => (
          <div
            key={index}
            className="
            hover:ring hover:ring-emerald-400 rounded text-center 
            p-4 transition-all cursor-pointer border
            "
            onClick={() => handleClick(candidato)}
          >
            <div className="flex items-center">
              <img
                src={candidato.foto}
                alt={candidato.name}
                className="w-24 h-24 rounded mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex mx-auto">
                {candidato.name}
              </h3>
            </div>
            <p className="text-gray-600 line-clamp-4">{candidato.proposta}</p>
          </div>
        )
      )}
      {modalOpen && (
        <div 
        className="fixed inset-0 bg-gray-600/60 flex justify-center items-center overflow-y-auto max-h-screen">
          <div className="bg-white rounded-lg p-8 mx-12 my-16 max-w-4xl max-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 ">
              {candidatoSelecionado?.name}
            </h2>
            <div className="overflow-y-auto max-h-screen">
              <p className="text-gray-600 mb-4 shadow-inner rounded p-2 mx-2 overflow-y-auto">
                {candidatoSelecionado?.proposta}
              </p>
            </div>
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
