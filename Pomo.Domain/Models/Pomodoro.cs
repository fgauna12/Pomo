using System;

namespace Pomo.Domain.Models
{
    public class Pomodoro : IModel
    {
        public string Id { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset CompletedOn { get; set; }
        public TimeSpan Duration { get; set; }
        public bool Completed { get; set; }

        public void Done()
        {
            Completed = true;
            CompletedOn = DateTimeOffset.Now;
            Duration = CompletedOn - CreatedOn;
        }
    }
}