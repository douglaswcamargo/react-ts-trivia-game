import styled from 'styled-components'

export const Container = styled.button`
width: 48px;
height: 48px;
  text-decoration: none;
  display: block;
  padding: 15px;
  font-family: ${(props) => props.theme.fonts.handheldtext};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: ${(props) => props.theme.colors.handheldSecondary};
  border: none;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 0px 4px 0px ${(props) => props.theme.colors.handheldSecondaryShadow};

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.8;
    color: #d1d1d1;
  }
  
  &:active{
    box-shadow: 0px 2px 0px ${(props) => props.theme.colors.handheldSecondaryShadow};
    position: relative;
    top: 2px;
}
`
