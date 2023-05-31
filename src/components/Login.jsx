import React, { Fragment } from "react";
import { Card, Col, Row } from "reactstrap";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import RecommendIcon from "@mui/icons-material/Recommend";
import HttpsIcon from "@mui/icons-material/Https";

import img from "./Assets/images/login.jpg";

const Login = () => {
  return (
    <Fragment>
      <Row className="m-0">
        <Col md="4"></Col>
        <Col md="4">
          <Card className="shadow mt-5">
            <Row className="m-0">
              <Col md={6} className="form p-3">
                <h1 className="heading-text">Login</h1>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">
                        <HttpsIcon />
                      </InputAdornment>
                    }
                    label="Amount"
                  />
                </FormControl>
                <Button variant="contained">Login</Button>
              </Col>
              <Col md={6} className="img-main-col">
                <img src={img} className="imge-div" alt="" />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md="4"></Col>
      </Row>
    </Fragment>
  );
};

export default Login;
