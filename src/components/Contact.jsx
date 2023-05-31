import React, { Fragment } from "react";
import { Card, Col, FormGroup, Input, Label, Row } from "reactstrap";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import RecommendIcon from "@mui/icons-material/Recommend";
import HttpsIcon from "@mui/icons-material/Https";
const Contact = () => {
  return (
    <Fragment>
      <Row className="m-0 p-4">
        <Col md={2}></Col>
        <Col md={3}>
          <Card className="shadow">
            <div className="contact-heading-field">
              <div className="contact-icon">
                <PhoneAndroidIcon />
              </div>
              <div>
                <div>Phone</div>
                <div>03459031544</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={3}>
          <Card className=" shadow">
            <div className="contact-heading-field">
              <div className="contact-icon">
                <MailIcon />
              </div>
              <div>
                <div>Email</div>
                <div>moik@gmail.com</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow">
            <div className="contact-heading-field">
              <div className="contact-icon">
                <HomeIcon />
              </div>
              <div>
                <div>Address</div>
                <div>Rawalpindi</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="m-0">
        <Col md={3}></Col>
        <Col md={6} className="">
          <Card className="shadow-sm mt-5 p-3">
            <h3 className="m-2">Get in Touch</h3>
            <div className="d-flex header-field">
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Name
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
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
                  Phone
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">
                      <AddIcCallIcon />
                    </InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
            </div>
            <FormGroup className="m-2">
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="Message"
              />
            </FormGroup>
            <Button variant="contained" className="m-3">
              Send Message
            </Button>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Fragment>
  );
};

export default Contact;
