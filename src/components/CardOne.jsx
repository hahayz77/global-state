import { useAtom } from 'jotai'
import { reportAtom } from '../stores/store'

const CardOne = () => {
    const [report] = useAtom(reportAtom)

    return (
        <div>
            <p>Card One: {JSON.stringify(report)}</p>
        </div>
    )
}

export default CardOne