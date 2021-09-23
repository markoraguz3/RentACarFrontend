/** @format */

import { Modal, Button } from 'react-bootstrap';
const ConfirmModal = ({ show, handleClose, handleAction, msg }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Jeste li sigurni?</Modal.Title>
			</Modal.Header>
			<Modal.Body>{msg}</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
				<Button variant='danger' onClick={handleAction}>
					Potvrdi
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ConfirmModal;
