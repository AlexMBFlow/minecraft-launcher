import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './styles/GlobalStyle'
import Layout from "./components/Layout/Layout";

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