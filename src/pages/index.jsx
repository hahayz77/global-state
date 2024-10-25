import { useEffect, useState } from 'react'
import { useStore } from '../stores/store'
import CardOne from '../components/CardOne'
import CardTwo from '../components/CardTwo'

const Home = ({ report }) => {
  const setReport = useStore(state => state.setReport)
  const inputValue = useStore(state => state.input)
  const [showCardOne, setShowCardOne] = useState(true)

  useEffect(() => {
    setReport(report)
  }, [report])

  const toggleCard = () => {
    setShowCardOne(prev => !prev)
  }

  return (
    <div>
      {showCardOne ? <CardOne /> : <CardTwo />}
      <p>
        <button onClick={toggleCard} className="bg-slate-700 py-2 px-4">
          {showCardOne ? 'Mostrar Input' : 'Mostrar Card Um'}
        </button>
      </p>
      <p>Input Value: {inputValue}</p>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://movie-database-alternative.p.rapidapi.com')
  const report = await response.json()

  return { props: { report } }
}

export default Home