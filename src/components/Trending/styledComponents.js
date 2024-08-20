import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItem};
  width: ${props => props.width};
  height: ${props => props.height};
  justify-content: ${props => props.jc};
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.p};
  align-self: ${props => props.as};
  color: ${props => props.color};
  border-radius: ${props => props.bdRadius};
`

export const Ul = styled.ul`
  list-style-type: none;
  flex-wrap: wrap;
  min-height: 100vh;
`

export const H1 = styled.h1`
  margin-left: 30px;
  color: ${props => props.color};
`
