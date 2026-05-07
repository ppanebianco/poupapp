import logo from './assets/logo.svg'
import {Main} from './components/Main'
import { Aside } from './components/Aside'
import {Container} from './components/Container'
import { SearchInput } from './components/SearchInput'

function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput>

        </SearchInput>
      </Main>
    </Container>
  )
}

export default App
