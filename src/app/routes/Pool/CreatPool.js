import React, { useState } from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { NotificationContainer, NotificationManager } from "react-notifications"
import Moment from "moment"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { createPool } from "../../../service/pool"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const CreatPool = ({ open, handleClose, handleGetListPool }) => {
  const classes = useStyles()
  const [poolList, setPoolList] = useState({
    projectName: "",
    tokenSymbol: "",
    supply: "",
    tokenAddress: "",
    saleDate: Moment(new Date()).format("YYYY-MMM-DD hh:mm"),
    amount: "",
    typeOfSale: "",
    forPrivateSale: "",
    swapRate: "",
    softCap: "",
    hardCap: "",
    minAllocation: "",
    maxAllocation: "",
    startTime: Moment(new Date()).format("YYYY-MMM-DD hh:mm"),
    endTime: Moment(new Date()).format("YYYY-MMM-DD hh:mm"),
  })
  const [error, setError] = useState({
    projectName: false,
    tokenSymbol: false,
    tokenAddress: false,
    typeOfSale: false,
    softCap: false,
    hardCap: false,
  })
  const [errorNumber, setErrorNumber] = useState({
    supply: false,
    amount: false,
    forPrivateSale: false,
    swapRate: false,
    minAllocation: false,
    maxAllocation: false,
  })
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState("")
  const handleOnchange = (e) => {
    const value = e.target.value
    if (value) {
      setError({ ...error, [e.target.name]: false })
    } else {
      setError({ ...error, [e.target.name]: true })
    }
    setPoolList({
      ...poolList,
      [e.target.name]: value,
    })
  }
  const handleOnchangeNumber = (e) => {
    const value = e.target.value
    if (typeof Number(value) === "number" && Number(value) > 0) {
      setErrorNumber({ ...errorNumber, [e.target.name]: false })
    } else {
      setErrorNumber({ ...errorNumber, [e.target.name]: true })
    }
    setPoolList({
      ...poolList,
      [e.target.name]: value,
    })
  }
  const handleSelectDate = (e, name) => {
    const date = Moment(e).format("YYYY-MMM-DD hh:mm")
    setPoolList({
      ...poolList,
      [name]: date,
    })
  }
  const apiCreatePool = async () => {
    try {
      const res = await createPool(poolList)
      if (res.data.data) {
        handleClose()
        handleGetListPool()
      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleCreate = () => {
    const checkA = Object.values(errorNumber).every((item) => !item)
    const checkB = Object.values(poolList).every((item) => !!item)
    const checkC = Object.values(error).every((item) => !item)
    if (checkA && checkC && checkB) {
      apiCreatePool()
      setSuccess("The record have been created ")
      setTimeout(() => {
        setSuccess("")
      }, 100)
    } else {
      setMessage("Please enter all fields !!")
      setTimeout(() => {
        setMessage("")
      }, 100)
    }
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle id="form-dialog-title">Add new</DialogTitle>
        <DialogContent>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField
                  error={error.projectName}
                  helperText={error.projectName ? "The field is required" : ""}
                  value={poolList.projectName}
                  margin="dense"
                  variant="outlined"
                  id="ProjectName"
                  name="projectName"
                  label="Project Name	"
                  type="text"
                  fullWidth
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={error.tokenSymbol}
                  helperText={error.tokenSymbol ? "The field is required" : ""}
                  value={poolList.tokenSymbol}
                  margin="dense"
                  id="TOKENSymbol"
                  variant="outlined"
                  label="Token Symbol"
                  name="tokenSymbol"
                  type="text"
                  fullWidth
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={errorNumber.supply}
                  helperText={
                    errorNumber.supply
                      ? "The field is must be greater than 0"
                      : ""
                  }
                  value={poolList.supply}
                  margin="dense"
                  id="Supply"
                  variant="outlined"
                  label="Supply"
                  name="supply"
                  type="text"
                  fullWidth
                  onChange={handleOnchangeNumber}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={error.tokenAddress}
                  helperText={error.tokenAddress ? "The field is required" : ""}
                  value={poolList.tokenAddress}
                  margin="dense"
                  id="TokenAddress"
                  variant="outlined"
                  label="Token Address"
                  type="text"
                  name="tokenAddress"
                  fullWidth
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={errorNumber.amount}
                  helperText={
                    errorNumber.amount
                      ? "The field is must be greater than 0"
                      : ""
                  }
                  value={poolList.amount}
                  margin="dense"
                  id="Amount"
                  variant="outlined"
                  label="Amount"
                  name="amount"
                  type="text"
                  fullWidth
                  onChange={handleOnchangeNumber}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <MuiPickersUtilsProvider style utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="saleDate"
                    name="saleDate"
                    label="Sale Date"
                    format="MM/dd/yyyy"
                    value={poolList.saleDate}
                    inputVariant="outlined"
                    onChange={(e) => {
                      handleSelectDate(e, "saleDate")
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  margin="dense"
                  id="typeofSale"
                  variant="outlined"
                  label="Type of Sale"
                  name="typeOfSale"
                  type="text"
                  fullWidth
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={errorNumber.forPrivateSale}
                  helperText={
                    errorNumber.forPrivateSale
                      ? "The field is must be greater than 0"
                      : ""
                  }
                  value={poolList.forPrivateSale}
                  margin="dense"
                  id="forPrivateSale"
                  variant="outlined"
                  label="For Private Sale"
                  name="forPrivateSale"
                  onChange={handleOnchangeNumber}
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={errorNumber.swapRate}
                  helperText={
                    errorNumber.swapRate
                      ? "The field is must be greater than 0"
                      : ""
                  }
                  value={poolList.swapRate}
                  margin="dense"
                  id="swapRate"
                  variant="outlined"
                  label="Swap Rate"
                  type="text"
                  name="swapRate"
                  fullWidth
                  onChange={handleOnchangeNumber}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={error.softCap}
                  helperText={error.softCap ? "The field is required" : ""}
                  value={poolList.softCap}
                  margin="dense"
                  id="softCap"
                  variant="outlined"
                  label="softCap"
                  type="text"
                  name="softCap"
                  fullWidth
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={error.hardCap}
                  helperText={error.hardCap ? "The field is required" : ""}
                  value={poolList.hardCap}
                  margin="dense"
                  id="hardCap"
                  variant="outlined"
                  name="hardCap"
                  label="Hard Cap"
                  type="text"
                  fullWidth
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={errorNumber.minAllocation}
                  helperText={
                    errorNumber.minAllocation
                      ? "The field is must be greater than 0"
                      : ""
                  }
                  value={poolList.minAllocation}
                  margin="dense"
                  id="min"
                  variant="outlined"
                  label="Min Allocation"
                  name="minAllocation"
                  type="text"
                  fullWidth
                  onChange={handleOnchangeNumber}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  error={errorNumber.maxAllocation}
                  helperText={
                    errorNumber.maxAllocation
                      ? "The field is must be greater than 0"
                      : ""
                  }
                  value={poolList.maxAllocation}
                  margin="dense"
                  id="maxAllocation"
                  variant="outlined"
                  label="Max Allocation"
                  type="text"
                  name="maxAllocation"
                  fullWidth
                  onChange={handleOnchangeNumber}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <MuiPickersUtilsProvider style utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    full-width
                    margin="normal"
                    id="startTime"
                    name="startTime"
                    label="Start Time"
                    format="MM/dd/yyyy"
                    value={poolList.saleDate}
                    inputVariant="outlined"
                    onChange={(e) => {
                      handleSelectDate(e, "startTime")
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} md={4}>
                <MuiPickersUtilsProvider style utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    full-width
                    margin="normal"
                    id="endTime"
                    name="endTime"
                    label="End Time"
                    format="MM/dd/yyyy"
                    value={poolList.saleDate}
                    inputVariant="outlined"
                    onChange={(e) => {
                      handleSelectDate(e, "endTime")
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="d-flex px-4">
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreate}
              className="mx-2"
            >
              SAVE
            </Button>
          </div>
        </DialogActions>
      </Dialog>
      {message && NotificationManager.error(message)}
      {success && NotificationManager.success(success)}
      <NotificationContainer />
    </div>
  )
}
export default CreatPool
