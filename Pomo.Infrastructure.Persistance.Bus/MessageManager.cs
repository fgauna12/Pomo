using System;
using System.Threading.Tasks;
using Autofac;
using Microsoft.ServiceBus.Messaging;

namespace Pomo.Infrastructure.Persistance.Bus
{
    internal class MessageManager : IMessageManager
    {
        private readonly QueueClient _queueClient;

        public MessageManager(QueueClient queueClient)
        {
            _queueClient = queueClient;
        }

        public async Task SendMessageAsync<T>(T message)
        {
            var m = new BrokeredMessage("This is a test message!");
            await _queueClient.SendAsync(m);
        }

        public async Task RegisterCallback<T>()
        {
            _queueClient.OnMessageAsync(async message =>
            {
                
            });

        }
    }

    public interface IMessageManager
    {
    }

    public class ServiceBusModule : Module
    {
        public string ConnectionString { get; set; }
        public string QueueName { get; set; }

        protected override void Load(ContainerBuilder builder)
        {
            var queueClient = QueueClient.CreateFromConnectionString(ConnectionString, QueueName);
            builder.RegisterInstance(queueClient).AsSelf();
            builder.RegisterType<MessageManager>().As<IMessageManager>();
        }
    }

    internal class Settings : ISettings
    {
        public string ConnectionString { get; set; }
        public string QueueName { get; set; }
    }

    internal interface ISettings
    {
        string ConnectionString { get; set; }
        string QueueName { get; set; }
    }
}
