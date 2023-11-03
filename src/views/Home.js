import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink
} from "reactstrap"
import { useHistory } from 'react-router-dom'
import { useState } from "react"

// ** MUI Imports
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import DialogContentText from "@mui/material/DialogContentText"

const Home = () => {
  const history = useHistory()
  const [open, setOpen] = useState(true)
  const handleClose = () => setOpen(false)
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Welcome</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To get started, click "Connections". (Some Guide to get stared.)
          </DialogContentText>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Home
