import React from 'react'
import { Card, List } from '@mui/material'

export default function SettingList(props) {
    const { children } = props
    return (
        <Card sx={{ margin: '8px' }}>
            <List children={children}>
            </List>
        </Card>
    )
}
