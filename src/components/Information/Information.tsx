// components/Information/Information.tsx (stateful-контейнер)
import InformationLayout from './InformationLayout'

interface InformationProps {
  currentPlayer: 'X' | '0'
  isGameEnded: boolean
  isDraw: boolean
}

function Information({ currentPlayer, isGameEnded, isDraw }: InformationProps) {
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  )
}

export default Information
