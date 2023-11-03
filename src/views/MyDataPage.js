import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { styled } from '@mui/material/styles'
import { useState } from "react"
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

function createData(connection, database, schema, table) {
  return { connection, database, schema, table }
}

const rows = [
  createData('connection 01', 'database 01', 'schema 01', 'table 01'),
  createData('connection 02', 'database 02', 'schema 02', 'table 02'),
  createData('connection 03', 'database 03', 'schema 03', 'table 03')
]

const top100Films = [
  { label: 'Option1', year: 1994 },
  { label: 'Option2', year: 1972 },
  { label: 'Option3', year: 1974 },
  { label: 'Option4', year: 2008 }
]

const ConnectionsPage = () => {
  const [openOne, setOpenOne] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>My Data</CardTitle>
        </CardHeader>
        <CardBody>
          <Grid container spacing={2}>
            <Grid item xs={2.4}>
              <TextField
                label="Search"
                variant="standard"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Search size={20} /></InputAdornment>
                }}
              />
            </Grid>
            <Grid item xs={2.4}>
              <Autocomplete
                disablePortal
                variant="standard"
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="Connection(s)" />}
              />
            </Grid>
            <Grid item xs={2.4}>
              <Autocomplete
                disablePortal
                variant="standard"
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="Database(s)" />}
              />
            </Grid>
            <Grid item xs={2.4}>
              <Autocomplete
                disablePortal
                variant="standard"
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="Schema(s)" />}
              />
            </Grid>
            <Grid item xs={2.4}>
              <Autocomplete
                disablePortal
                variant="standard"
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="Table(s)" />}
              />
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow style={{textAlign: 'center'}}>
                  <StyledTableCell align="center">Connection</StyledTableCell>
                  <StyledTableCell align="center">DataBase</StyledTableCell>
                  <StyledTableCell align="center">Schema</StyledTableCell>
                  <StyledTableCell align="center">Table</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.connection} className='table-row' style={{cursor: "pointer"}}
                  onClick={() => { setOpenOne(true); setOpenTwo(false) }}>
                    <StyledTableCell component="th" scope="row">
                      {row.connection}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.database}</StyledTableCell>
                    <StyledTableCell align="center">{row.schema}</StyledTableCell>
                    <StyledTableCell align="center">{row.table}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
      <Card>
        <CardBody style={!openOne ? {display: 'none'} : {}}>
          <DialogTitle id='alert-dialog-title'>Table Name ABC</DialogTitle>
          <DialogContent>
            <DialogContentText style={{textAlign: "center"}}>
              (Clustered by XXX - if available  |  created YYYY-MM-DD  |  Last Updated YYYY-MM-DD)
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TableContainer component={Paper}>
                  <Table  aria-label="customized table">
                    <TableHead>
                      <TableRow style={{textAlign: 'center'}}>
                        <StyledTableCell align="center">Column</StyledTableCell>
                        <StyledTableCell align="center">Data Type</StyledTableCell>
                        <StyledTableCell align="center">Score</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.connection} className='table-row' style={{cursor: "pointer"}}
                        onClick={() => setOpenTwo(true)}>
                          <StyledTableCell component="th" scope="row">
                            {row.connection}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.database}</StyledTableCell>
                          <StyledTableCell align="center">{row.schema}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={6}>
                Graph (chart with daily row count and freshness line)
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <Button onClick={() => { setOpenOne(false); setOpenTwo(false) }} variant="outlined" color='error'>Close</Button>
          </DialogActions>
        </CardBody>
      </Card>

      <Card>
        <CardBody style={!openTwo ? {display: 'none'} : {}}>
          <DialogTitle id='alert-dialog-title'>Column A</DialogTitle>
          <DialogContent>
            <DialogContentText style={{textAlign: "center"}}>
              (Data Type)
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Graph (chart with daily NULL count)
              </Grid>
              <Grid item xs={6}>
                Graph (if numeric or date/timestamp, show range of values daily.)
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <Button onClick={() => setOpenTwo(false) } variant="outlined" color='error'>Close</Button>
          </DialogActions>
        </CardBody>
      </Card>
    </div>
  )
}

export default ConnectionsPage
