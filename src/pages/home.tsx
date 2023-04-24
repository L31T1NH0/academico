import { Link } from "react-router-dom";
import data from "../assets/base/data.json";

function App() {
  return (
    <div className="container mx-12 max-sm:mx-6 my-12">
      <img
        className="mb-6"
        width={56}
        height={56}
        alt="icon"
        src={data.icon}
      />
      <div className="max-w-xl mb-2">
        <h1 className="text-4xl font-black text-emerald-500">
          A MELHOR CHAPA DO
        </h1>
        <span className="text-green-500 text-4xl">COLÉGIO ACADÊMICO!</span>
      </div>
      <p className="text-lg max-w-3xl text-zinc-950 max-sm:mr-12 font-inter mb-4">
        Seja Ativo na vida acadêmica! Vote nas eleições do grêmio, escolhendo o
        candidato comprometido! aproveite as oportunidades da nossa chapa.
        Oferecemos atividades de interesse, estimulando habilidades e interação
        social. Valorizamos a participação dos alunos e sua colaboração.
        Participe do processo de escolha dos representantes e aproveite nossa
        oportunidades.
      </p>
      <Link to="/team">
        <button className="bg-emerald-500 hover:bg-emerald-600 font-inter text-white transition-colors font-bold p-2 px-4 rounded">
          ESCOLHA!
        </button>
      </Link>
    </div>
  );
}

export default App;
