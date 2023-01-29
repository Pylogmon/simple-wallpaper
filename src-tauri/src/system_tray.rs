use tauri::{AppHandle, CustomMenuItem, Manager, SystemTray, SystemTrayMenu};

pub const SAVE: &str = "save";
pub const UPDATE: &str = "update";
pub const CONFIG: &str = "config";
pub const START: &str = "start";
pub const QUIT: &str = "quit";

pub fn build_system_tray() -> SystemTray {
    let save = CustomMenuItem::new(SAVE.to_string(), "保存当前壁纸");
    let update = CustomMenuItem::new(UPDATE.to_string(), "更新壁纸");
    let config = CustomMenuItem::new(CONFIG.to_string(), "设置");
    let start = CustomMenuItem::new(START.to_string(), "开启自动更新");
    let quit = CustomMenuItem::new(QUIT.to_string(), "退出");
    let tray_menu = SystemTrayMenu::new()
        .add_item(save)
        .add_item(update)
        .add_item(config)
        .add_item(start)
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
pub fn on_start_click() {
    //TODO
}
pub fn on_quit_click() {
    std::process::exit(0);
}
