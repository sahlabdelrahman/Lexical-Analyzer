import { useState } from "react";
import "./App.css";
import isKeyword from "./functions/isKeyword";
import isOperator from "./functions/isOperator";
import validIdentifier from "./functions/validIdentifier";
import isNumber from "./functions/isNumber";
import CustomizedTables from "./CustomizedTables";
import parser from "./functions/parser";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  let tokens = [];
  const [inputValue, setInputValue] = useState("int x = m + n;");
  const [allTokens, setAllTokens] = useState([]);

  function main(str) {
    str = parser(str);

    if (str === "") {
      return "Input is empty";
    }

    str.forEach((element) => {
      if (isKeyword(element) === true) {
        tokens.push({ [element]: "IS A KEYWORD" });
      } else if (isOperator(element) === true) {
        tokens.push({ [element]: "IS AN OPERATOR" });
      } else if (validIdentifier(element) === true) {
        tokens.push({ [element]: "IS A VALID IDENTIFIER" });
      } else if (isNumber(element) === true) {
        tokens.push({ [element]: "IS A Number" });
      } else if (validIdentifier(element) === false && true) {
        tokens.push({ [element]: "IS NOT A VALID IDENTIFIER" });
      } else if (str[element] === "" || str[element] === " ") {
        return;
      }
    });
  }

  const theme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }} style={{ backgroundColor: "#2196f3" }}>
              <CodeIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Lexical Analyzer
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="statement"
                label="Statement"
                name="statement"
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <Button
                onClick={() => {
                  main(inputValue);
                  setAllTokens(tokens);
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#2196f3" }}
              >
                Convert
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      {allTokens.length > 0 && <CustomizedTables tokens={allTokens} />}
    </div>
  );
}

export default App;
