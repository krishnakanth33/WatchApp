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
export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  padding: 20px;
  width: 100%;
`

export const Input = styled.input`
  color: ${props => props.color}
  padding: 7px;
  outline: none;
  width: 33%;
  background-color: transparent;
  border: ${props => props.borderColor};
`

export const Button = styled.button`
  font-size: 15px;
  font-weight: 600;
  color: ${props => (props.color ? '#ffffff' : '#1e293b')};
  padding: 10px;
  background-color: ${props => props.backgroundColor};
  cursor: pointer;
  border: ${props => props.borderColor};
  border-radius: ${props => props.br};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
`

export const Img = styled.img`
  width: ${props => props.width};
  margin-top: ${props => props.mt};
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`
export const H = styled.h1`
  color: ${props => props.color};
`
