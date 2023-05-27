import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

function AlertButton() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>I can change this</Alert>
      )}
      <Button color="primary" onClick={() => setShowAlert(true)}>
        My Button
      </Button>
    </>
  );
}

export default AlertButton;
