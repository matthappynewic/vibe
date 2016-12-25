using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Vibe.Models
{
    public class Song
    {
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Album { get; set; }
        public string Length { get; set; }
        public string FIlePath { get; set; }
    }
}