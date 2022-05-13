import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Row, Col, Form} from 'react-bootstrap'

export default function UpdatePost(articleProp){

const {content} = articleProp

const nd = new Date()

const [updated, setUpdated] = useState(false)

const [newContent, setNewContent] = useState('')

/*
	function updatePost(e){
		
		e.preventDefault()

	fetch('https://path/to', {
	method: 'PUT',
	headers: {
		Authorization: `localStorage.getItem()`
	},
	body: JSON.stringify({
		content: content,
		modified: new Date()

	})

	})	

	
	}
	
*/

	return(

	(updated === true)?
	<Navigate to="/" />

	:

	<>
	<Row>
	<h3>Update A Post section</h3>
	</Row>


	<Container className="bg-secondary mx-auto text-center p-2 m-2">
	<Form onSubmit={e=> updatePost(e)}>

	<Form.Group controlId="title">
	<Form.Label>Write to Post:</Form.Label>
	<Form.Control type="text" placeholder={content} value={newContent} onChange={e => setNewContent(e.target.value)}/>
	<Form.Text className="text-secondary">Maximum characters: 500</Form.Text>
	</Form.Group>


	<Button className="bg-primary" type="submit">Post</Button>
	<Button className="bg-primary" onClick={e => setNewContent('')}>Clear</Button>

	</Form>
	</Container>

	</>


		)
}