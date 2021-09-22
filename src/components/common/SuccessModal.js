/** @format */
import { Modal, Button } from 'react-bootstrap';
const SuccessModal = ({ show, handleClose, successMsg }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Uspijeh</Modal.Title>
			</Modal.Header>
			<Modal.Body>{successMsg}</Modal.Body>
			<Modal.Footer>
				<Button variant='primary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default SuccessModal;
