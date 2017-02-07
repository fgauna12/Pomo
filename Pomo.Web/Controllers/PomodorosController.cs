using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using Pomo.Domain.Models;
using Pomo.Infrastructure.Common.DTOs;
using Raven.Client;

namespace Pomo.Web.Controllers
{
    [Route("api/[controller]")]
    public class PomodorosController : RavenController
    {
        public PomodorosController(IDocumentStore documentStore) : base(documentStore)
        {
        }

        // GET api/pomodoros
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            RavenQueryStatistics stats;
            var query = DocumentSessionAsync.Query<Pomodoro>().Statistics(out stats);
            var result = new PagedResults<Pomodoro>()
            {
                PageNumber = 0,
                Results = await query.ToListAsync(),
                Total = stats.TotalResults
            };
            return Ok(result);
        }

        // GET api/pomodoros/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var pomodoro = await DocumentSessionAsync.LoadAsync<Pomodoro>(id);
            return Ok(pomodoro);
        }

        // POST api/pomodoros/5/done
        [HttpPost("{id}/done")]
        public async Task<IActionResult> Post(string id)
        {
            var pomodoro = await DocumentSessionAsync.LoadAsync<Pomodoro>(id);
            pomodoro.Done();
            await DocumentSessionAsync.SaveChangesAsync();
            return Ok(pomodoro);
        }

        // POST api/pomodoros
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Pomodoro pomodoro)
        {
            await DocumentSessionAsync.StoreAsync(pomodoro);
            await DocumentSessionAsync.SaveChangesAsync();
            return Ok(pomodoro);
        }

        // PUT api/pomodoros/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody]Pomodoro pomodoro)
        {
            if (id != pomodoro.Id) return BadRequest("Invalid ID");
            await DocumentSessionAsync.StoreAsync(pomodoro);
            await DocumentSessionAsync.SaveChangesAsync();
            return Ok(pomodoro);
        }
    }

    public abstract class RavenController : Controller
    {
        private readonly IDocumentStore _documentStore;

        protected RavenController(IDocumentStore documentStore)
        {
            _documentStore = documentStore;
        }

        public IAsyncDocumentSession DocumentSessionAsync { get; private set; }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            DocumentSessionAsync = _documentStore.OpenAsyncSession();
        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
            DocumentSessionAsync?.Dispose();
        }
    }
}
