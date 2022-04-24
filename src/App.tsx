import { GlobalStyle } from './styles/GlobalStyle'
import Layout from "./components/Layout/Layout";
import {ThemeProvider} from "styled-components";

export function App() {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={{color: "blue"}}>
            <Layout />
        </ThemeProvider>

    </>
  )
}