using Autofac;
using Pomo.Infrastructure.Persistance.Raven;

namespace Pomo.Web
{
    public class ApplicationModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterModule(new RavenPersistanceModule()
            {
                ApiKey = ApiKey,
                Url = Url,
                DatabaseName = DatabaseName
            });
        }

        public string DatabaseName { get; set; }

        public string Url { get; set; }

        public string ApiKey { get; set; }
    }
}