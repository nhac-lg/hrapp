import { Grid, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../components/styles";

export default function Recruitment() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={4}>
          <TextField
                id="standard-search"
                label="Search field"
                type="search"
                helperText="Job"
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                helperText="Year of experience"
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                helperText="Skill"
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                helperText="Expectation"
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                helperText="Location"
              />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
