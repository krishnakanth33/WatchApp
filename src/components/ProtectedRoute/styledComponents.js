import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  width: ${props => props.width};
  justify-content: ${props => props.jc};
  align-items: ${props => props.alignItems};
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.p};
`
