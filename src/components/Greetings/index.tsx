import { Button } from '../Button'
import { Container, Image, Text } from './styles'
import Store from "../../store/store"

export function Greetings() {
/*   function handleSayHello() {
    window.Main.sendMessage('Hello World');
    console.log('Message sent! Check main process log in terminal.')
  } */

  return (
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>An Electron boilerplate including TypeScript, React, Jest and ESLint.</Text>
    </Container>
  )
}
 
