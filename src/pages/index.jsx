import { useEffect, useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { reportAtom, inputAtom } from '../stores/store';
import CardOne from '../components/CardOne';
import CardTwo from '../components/CardTwo';

const Home = ({ report }) => {
  const [inputValue] = useAtom(inputAtom); // Use useAtom para obter o valor
  const setReport = useSetAtom(reportAtom);
  const [showCardOne, setShowCardOne] = useState(true);

  useEffect(() => {
    setReport(report);
  }, [report, setReport]);

  const toggleCard = () => {
    setShowCardOne(prev => !prev);
  };

  return (
    <div>
      {showCardOne ? <CardOne /> : <CardTwo />}
      <p>
        <button onClick={toggleCard} className="bg-slate-700 py-2 px-4">
          {showCardOne ? 'Mostrar Input' : 'Mostrar Card Um'}
        </button>
      </p>
      <p>Input Value: {inputValue}</p> {/* Corrigido para exibir o valor do input */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch('https://movie-database-alternative.p.rapidapi.com');
  const report = await response.json();

  return { props: { report } };
};

export default Home;
