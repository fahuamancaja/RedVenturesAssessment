using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PointsController : BaseApiController
    {
        private readonly IPointRepository _pointRepository;
        public PointsController(IPointRepository pointRepository)
        {
            _pointRepository = pointRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoyaltyProgram>>> GetUsers()
        {
            var loyaltyPrograms = await _pointRepository.GetLoyaltyProgramsAsync();
            return Ok(loyaltyPrograms);
        }

        // api/users/3
        [HttpGet("{pointId}")]
        public async Task<ActionResult<LoyaltyProgram>> GetUser(string pointId)
        {
            return await _pointRepository.GetLoyaltyProgramAsync(pointId);

        }
    }
}