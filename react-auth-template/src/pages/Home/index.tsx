import { useContext } from "react";
import SignedIn from "./SignedIn";
import NotSignedIn from "./NotSignedIn";
import AuthContext from "../../context/auth";

const Home = () => {
  const { isSignedIn } = useContext(AuthContext);
  return <div>{isSignedIn ? <SignedIn /> : <NotSignedIn />}</div>;
};

export default Home;
