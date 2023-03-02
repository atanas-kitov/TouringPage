import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './ContactUs.scss';

const ContactUs = () => {
	return (
		<div className='contact-us'>
			<Container>
				<Row>
					<Col xs={10}>
						<div className='contact-logo'></div>
						<div className='contact-background'>
							<div className='text-container'>
								<h3>
									Не се колебай <br />
									свържи се с нас
								</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi quia aperiam
									voluptate earum, velit quidem illum temporibus nemo, minus sit debitis unde. Rerum,
									id fugiat sunt ducimus magni excepturi harum pariatur quisquam quis accusantium
									repellendus earum quasi quod quaerat officiis repellat itaque ut delectus, illum
									maiores hic tempore nam?
								</p>
								<button>Пиши ни</button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ContactUs;
