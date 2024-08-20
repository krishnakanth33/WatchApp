import styled from 'styled-components'

export const UlContainer = styled.ul`
  list-style-type: none;
  min-height: 100vh;
`

export const Li = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`

export const Para = styled.p`
  font-family: 'Roboto';
  margin-left: 20px;
  font-weight: ${props => props.weight};
  color: ${props => props.color};
`

export const Div = styled.div`
  dispaly: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: space-between;
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
`
export const Img = styled.img`
  width: 40px;
  margin: 10px;
`
