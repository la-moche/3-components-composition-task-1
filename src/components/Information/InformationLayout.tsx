// components/Information/InformationLayout.tsx
interface InformationLayoutProps {
  currentPlayer: 'X' | '0'
  isGameEnded: boolean
  isDraw: boolean
}

function InformationLayout({ currentPlayer, isGameEnded, isDraw }: InformationLayoutProps) {
  let statusText: string

  if (isDraw) {
    statusText = 'Ничья! 🤝'
  } else if (isGameEnded) {
    statusText = `Победа: ${currentPlayer} 🎉`
  } else {
    statusText = `Ходит: ${currentPlayer}`
  }

  return (
    <div style={{
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      padding: '10px 20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px'
    }}>
      {statusText}
    </div>
  )
}

export default InformationLayout
