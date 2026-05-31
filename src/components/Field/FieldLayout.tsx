// components/Field/FieldLayout.tsx
import styles from './Field.module.css'

interface FieldLayoutProps {
  field: string[]
  onCellClick: (index: number) => void
}

function FieldLayout({ field, onCellClick }: FieldLayoutProps) {
  return (
    <div className={styles.field}>
      {field.map((cell, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => onCellClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  )
}

export default FieldLayout
