import React from 'react'
import { Box, Card, Divider, List, Select, MenuItem, Grid } from '@mui/material'
import logo from '../../assets/logo.png';
import SettingList from '../components/SettingList';
import SettingItem from '../components/SettingItem';

export default function Base() {
    return (
        <>
            <Box sx={{ paddingTop: '16px', textAlign: "center" }}>
                <img src={logo} style={{ width: '200px' }}></img>
            </Box>
            <Divider />
            <SettingList>
                <SettingItem label="壁纸来源">
                    <Select size="small" sx={{ width: 150 }}>
                        <MenuItem value="debug">Debug</MenuItem>
                    </Select>
                </SettingItem>
                <SettingItem label="壁纸来源">
                    <Select size="small" sx={{ width: 150 }}>
                        <MenuItem value="debug">Debug</MenuItem>
                    </Select>
                </SettingItem>
                <SettingItem label="壁纸来源">
                    <Select size="small" sx={{ width: 150 }}>
                        <MenuItem value="debug">Debug</MenuItem>
                    </Select>
                </SettingItem>
            </SettingList>
        </>
    )
}
