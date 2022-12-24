import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCounterValue,
  selectCounterVisibility,
  increament,
  show,
  hide,
  decrease,
} from "./slice";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function Counter() {
  const st = useSelector(selectCounterValue);
  const showHide = useSelector(selectCounterVisibility);
  const dispatch = useDispatch();

  const handelShowHide = () => {
    switch (showHide) {
      case true:
        return dispatch(hide());
      case false:
        return dispatch(show());
      default:
        break;
    }
  };
  console.log(showHide);
  return (
    <Container>
      <Grid>
        <Grid item>
          <Typography variant="h2" xs={4}>
            Counter application using redux
          </Typography>
        </Grid>
      </Grid>
      {showHide && <h1>{st}</h1>}
      <ButtonGroup>
        <Button
          onClick={() => {
            dispatch(increament());
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            dispatch(decrease());
          }}
        >
          -
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={handelShowHide}>Show/hide</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Counter;
