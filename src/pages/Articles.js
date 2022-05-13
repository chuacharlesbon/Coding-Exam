import {useState, useeffect} from 'react'
import ArticleCard from './components/ArticleCard'
import {Row, Col} from 'react-bootstrap'

export default function Articles() {

const [articles, setArticles] = useState([])



useEffect(() => {

	fetch('http://path/to',{
	method: 'GET',
	headers: {
		"Authorization": `localStorage.getItem()`
	}

	})
})


	return(

	<Row>
	<Col xs={12} md={10} lg={8}>
	{articles}

	</Col>
	</Row>



		)
	}