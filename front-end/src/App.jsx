import logo from './assets/logo.svg'
import {Main} from './components/Main'
import { Aside } from './components/Aside'
import {Container} from './components/Container'
import { SearchInput } from './components/SearchInput'
import { Tipography } from './components/Tipography'

function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Tipography>
            Olá, user!
          </Tipography>
          <Tipography>
            Veja como estão suas finanças hoje.
          </Tipography>
        </div>
      </Main>
    </Container>
  )
}

export default App
