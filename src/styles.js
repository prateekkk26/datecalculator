import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
  }

  h1, h2, h3 {
    color: #222;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: white;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`

export const CalculatorContainer = styled.div`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 0.95rem;
`

export const DateInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }

  @media (min-width: 768px) {
    max-width: 300px;
  }
`

export const ToggleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.95rem;
  user-select: none;

  span {
    color: #333;
  }
`

export const ToggleHelper = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-top: 0.25rem;
  margin-left: 1.75rem;
`

export const ToggleSwitch = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #4a90e2;
`

export const ResultContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px solid #e0e0e0;

  p {
    margin: 0.5rem 0 0 0;
    color: #666;
    font-size: 1.1rem;
  }
`

export const ResultDateRange = styled.div`
  text-align: center;
  font-size: 0.85rem;
  color: #888;
  margin-top: 0.75rem;
`

export const ResultValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #4a90e2;
  line-height: 1;
`

export const ErrorMessage = styled.div`
  padding: 1rem;
  background: #fee;
  border: 2px solid #fcc;
  border-radius: 4px;
  color: #c33;
  margin-bottom: 1rem;
  text-align: center;
`

export const Content = styled.div`
  margin-bottom: 3rem;

  p {
    margin-bottom: 1.25rem;
    color: #555;
  }

  strong {
    color: #333;
  }
`

export const FAQSection = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e0e0e0;
`

export const FAQItem = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: #4a90e2;
    margin-bottom: 0.75rem;
  }

  p {
    color: #555;
    margin-bottom: 0;
  }
`

export const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  text-align: center;
  color: #888;
  font-size: 0.9rem;
`

