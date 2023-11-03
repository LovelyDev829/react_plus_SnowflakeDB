import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { styled } from '@mui/material/styles'
import { useState } from "react"
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Trash, Edit } from 'react-feather'
import '../App.css'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import DialogContentText from "@mui/material/DialogContentText"
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function createData(name, source, user) {
  return { name, source, user }
}

const rows = [
  createData('My Database', 'Snowflake', 'my_user'),
  createData('Test DB', 'snowflake', 'test_user')
]

const ConnectionsPage = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connections List</CardTitle>
      </CardHeader>
      <CardBody>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow style={{textAlign: 'center'}}>
                <StyledTableCell align="center">Connection Name</StyledTableCell>
                <StyledTableCell align="center">Data Source</StyledTableCell>
                <StyledTableCell align="center">User Name</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name} className='table-row'>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.source}</StyledTableCell>
                  <StyledTableCell align="center">{row.user}</StyledTableCell>
                  <StyledTableCell align="center" style={{width : "0px"}}>
                    <Stack spacing={2} direction="row" align="right" style={{width: "justify-content"}}>
                      <Button variant="outlined" startIcon={<Edit size={20} />}>Edit</Button>
                      <Button variant="outlined" color='error' startIcon={<Trash size={20} />}>Delete</Button>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{paddingTop: "15px", width: "100%", boxSizing: "border-box", textAlign: "center"}}>
          <Button style={{width: "100%"}} variant="outlined" onClick={() => setOpen(true)}>Add a New Connection</Button>
        </div>
      </CardBody>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Create A New Connection</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="Connection Name" variant="standard"/>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Data Source</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="snowflake" control={<Radio />} label="Snowflake" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField label="Account Name" variant="standard"/>
            </Grid>
            <Grid item xs={6}>
              <TextField label="User Name" variant="standard"/>
            </Grid>
            <Grid item xs={6}>
              <TextField label="Password" variant="standard"/>
            </Grid>
            <Grid item xs={6}>
              <TextField label="Warehouse Name" variant="standard"/>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose} variant="outlined">Test Connection</Button>
          <div style={{flex: '1 0 0'}} />
          <Button onClick={handleClose} variant="outlined">Create</Button>
          <Button onClick={handleClose} variant="outlined" color='error'>Close</Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default ConnectionsPage
