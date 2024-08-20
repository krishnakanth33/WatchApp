import styled from 'styled-components'

export const BigContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.fd};
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
`

export const Img = styled.img`
  width: 500px;
`

export const Heading = styled.h1`
  color: ${props => props.color};
`

export const Para = styled.p`
  color: #94a3b8;
`
