import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.jc};
  align-items: ${props => props.alignItems};
  padding: ${props => props.padding};
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  padding-right: ${props => props.pr};
`

export const Img = styled.img``

export const P = styled.p`
  margin-left: 20px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const Button = styled.button`
  color: ${props => props.color};
  border: 0px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  margin: 6px;
  font-family: 'Roboto';
`

export const Hr = styled.hr`
  border: 1px solid #bfbfbf;
  width: 95%;
`

export const Img2 = styled.img`
  width: 50px;
  height: 50px;
`
