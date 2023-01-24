#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod utils;
use tauri::{CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu};
use utils::set_wallpaper::set_wallpaper;

fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "退出");
    let config = CustomMenuItem::new("config".to_string(), "设置");
    let tray_menu = SystemTrayMenu::new().add_item(quit).add_item(config);
    let system_tray = SystemTray::new().with_menu(tray_menu);
    tauri::Builder::default()
        //注册js调用函数
        .invoke_handler(tauri::generate_handler![set_wallpaper])
        //加载托盘图标
        .system_tray(system_tray)
        //绑定托盘事件
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
                "quit" => {
                    std::process::exit(0);
                }
                "config" => match app.get_window("config") {
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
                },
                _ => {}
            },
            _ => {}
        })
        .build(tauri::generate_context!())
        .expect("error while running tauri application")
        .run(|_app_handle, event| match event {
            tauri::RunEvent::ExitRequested { api, .. } => {
                api.prevent_exit();
            }
            _ => {}
        });
}
