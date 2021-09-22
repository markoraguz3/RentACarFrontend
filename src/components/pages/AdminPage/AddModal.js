/** @format */
import { useState } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

const AddModal = ({ show, handleClose, headerText, handleAction, label }) => {
	const [createValue, setCreateValue] = useState('');

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{headerText}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<InputGroup>
					<InputGroup.Text>{label}</InputGroup.Text>
					<FormControl
						onChange={e => {
							setCreateValue(e.target.value);
						}}
					/>
				</InputGroup>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
				<Button
					variant='primary'
					onClick={() => {
						handleAction(createValue);
					}}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddModal;
