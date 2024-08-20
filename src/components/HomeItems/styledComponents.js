import styled from 'styled-components'

export const Li = styled.li`
  margin: 6px;
  cursor: pointer;
  width: 300px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  width: ${props => props.width};
  justify-content: ${props => props.jc};
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.p};
  align-items: ${props => props.alignItems};
`

export const Img = styled.img`
  width: 300px;
  height: 180px;
`
export const Img2 = styled.img`
  width: 30px;
  height: 30px;
  margin: 6px;
  margin-top: 20px;
`

export const P = styled.p`
  font-size: 15px;
  line-height: 1;
  color: ${props => props.color};
  font-weight: 500;
  margin-top: ${props => props.mt};
  padding-right: ${props => props.pr};
`

export const P1 = styled.p``
