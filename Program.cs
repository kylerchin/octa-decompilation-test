

using System.Net;
using ProtoBuf;
using TransitRealtime;

namespace OCTATest
{
    class Program
    {
        static void Main(string[] args)
        {
            WebRequest req = HttpWebRequest.Create("https://api.octa.net/GTFSRealTime/protoBuf/VehiclePositions.aspx");
            FeedMessage feed = Serializer.Deserialize<FeedMessage>(req.GetResponse().GetResponseStream());
            foreach (FeedEntity entity in feed.Entities) {
            // Print the vehicle ID
            //Console.WriteLine("Vehicle ID: {0}", entity);
            }
        }
    }
}
