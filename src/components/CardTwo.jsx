import { useAtom } from 'jotai';
import { reportAtom, inputAtomWithSetter, reportAtomSet } from '../stores/store';

const CardTwo = () => {
    const [report, setReport] = useAtom(reportAtomSet);
    const [inputValue, setInputValue] = useAtom(inputAtomWithSetter); // Use o átomo com setter

    return (
        <div>
            <input
                className="bg-black border-solid border-slate-500 border-[1px]"
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    setReport(prev => ({ ...prev, input: e.target.value }))
                }} // Atualiza o estado
                placeholder="Digite algo..."
            />
        </div>
    );
};

export default CardTwo;
