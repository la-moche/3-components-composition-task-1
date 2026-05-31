// App.tsx - корневой компонент (stateful-контейнер)
import { useState } from 'react'
import GameLayout from './components/Game/GameLayout'

// Константы с победными комбинациями
const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // вертикали
  [0, 4, 8], [2, 4, 6]             // диагонали
]

function App() {
  // Состояния игры
  const [field, setField] = useState<string[]>(Array(9).fill(''))
  const [currentPlayer, setCurrentPlayer] = useState<'X' | '0'>('X')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)

  // Проверка победителя
  const checkWinner = (currentField: string[]): 'X' | '0' | null => {
    for (const pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern
      if (
        currentField[a] &&
        currentField[a] === currentField[b] &&
        currentField[a] === currentField[c]
      ) {
        return currentField[a] as 'X' | '0'
      }
    }
    return null
  }

  // Проверка ничьи
  const checkDraw = (currentField: string[]): boolean => {
    return currentField.every(cell => cell !== '')
  }

  // Обработчик клика по клетке
  const handleCellClick = (index: number) => {
    // Если клетка занята или игра завершена — ничего не делаем
    if (field[index] !== '' || isGameEnded || isDraw) return

    // Создаём новый массив field
    const newField = [...field]
    newField[index] = currentPlayer
    setField(newField)

    // Проверяем победу
    const winner = checkWinner(newField)
    if (winner) {
      setIsGameEnded(true)
      return
    }

    // Проверяем ничью
    if (checkDraw(newField)) {
      setIsDraw(true)
      return
    }

    // Меняем игрока
    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
  }

  // Обработчик кнопки «Начать заново»
  const handleReset = () => {
    setField(Array(9).fill(''))
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setIsDraw(false)
  }

  return (
    <GameLayout
      field={field}
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      onCellClick={handleCellClick}
      onReset={handleReset}
    />
  )
}

export default App
