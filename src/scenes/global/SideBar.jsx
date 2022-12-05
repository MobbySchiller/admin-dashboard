import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
// import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
// import ContactOutlinedIcon from '@mui/icons-material/ContactOutlined'
// import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
// import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
// import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
// import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const SideBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    return (
        <div>SideBar</div>
    )
}

export default SideBar