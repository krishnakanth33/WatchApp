import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.backgroundcolor};
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? 'row' : 'column')};
  width: ${prop => prop.width};
  margin: ${prop => prop.margin};
  margin-left: ${props => props.ml};
  align-self: ${props => (props.selfAlign ? 'flex-start' : '')};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 37%;
  padding: 20px;
  box-shadow: 4px 0px 4px 4px #bfbfbf;
  border-radius: 10px;
  padding-bottom: 40px;
  background-color: ${props => props.backgroundcolor};
`
export const Img = styled.img`
  width: 200px;
  margin: 30px;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  outline: none;
`

export const Label = styled.label`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const Button = styled.button`
  background-color: #3b82f6;
  border: 0px;
  padding: 10px;
  color: #ffffff;
  width: 80%;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`

export const Para = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
`

export const Label2 = styled.label`
  color: ${props => props.color};
`
