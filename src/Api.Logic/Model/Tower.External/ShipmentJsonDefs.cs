using System;
using System.Collections.Generic;

namespace Api.Logic.Model.Tower_External
{
    public partial class ShipmentJsonDefs
    {
        public int Id { get; set; }
        public string ShipmentId { get; set; }
        public DateTime CalDay { get; set; }
        public string DriverId { get; set; }
        public string ShipPoint { get; set; }
        public string TourType { get; set; }
        public string JsonDefinition { get; set; }
        public string TourNumber { get; set; }
    }
}
