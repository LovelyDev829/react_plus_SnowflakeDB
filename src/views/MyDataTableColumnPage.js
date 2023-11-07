import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { Trash, Edit, Search } from 'react-feather'
import '../App.css'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import DialogContentText from "@mui/material/DialogContentText"
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Autocomplete from '@mui/material/Autocomplete'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useHistory } from 'react-router-dom'

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


const ConnectionsPage = () => {
  const history = useHistory()
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle><span className='back-tag' onClick={() => history.push('/my-data')}>My Data</span>
           {' > '} <span className='back-tag' onClick={() => history.push('/my-data-table')}>Table</span> {' > '}  Column</CardTitle>
        </CardHeader>
        <CardBody>
          <DialogTitle id='alert-dialog-title'>Table Name ABC</DialogTitle>
          <DialogContent>
            <DialogContentText style={{textAlign: "center"}}>
              (Clustered by XXX - if available  |  created YYYY-MM-DD  |  Last Updated YYYY-MM-DD)
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Graph (chart with daily row count and freshness line)
              </Grid>
              <Grid item xs={6}>
                Graph (chart with daily row count and freshness line)
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <Button  onClick={() => history.push('/my-data-table')} variant="outlined" color='error'>Back</Button>
          </DialogActions>
        </CardBody>
      </Card>
    </div>
  )
}

export default ConnectionsPage
