/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { login } from "../../services/apiAuth";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("alaa@test.com");
  const [password, setPassword] = useState("123456");
  const {isLogging, loginMethod} = useLogin();

  
    function handleSubmit(e) {
      e.preventDefault();
      if (!email || !password) return;
      //mutation function accept optional obj, and i want when user write wrong email or password to make empty inputs
      loginMethod({email, password}, {
        onSettled: () =>{
          setEmail('');
          setPassword('')
        }
      });
      // login({email, password});
    }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLogging}>
          {!isLogging ?  'Log in' : <SpinnerMini/>}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
