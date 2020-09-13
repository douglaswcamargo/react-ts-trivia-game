import React from 'react'
import * as S from './styles'

const HandheldLink: React.FC = () => {
  return (
    <S.Container>
      <S.Label>
            Check the&nbsp;
        <a href="https://github.com/douglaswcamargo/react-ts-trivia-game" target="_blank" rel="noopener noreferrer" >
                SOURCE CODE
        </a>
      </S.Label>
      <S.Stripes />
    </S.Container>
  )
}

export default HandheldLink
