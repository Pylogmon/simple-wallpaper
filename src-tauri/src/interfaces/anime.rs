use super::super::utils::set_wallpaper;
use reqwest::{blocking::Client, Proxy};
use serde::Deserialize;
use std::collections::HashMap;

#[derive(Deserialize)]
struct Image {
    images: [HashMap<String, String>; 1],
}

const REQUEST_URL: &str = "https://api.waifu.im/search";
fn proxy() -> Proxy {
    Proxy::https("socks5:/127.0.0.1:7890").unwrap()
}
fn get_img_url() -> String {
    let client = Client::builder().proxy(proxy()).build().unwrap();
    let res = client
        .get(REQUEST_URL)
        .query(&["orientation", "LANDSCAPE"])
        .send()
        .unwrap()
        .json::<Image>()
        .unwrap();
    res.images[0]["url"].clone()
}

fn download(img_url: &str) {
    let client = Client::builder().proxy(proxy()).build().unwrap();
    let res = client.get(img_url).send().unwrap();
}

pub fn run() {
    let img_url = get_img_url();
    download(&img_url);
}
