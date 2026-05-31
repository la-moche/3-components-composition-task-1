// components/Field/Field.tsx (stateful-контейнер)
import FieldLayout from './FieldLayout'

interface FieldProps {
  field: string[]
  onCellClick: (index: number) => void
}

function Field({ field, onCellClick }: FieldProps) {
  return (
    <FieldLayout
      field={field}
      onCellClick={onCellClick}
    />
  )
}

export default Field
