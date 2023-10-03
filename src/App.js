import "./App.css";
import { Grid, Paper, Stack, styled } from "@mui/material";
import ReactHookForm from "./components/ReactHookForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.subtitle2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
      <Grid
        container
        direction="column"
        sx={{ height: 1900, textAlign: "left", margin: 2 }}
      >
        <Grid
          className="BgImgHomeFirst"
          item
          xs={12}
          sm={3}
          md={3}
          lg={4}
          xl={4}
          sx={{ borderRadius: 6 }}
        >
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <Item>              
              <ReactHookForm />
            </Item>           
          </Stack>
        </Grid>        
      </Grid>
    </>
  );
}

export default App;
