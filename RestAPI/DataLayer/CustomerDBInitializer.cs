using System;
using System.Data;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using RestAPI.Models;

namespace RestAPI.DataLayer
{
    public static class CustomerDBInitializer
    {
        public static async void Prep(IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.CreateScope())
            {
                CustomerContext context = scope.ServiceProvider.GetService<CustomerContext>();
                context.Database.Migrate();
                // bad, only for testing purposes -- seed the db if empty
                bool isAny = await context.Customers.AnyAsync();
                if(!isAny)
                {
                    context.Customers.AddRange(
                        new Customer() {Name="Jakub", Surname="Valek", Age = 22},
                        new Customer() {Name="Jack", Surname="Sparrow", Age = 28},
                        new Customer() {Name="Carl", Surname="Johnson", Age = 24},
                        new Customer() {Name="Jim", Surname="Raynor", Age = 42}
                    );
                    context.SaveChanges();
                }
            }
        }
        
    }
}
