using Autofac;
using Raven.Client;
using Raven.Client.Document;
using Raven.Client.Indexes;

namespace Pomo.Infrastructure.Persistance.Raven
{
    public class RavenPersistanceModule : Module
    {
        public string ApiKey { get; set; }
        public string Url { get; set; }
        public string DatabaseName { get; set; }
        protected override void Load(ContainerBuilder builder)
        {
            var documentStore = new DocumentStore()
            {
                ApiKey = ApiKey,
                Url = Url,
                DefaultDatabase = DatabaseName
            };
            documentStore.Initialize();
            IndexCreation.CreateIndexes(ThisAssembly, documentStore);
            builder.RegisterInstance(documentStore).As<IDocumentStore>();
        }
    }
}