import React from "react";
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
  Box,
  Divider,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../components/styles";

export default function Recruitment() {
  const classes = useStyles();
  const [homeAddress, setHomeAddress] = React.useState("");
  const [jobLevel, setJobLevel] = React.useState(0);
  const handleChangeHomeAddress = (event) => {
    setHomeAddress(event.target.value);
  };
  const handleChangeJobLevel = (event) => {
    setJobLevel(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container className={classes.root} spacing={2}>
        <Typography variant="h4" component="h4" gutterBottom>
          Recruitment Search
        </Typography>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Grid>
              <TextField
                id="standard-search"
                label="Category"
                type="search"
                helperText="Choose Category"
              />
              <TextField
                id="standard-search"
                label="Location"
                type="search"
                helperText="Expected Working Location"
              />
            </Grid>
            <Box m="auto">
              <Button variant="contained" color="secondary">
                Go Search!
              </Button>
            </Box>
          </Box>
          <br />
          <br />
          <Grid>
            <FormControl className={classes.formControl}>
              <InputLabel shrink id="home-address">
                Home Address
              </InputLabel>
              <Select
                labelId="home-address"
                id="home-address"
                value={homeAddress}
                onChange={handleChangeHomeAddress}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value={1}>Location 1</MenuItem>
                <MenuItem value={2}>Location 2</MenuItem>
                <MenuItem value={3}>Location 3</MenuItem>
              </Select>
              <FormHelperText>Choose Home Address</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="job-level">Job Level</InputLabel>
              <Select
                labelId="job-level"
                id="job-level"
                value={jobLevel}
                onChange={handleChangeJobLevel}
              >
                <MenuItem value={0}>Any</MenuItem>
                <MenuItem value={1}>Level 1</MenuItem>
                <MenuItem value={2}>Level 2</MenuItem>
                <MenuItem value={3}>Level 3</MenuItem>
              </Select>
              <FormHelperText>Choose Job Level</FormHelperText>
            </FormControl>
          </Grid>
          <br />
          <Grid>
            <TextField
              id="standard-search"
              label="From"
              type="number"
              helperText="Year of experience"
            />
            <TextField
              id="standard-search"
              label="To"
              type="number"
              helperText="Year of experience"
            />
            <TextField
              id="standard-search"
              label="From"
              type="number"
              helperText="Salary range"
            />
            <TextField
              id="standard-search"
              label="To"
              type="number"
              helperText="Salary range"
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
