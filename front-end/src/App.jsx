import logo from './assets/logo.svg'
import {Main} from './components/Main'
import { Aside } from './components/Aside'
import {Container} from './components/Container'
import { SearchInput } from './components/SearchInput'
import { Tipography } from './components/Tipography'

import Card from './components/Card'
import { DailyBudget } from './components/DailyBudget'
import { SavingStatus } from './components/SavingStatus'

function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Tipography variant='h1'>
            Olá, user!
          </Tipography>
          <Tipography variant='p'>
            Veja como estão suas finanças hoje.
          </Tipography>
        </div>
        <section>
          <Card>
            <Card.CardHeader>
              <Tipography variant='h2'>
                Saldo disponível
              </Tipography>
            </Card.CardHeader>
            <Card.CardBody>
              <DailyBudget value={200} />
            </Card.CardBody>
          </Card>

          <Card>
            <Card.CardHeader>
              <Tipography variant='h2'>
                Progresso financeiro
              </Tipography>
            </Card.CardHeader>
            <Card.CardBody>
              <SavingStatus percent={40} />
            </Card.CardBody>
          </Card>
        </section>
      </Main>
    </Container>
  )
}

export default App
