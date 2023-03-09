import React from 'react';
import ReactDom from 'react-dom';
import './Modal.scss';

const Modal = ({ visible, onCancelClick, card }) => {
	if (!visible) {
		return null;
	}

	return ReactDom.createPortal(
		<>
			<div className='modal-wrapper'>
				<div className='modall'>
					<div className='modal-title'>
						<h3 className='activity'>{card.activity}</h3>
						<h3 className='location'>{card.location}</h3>
						<div className='modal-background' style={{ backgroundImage: `url(${card.background})` }}></div>
					</div>
					<div className='modal-description'>
						<button className='close' onClick={onCancelClick}></button>
						<p>{card.description}</p>
						<div className='modal-info'>
							<div>
								<img src='./time.svg' alt='time' />
								<span>Времетраене: {card.time}часа</span>
							</div>
							<div>
								<img src='./wallet.svg' alt='price' />
								<span>Цена: {card.price}лв.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>,
		document.body
	);
};

export default Modal;
