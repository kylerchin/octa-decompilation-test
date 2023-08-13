from google.transit import gtfs_realtime_pb2
import requests

print("testing octa")

feed = gtfs_realtime_pb2.FeedMessage()
response = requests.get('https://api.octa.net/GTFSRealTime/protoBuf/VehiclePositions.aspx')
feed.ParseFromString(response.content)
for entity in feed.entity:
  print(entity)