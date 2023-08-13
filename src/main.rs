use gtfs_rt;
use protobuf::Message;
mod gtfs_realtime;

#[tokio::main]
async fn main()  {
    let bytes = reqwest::get("https://api.octa.net/GTFSRealTime/protoBuf/VehiclePositions.aspx")
    .await.unwrap()
    .bytes()
    .await.unwrap().to_vec();

println!("body = {:?}", bytes);

let protobuf_message = gtfs_realtime::FeedMessage::parse_from_bytes(&bytes);

match protobuf_message {
    Ok(message) => {
        println!("message = {:?}", message);
    },
    Err(e) => {
        println!("error = {:?}", e);
    }
}
}