import React from 'react'
import * as S from './style'
interface RadioButtonProps {
  id: string
  name: string
  value: string
  checked: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className: string
}

const Radio: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  checked,
  handleChange,
  className,
}) => {
  return (
    <S.Radio className="quiz-label">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        // 한 번 선택하면 답안지를 보여주기 때문에 conditional
        onChange={handleChange}
      />
      <span
        className={className}
        dangerouslySetInnerHTML={{ __html: `${value}` }}
      />
    </S.Radio>
  )
}

export default Radio
