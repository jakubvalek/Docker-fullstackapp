using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RestAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace RestAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly CustomerContext _context;
        public CustomersController(CustomerContext context){
            _context = context;
        }
        /*
        [HttpGet]
        public IEnumerable<Customer> GetCustomers()
        {
            return _context.Customers;
        }
        */
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            return await _context.Customers.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            var item = await _context.Customers.FindAsync(id);
            return item == null ? NotFound() : item;
        }

        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            await _context.Customers.AddAsync(customer);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetCustomer", new Customer{ID = customer.ID}, customer);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Customer>> PutCustomer(int id, Customer customer)
        {
            if(id != customer.ID){
                return BadRequest();
            }

            _context.Entry(customer).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Customer>> DeleteCustomer(int id)
        {
            var customer = await _context.Customers.Where(c => c.ID == id).FirstOrDefaultAsync();
            _context.Entry(customer).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
            
            return Ok();
        }

    }
}
