import React, { useState } from 'react'
import { open } from '@tauri-apps/api/dialog';
import { Select, MenuItem, TextField, InputAdornment, Button } from '@mui/material'
import SettingList from '../components/SettingList';
import SettingItem from '../components/SettingItem';

export default function Base() {
    const [extfile, setExtfile] = useState('');
    async function selectFile() {
        setExtfile(await open())
    }
    return (
        <>
            <SettingList>
                <SettingItem label="壁纸来源">
                    <Select size="small" sx={{ width: 250 }}>
                        <MenuItem value="bing">必应壁纸</MenuItem>
                    </Select>
                </SettingItem>
                <SettingItem label="更新间隔">
                    <TextField size="small" sx={{ width: 250 }} type="number" helperText="1-1440 单位：分钟" />
                </SettingItem>
                <SettingItem label="外部脚本">
                    <TextField
                        size="small"
                        sx={{ width: 250 }}
                        value={extfile}
                        onChange={(e) => { setExtfile(e.target.value) }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Button size="small" onClick={selectFile}>浏览</Button>
                                </InputAdornment>
                            ),
                        }}
                        helperText="正常使用无需设置，当无法正常设置壁纸时，可以使用自己的脚本来设置壁纸"
                    />
                </SettingItem>
            </SettingList>
            <SettingList>
                <SettingItem label="代理">
                    <TextField
                        size="small"
                        sx={{ width: 250 }}
                        type="text"
                        placeholder="eg: http://127.0.0.1:7890"
                    />
                </SettingItem>
            </SettingList>
        </>
    )
}
