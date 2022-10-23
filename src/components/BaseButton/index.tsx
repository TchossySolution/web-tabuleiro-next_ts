import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { BaseButtonContainer } from './styles'
import { BeatLoader } from 'react-spinners'
import { defaultTheme } from '../../themes/default'

type baseButtonType = {
  name: string
  onClickButton?: any
  disabled?: boolean
  isLoading?: boolean
}

function BaseButton({
  name,
  onClickButton,
  disabled,
  isLoading
}: baseButtonType) {
  return (
    <BaseButtonContainer onClick={onClickButton} disabled={disabled}>
      {isLoading ? (
        <>
          <BeatLoader size={10} color={defaultTheme.colors['base-white']} />
        </>
      ) : (
        <span>{name}</span>
      )}
    </BaseButtonContainer>
  )
}

export default BaseButton
