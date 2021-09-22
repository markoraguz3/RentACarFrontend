/** @format */
import { useState, useEffect } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

const UpdateModal = ({
	show,
	handleClose,
	headerText,
	handleAction,
	label,
	data,
}) => {
	const [updateValue, setUpdateValue] = useState(data?.name);

	useEffect(() => {
		setUpdateValue(data?.name);
	}, [data?.name]);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{headerText}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<InputGroup>
					<InputGroup.Text>{label}</InputGroup.Text>
					<FormControl
						defaultValue={data?.name}
						onChange={e => {
							setUpdateValue(e.target.value);
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
						handleAction(data.id, updateValue);
					}}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default UpdateModal;
