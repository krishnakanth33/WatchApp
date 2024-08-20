import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  padding: 15px;
`

export const Img = styled.img`
  width: ${props => props.w};
  height: ${props => props.h};
`

export const Container = styled.div`
  display: flex;
  padding-right: 20px;
  align-items: center;
`

export const Button = styled.button`
  border: ${props => (props.border ? '1.5px solid #4f46e5' : '0px')};
  color: #4f46e5;
  padding: 8px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 20px;
`
