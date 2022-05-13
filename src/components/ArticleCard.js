import React, {useEffect, useState, useContext} from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap'

export default function ArticleCard(articleProp) {
	
/*const {} = articleProp*/

/* function updatePost(id){
	
	e.preventDefault()

	fetch('http://localhost',{
	method: 'PUT'
	headers: {
		'Content-type': 'application/json',
		Authorization: ''
	},
	body: JSON.stringify({
		co

	})

	})
	


	}*/

/*	
	function deletePost(id){
	e.preventDefault()

	fetch('http://localhost',{
	method: 'DELETE'
	headers: {
		'Content-type': 'application/json',
		Authorization: ''
	}
	})
	.then(result => res.json(result))
	.then(data => {
		if(){
	

		}else {
	

		}

	})



	}
*/


	return(

	<Card>
	<Card.Title>

	<Card.Title>
	<Card.Subtitle>

	</Card.Subtitle>

	<Card.Body>
	<Card.Text>
	<Card.Text>
	{content}
	<Card.Body>

	<Button className="bg-primary" as={Link} to=`/posts/updatePost/${id}`>
	Update Post
	</Button>

	<Button className="bg-primary" onClick={()=> deletePost(`${id}`)}>
	Delete Post
	</Button>

	</Card>





	)
}