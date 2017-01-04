using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Vibe.Controllers
{
    public class PlaylistsController : Controller
    {
        // GET: Playlists
        public ActionResult Index()
        {
            return View();
        }
    }
}