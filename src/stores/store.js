import { atom } from 'jotai';

export const reportAtom = atom('Initial Report');

// Cria um átomo que pode ser atualizado
export const inputAtom = atom('intial input'); // Inicialize com uma string vazia

// Se você quiser adicionar lógica de leitura e escrita ao inputAtom:
export const inputAtomWithSetter = atom(
    (get) => get(inputAtom), // Getter: obtém o valor atual do inputAtom
    (get, set, newValue) => set(inputAtom, newValue) // Setter: atualiza o valor do inputAtom
);

export const reportAtomSet = atom(
    (get) => get(reportAtom),
    (get, set, newValue) => set(reportAtom, newValue)
)
