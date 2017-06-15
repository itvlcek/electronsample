using Api.Logic.Providers.Tower.External;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class ShipmentController : Controller
    {
        private ShipmentProvider ShipmentProvider = new ShipmentProvider();

        // GET api/shipment
        [HttpGet("{id}", Name = "GetShipment")]
        public IActionResult GetById(string id)
        {
            return Json(ShipmentProvider.GetById(id));
        }

        public void Dispose()
        {
            base.Dispose();
            ShipmentProvider?.Dispose();
        }
    }
}
