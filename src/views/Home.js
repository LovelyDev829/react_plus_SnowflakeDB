import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap"
import { useHistory } from 'react-router-dom'

// ** MUI Imports
import Button from "@mui/material/Button"

const Home = () => {
  const history = useHistory()
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Kick start your project 🚀</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>All the best for your new project.</CardText>
          <CardText>
            Please make sure to read our ...
            to understand where to go from here and how to use this application.
          </CardText>
          <Button variant='outlined' onClick={() => history.push('/connections')}>Connections</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
