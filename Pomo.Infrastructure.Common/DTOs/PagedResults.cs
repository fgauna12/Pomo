using System.Collections.Generic;
using Pomo.Domain.Models;

namespace Pomo.Infrastructure.Common.DTOs
{
    public class PagedResults<T> where T : IModel
    {
        public IList<T> Results { get; set; }
        public int Total { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }
}