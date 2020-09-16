import React, { useState } from 'react'

// materual-ui
import MaterialUITabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'

// react-router
import { useHistory, useLocation } from "react-router-dom"

const Tabs = () => {

    const {pathname: path} = useLocation()

    const [tabsValue, setTabsValue] = useState(path === '/chart' ? 1 : 0)

    const history = useHistory()

    const handleTabsChange = (event, newValue) => {
        const routerValues = ['', '/chart']
        history.push(routerValues[newValue])
        setTabsValue(newValue)
    }

    return (
        <AppBar position="static" color='primary'>
            <MaterialUITabs
            value={tabsValue}
            onChange={handleTabsChange}
            aria-label="disabled tabs example"
            variant="fullWidth"
            >
                <Tab label="TASKS LOG" />
                <Tab label="TASKS CHART" />
            </MaterialUITabs>
      </AppBar>
    );
}

export default Tabs;
