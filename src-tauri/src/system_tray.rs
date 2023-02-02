use tauri::{AppHandle, CustomMenuItem, Manager, SystemTray, SystemTrayMenu};

pub const SAVE: &str = "save";
pub const UPDATE: &str = "update";
pub const CONFIG: &str = "config";
pub const AUTO: &str = "auto";
pub const QUIT: &str = "quit";

pub fn build_system_tray() -> SystemTray {
    let save = CustomMenuItem::new(SAVE.to_string(), "保存当前壁纸");
    let update = CustomMenuItem::new(UPDATE.to_string(), "更新壁纸");
    let config = CustomMenuItem::new(CONFIG.to_string(), "设置");
    let auto = CustomMenuItem::new(AUTO.to_string(), "开启自动更新");
    let quit = CustomMenuItem::new(QUIT.to_string(), "退出");
    let tray_menu = SystemTrayMenu::new()
        .add_item(save)
        .add_item(update)
        .add_item(config)
        .add_item(auto)
        .add_item(quit);
    SystemTray::new().with_menu(tray_menu)
}

pub fn on_save_click() {
    //TODO
}
pub fn on_update_click() {
    //TODO
}
pub fn on_config_click(app: &AppHandle) {
    match app.get_window("config") {
        Some(window) => {
            window.set_focus().unwrap();
        }
        None => {
            let _config_window = tauri::WindowBuilder::new(
                app,
                "config",
                tauri::WindowUrl::App("index.html".into()),
            )
            .build()
            .unwrap();
        }
    }
}
pub fn on_auto_click(app: &AppHandle) {
    let item_handel = app.tray_handle().get_item(AUTO);
    item_handel.set_title("关闭自动更新").unwrap();
    //TODO
}
pub fn on_quit_click() {
    std::process::exit(0);
}
