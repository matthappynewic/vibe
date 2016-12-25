using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vibe.Repositories;

namespace Vibe.Controllers
{
    public class HomeController : Controller
    {
        private SongsRepository songsRepo = new SongsRepository();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
           
            ViewBag.Message = "Your contact page.";

            return View();
        }
        [HttpGet]
        public ActionResult Search(string query)
        {
            return Json(songsRepo.Search(query), JsonRequestBehavior.AllowGet);
        }
    }
}