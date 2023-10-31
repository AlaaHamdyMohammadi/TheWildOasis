import Heading from "../ui/Heading";
import SignupForm from '../features/authentication/SignupForm'
import { Helmet } from "react-helmet";
function NewUsers() {
  return (
    <>
      <Helmet>
        <title>The Wild Oasis | Sign up</title>
      </Helmet>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
