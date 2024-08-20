import styled from 'styled-components'

export const Li = styled.li`
  margin: 20px;
  cursor: pointer;
  margin-bottom: 40px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  width: ${props => props.width};
  justify-content: ${props => props.jc};
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.p};
  padding-left: ${props => props.pl};
`

export const Img = styled.img`
  width: 240px;
  height: 300px;
`

export const P = styled.p`
  font-size: 15px;
  line-height: 1;
  color: ${props => props.color};
  font-weight: 500;
  margin-top: ${props => props.mt};
`

export const H1 = styled.h1`
  font-size: 18px;
  color: ${props => props.color};
  font-family: 'Roboto';
`
