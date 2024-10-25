import { create } from 'zustand'

export const useStore = create(set => ({
    report: 'Initial Report',
    input: 'initial input',
    setReport: state => set({ report: state }),
    setInput: state => set({ input: state })
}))