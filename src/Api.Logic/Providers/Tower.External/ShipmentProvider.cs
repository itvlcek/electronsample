using System;
using Api.Logic.Model.Tower_External;
using System.Linq;
using System.Collections.Generic;

namespace Api.Logic.Providers.Tower.External
{
    public class ShipmentProvider : IDisposable
    {
        private TowerExternal DbContext = new TowerExternal();

        public ShipmentJsonDefs GetById(string shipmentId)
        {
            return DbContext.ShipmentJsonDefs.FirstOrDefault(x => shipmentId == x.ShipmentId);
        }

        public List<ShipmentJsonDefs> GetByIds(string[] shipmentIds)
        {
            return DbContext.ShipmentJsonDefs.Where(x => shipmentIds.Contains(x.ShipmentId)).ToList();
        }

        public void Dispose()
        {
            DbContext?.Dispose();
        }
    }
}
