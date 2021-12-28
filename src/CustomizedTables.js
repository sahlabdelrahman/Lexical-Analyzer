import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Container from "@mui/material/Container";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ tokens }) {
  return (
    <Container>
      <TableContainer
        component={Paper}
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ backgroundColor: "#2196f3" }}>
                Token
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ backgroundColor: "#2196f3" }}
              >
                Type
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(tokens).map((key) => {
              if (key < tokens.length - 1) {
                return (
                  <StyledTableRow key={Object.keys(tokens[key])}>
                    <StyledTableCell component="th" scope="row">
                      {Object.keys(tokens[key])}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {Object.values(tokens[key])}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
