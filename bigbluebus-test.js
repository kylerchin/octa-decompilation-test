
const GtfsRealtimeBindings = require("gtfs-realtime-bindings");
( async () => {

    const response = await fetch("https://gtfs.bigbluebus.com/vehiclepositions.bin", {
  });
  try {
  if (!response.ok) {
    const error = new Error(`${res.url}: ${res.status} ${res.statusText}`);
    error.response = res;
    throw error;
    process.exit(1);
  }

  const buffer = await response.arrayBuffer();
    const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
      new Uint8Array(buffer)
    );
    feed.entity.forEach((entity) => {
      if (entity.vehicle) {
        console.log(entity.vehicle);
      }
    });
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  }
})();