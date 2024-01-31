import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  createUserWithEmailAndPasswordFirebase,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import { Button } from "../button/button.component";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPasswordFirebase(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName: name });
      resetForm();
    } catch (error) {
      console.error("hello");
      if (error.code === "auth/email-already-in-use") {
        alert("That email address is already in use!");
      } else {
        alert("Error signing up with email and password");
      }
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setconfirmPassword("");
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={(e) => setconfirmPassword(e.target.value)}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
