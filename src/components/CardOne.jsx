import { useStore } from '../stores/store'

const CardOne = () => {
  const report = useStore(state => state.report)

  return (
    <div>
      <p>Card One: {JSON.stringify(report)}</p>
    </div>
  )
}

export default CardOne