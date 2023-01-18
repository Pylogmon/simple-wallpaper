import React, { Fragment } from 'react'
import { Box } from '@mui/material'

export default function SettingItem(props) {
    const { children, label } = props;
    return (
        <Box sx={{ padding: '5px 16px', display: 'flex', justifyContent: "space-between" }}>
            <span style={{ margin: '8px 0' }}>{label}</span>
            <Fragment children={children} />
        </Box>
    )
}
