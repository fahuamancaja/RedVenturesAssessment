using System;

namespace API.Entities
{
    public class LoyaltyProgram
    {
        public int id { get; set; }
        public string point_id { get; set; }
        public string tpg_valuation { get; set; }
        public string name { get; set; }
        public string icon_url { get; set; }
        public string website_url { get; set; }
        public string loyalty_unit { get; set; }
        public string type { get; set; }
        public string active { get; set; }
        public string create_by { get; set; }
        public string create_date { get; set; }
        public string update_by { get; set; }
        public string update_date { get; set; }
    }
}
