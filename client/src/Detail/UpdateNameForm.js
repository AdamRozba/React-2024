import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UpdateNameForm({ show, handleClose, data, handlerMap }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const formData = new FormData(e.target);
          const values = Object.fromEntries(formData);
          handlerMap.updateName({ name: values.name });
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Změnit název</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Název</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={data.name}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zavřít
          </Button>
          <Button variant="success" type="submit">
            Uložit změny
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default UpdateNameForm;
