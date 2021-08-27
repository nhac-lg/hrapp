import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import useStyles from "../../components/styles";

export async function getStaticProps() {
  const request = await fetch("http://localhost:3000/api/getdata");
  const json = await request.json();

  return {
    props: {
      data: json,
    },
  };
}

export default function ReactVirtualizedTable({ data }) {
  const rows = data;
  const classes = useStyles();
  return (
    <Box>
      <Box m={1} p={1}>
        <Typography variant="h5" component="h5" gutterBottom>
          Candidate Management
        </Typography>
      </Box>
      <Paper>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Job</TableCell>
                <TableCell align="center">Expected Salary</TableCell>
                <TableCell align="center">Expected Job Level</TableCell>
                <TableCell align="center">Year Of Experience</TableCell>
                <TableCell align="center">Language</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.job}</TableCell>
                  <TableCell align="center">{row.expectedSalary}</TableCell>
                  <TableCell align="center">{row.expectedJobLevel}</TableCell>
                  <TableCell align="center">{row.yearOfExperience}</TableCell>
                  <TableCell align="center">{row.language}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      Remove Candidate{" "}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
