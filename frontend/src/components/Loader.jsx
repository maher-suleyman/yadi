import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "3.5rem",
        height: "3.5rem",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default Loader;
