import React  from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
} from "constants/ActionTypes"

const SideBar = () => {
  const { drawerType } = useSelector(
    ({ settings }) => settings
  )

  let drawerStyle = drawerType.includes(FIXED_DRAWER)
    ? "d-xl-flex"
    : drawerType.includes(COLLAPSED_DRAWER)
    ? ""
    : "d-flex"

  return <div className={` d-none ${drawerStyle}`}></div>
}

export default withRouter(SideBar)
