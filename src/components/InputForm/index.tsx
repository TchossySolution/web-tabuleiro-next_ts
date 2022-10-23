import { useRouter } from 'next/router'
import { InputFormContainer } from './styles'

type inputFormType = {
  name?: string
  placeholder: string
  inputValueChange: any
  typeInput: string
  icon?: any
}

function InputForm({
  name,
  placeholder,
  inputValueChange,
  typeInput,
  icon
}: inputFormType) {
  return (
    <InputFormContainer>
      {name ? <label htmlFor="input"> {name} </label> : null}

      <div className="containerInputForm">
        {icon ? icon : null}

        <input
          id="input"
          type={typeInput}
          onChange={inputValueChange}
          placeholder={placeholder}
        />
      </div>
    </InputFormContainer>
  )
}

export default InputForm
