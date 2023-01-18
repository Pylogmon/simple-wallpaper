import {
    appConfigDir,
    appCacheDir,
    appDataDir,
    join
} from '@tauri-apps/api/path';

const appConfigDirPath = await appConfigDir();
const appCacheDirPath = await appCacheDir();
const appDataDirPath = await appDataDir();

export const settingFilePath = await join(appConfigDirPath, 'config.json');
