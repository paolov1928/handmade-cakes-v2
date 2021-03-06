import React, { useState } from "react"
import styled, { css } from "styled-components"

import Swal from "sweetalert2"
import { Event } from "./Tracking/index"

const allText = require("../copy.js")

const Button = styled.button`
  background: transparent;
  border-radius: 0.5em;
  border: 2px solid rgba(30, 13, 45, 0.03);
  margin-top: 5vh;
  padding: 1vh;
  display: block;
  min-width: 30vw;
  height: 3em;
  font-size: calc(8px + 2vmin);
  text-align: center;
  background: #58544e;
  width: 60%;
  max-width: 60%;
  color: #d3cce3;
  font-family: "Indie Flower", cursive;
`

const Container = styled.div`
  text-align: center;
  margin: 5%;
`
const FormTitle = styled.p`
  color: #58544e;
  margin: 1vh;
  margin-bottom: 5vh;
  font-weight: bold;
  font-size: calc(4px + 3vmin);
`

const FormLabels = styled.p`
  color: #58544e;
  margin: 1vh;
  font-weight: bold;
  font-size: calc(4px + 3vmin);
`

const FormInput = styled.input`
  background-color: #f0f0f0;
  height: 3em;
  min-width: 30vh;
  ${props =>
    props.larger &&
    css`
      height: 5.5em;
      min-width: 40vw;
    `}
`

const FormMessageInput = styled.textarea`
  background-color: #f0f0f0;
  height: 20vh;
  min-width: 40vw;
  border: 1px solid #aaa;
`

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const { name, email, message } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <div className="introTextContainer scroll-form" id="formContainer">
      <Container>
        <FormTitle>{allText.form.title}</FormTitle>
        <FormLabels>{allText.form.firstInput}</FormLabels>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={e => onChange(e)}
        />
        <FormLabels>{allText.form.secondInput}</FormLabels>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
        />
        <FormLabels>{allText.form.thirdInput}</FormLabels>
        <FormMessageInput
          type="text"
          name="message"
          value={message}
          onChange={e => onChange(e)}
          larger
        />
        <div className="submitButtonContainer">
          <Button
            onClick={() =>
              fetch("https://cakeseffiebk.herokuapp.com/cakes", {
                method: "post",
                body: JSON.stringify(formData),
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              })
                .then(d =>
                  setFormData({ ...formData, name: "", email: "", message: "" })
                )
                .then(d => Swal.fire("Sorry that didn't work! Please use Instagram/Facebook"))
                .then(d => Event("FORM", "Form Submitted", "HOME_PAGE"))
            }
          >
            <b>Send</b>
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Form
