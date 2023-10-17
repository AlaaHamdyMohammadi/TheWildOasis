import styled from "styled-components"

//Return new component
const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  background-color: lightcoral;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
`

function App() {
  return (
    <div>
      <H1>The Wild Oasis</H1>
      <Button>Click</Button>
    </div>
  )
}

export default App
