import { ThemeProvider } from "styled-components";
import { ContainerAplication } from "./components/ContainerAplication";
import { Header } from "./components/Header";
import { GlobalStyle } from "./Global/GlobalStyle";
import { GlobalTheme } from "./Global/GlobalTheme";

export function App() {

  return (
    <ThemeProvider theme={GlobalTheme}>
      <ContainerAplication>
        <GlobalStyle/>
          <Header/>
      </ContainerAplication>
    </ThemeProvider>
  )
}

