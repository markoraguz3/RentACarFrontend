/** @format */

import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router';
import { AuthContext } from '../../../Contexts/AuthContext';
import { commentServices } from '../../../services/comments.services';

const Comments = () => {
	const { id } = useParams();
	const { userId } = useContext(AuthContext);
	const [commentsData, setCommentsData] = useState([]);
	const [commentText, setCommentText] = useState();
	const [errorText, setErrorText] = useState();

	useEffect(() => {
		commentServices
			.getComments(id)
			.then(res => setCommentsData(res.data))
			.catch(err => console.log(err));
	}, []);

	return (
		<section>
			<div class='container'>
				<div className='card shadow'>
					<div className='card-body'>
						<div className='row'>
							<div class='col-xs-1' align='center'>
								<h4>Komentari</h4>
							</div>
						</div>
					</div>
				</div>
				<div class='col-sm-12'>
					<div class='card'>
						<div class='card-body'>
							<h5 class='card-title'>Napiši Komentar</h5>
							<hr />
							<form>
								<div class='container'>
									<textarea
										style={{ width: '100%' }}
										onChange={event => {
											setCommentText(event.target.value);
										}}
									/>
									<p style={{ color: 'red' }}>{errorText}</p>
									<input
										type='submit'
										value='Objavi'
										onClick={e => {
											e.preventDefault();
											if (!commentText) {
												setErrorText('*obavezno polje');
											} else {
												setErrorText();
												commentServices
													.createComment({
														text: commentText,
														userName: 'UserName',
														userId: userId,
														carId: id,
													})
													.then(res => console.log(res))
													.catch(err => console.log(err.response));
											}
										}}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class='row mb-5'>
					{commentsData.map(x => (
						<div class='col-sm-12'>
							<div class='card'>
								<div class='card-body'>
									<h5 class='card-title'>{x.userName}</h5>
									<p class='card-text'>{x.text}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Comments;
