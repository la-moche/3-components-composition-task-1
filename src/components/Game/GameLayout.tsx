import Information from '../Information/Information';
import Field from '../Field/Field';

interface GameLayoutProps {
  field: string[];
  currentPlayer: 'X' | '0';
  isGameEnded: boolean;
  isDraw: boolean;
  onCellClick: (index: number) => void;
  onReset: () => void;
}

function GameLayout({
  field,
  currentPlayer,
  isGameEnded,
  isDraw,
  onCellClick,
  onReset,
}: GameLayoutProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '20px',
      }}
    >
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field field={field} onCellClick={onCellClick} />
      <button
        onClick={onReset}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: '1px solid #ccc',
          backgroundColor: '#f0f0f0',
        }}
      >
        Начать заново
      </button>
    </div>
  );
}

export default GameLayout
