using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNet.Mvc;
using Newtonsoft.Json;

namespace ZLO.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> Zillow(string address, string cityStateZip, bool rentZestimate = false)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://www.zillow.com/webservice/GetSearchResults.htm");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync($"?address={address}&citystatezip={cityStateZip}&rentzestimate={rentZestimate.ToString()}&zws-id=X1-ZWz1dyb53fdhjf_6jziz");
                var responseStream = await response.Content.ReadAsStreamAsync();
                var xmlResponse = new XmlDocument();
                xmlResponse.Load(responseStream);
                var jsonResponse = JsonConvert.DeserializeObject(JsonConvert.SerializeXmlNode(xmlResponse));

                return Json(jsonResponse);
            }
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
