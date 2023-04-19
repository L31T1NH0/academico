import { Link } from "react-router-dom";
import data from "../assets/base/data.json"

function App() {
  return (
    <div className="container mx-12 max-sm:mx-6 my-10">
        <img
          className="mb-10"
          width={56}
          height={56}
          src={data.icon}
        />
      <div className="max-w-xl mb-4">
        <h1 className="text-4xl font-black mb-4 text-emerald-500">
          A MELHOR CHAPA DO
        </h1>
        <span className="text-green-500 text-4xl">COLÉGIO ACADÊMICO!</span>
      </div>
      <p className="text-lg max-w-2xl text-black max-sm:mr-12">
        Seja ativo na vida acadêmica! Vote de forma democrática nas eleições do
        grêmio estudantil, escolhendo candidatos comprometidos com suas
        propostas. Participe do processo de escolha dos representantes!
      </p>
      <Link to="/team">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold p-2 px-4 rounded mt-12">
          ESCOLHA!
        </button>
      </Link>
    </div>
  );
}

export default App;
