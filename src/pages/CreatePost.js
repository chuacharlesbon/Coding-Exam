import {useState, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {Row, Col, Form, Button, Container} from 'react-bootstrap'

export default function CreatePost() {

const [done, setDone] = useState(false)

const [title, setTitle] = useState('')

const [content, setContent] = useState('')

function createPost(e){

	e.preventDefault()

	fetch('https://',{
	method: 'POST',
	headers: {

	},
	body: JSON.stringify(



		)

	})

	setDone(true)
	setTitle('')
	setContent('')
}

	return(

	(done === true)?

	<Navigate to="/" />

	:

	<>
	<Row>
	<h3>Create A Post section</h3>
	</Row>


	<Container className="bg-secondary mx-auto text-center p-2 m-2">
	<Form onSubmit={e=> createPost(e)}>

	<Form.Group controlId="title">
	<Form.Label>Write to Post:</Form.Label>
	<Form.Control type="text" placeholder="Something new" value={content} onChange={e => setContent(e.target.value)}/>
	<Form.Text className="text-secondary">Maximum characters: 500</Form.Text>
	</Form.Group>


	<Button className="bg-primary" type="submit">Post</Button>
	<Button className="bg-primary" onClick={e => setContent('')}>Clear</Button>

	</Form>
	</Container>

	</>

		)

}