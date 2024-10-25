import { useStore } from '../stores/store'

const CardTwo = () => {
  const report = useStore(state => state.report)
  const setReport = useStore(state => state.setReport)
  const inputValue = useStore(state => state.input)
  const setInputValue = useStore(state => state.setInput)

  return (
    <div>
      <input
        className="bg-black border-solid border-slate-500 border-[1px]"
        type="text"
        value={inputValue}
        onChange={e => {
          const newInputValue = e.target.value
          setInputValue(newInputValue)
          setReport({ ...report, input: newInputValue })
        }}
        placeholder="Digite algo..."
      />
    </div>
  )
}

export default CardTwo