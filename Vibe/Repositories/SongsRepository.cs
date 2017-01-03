using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vibe.Models;

namespace Vibe.Repositories
{
    public class SongsRepository : ISongRepository
    {
        protected  List<Song> _songs { get; set; }

        public SongsRepository()
        {
            _songs = new List<Song>();
            _songs.Add(new Song() { Name = "Sorrow",Artist = "Pink Floyd",Album=" ",Length=" "});
            _songs.Add(new Song() { Name = "Comfortably Numb", Artist = "Pink Floyd", Album = " ", Length = " " });
            _songs.Add(new Song() { Name = "Shine on your crazy diamond", Artist = "Pink Floyd", Album = " ", Length = " " });
            _songs.Add(new Song() { Name = "The wall", Artist = "Pink Floyd", Album = " ", Length = " " });
            _songs.Add(new Song() { Name = "Marooned", Artist = "Pink Floyd", Album = " ", Length = " ", FilePath = "Resources/" });
            _songs.Add(new Song() { Name = "Nothing else matters", Artist = "Metallica", Album = " ", Length = " " , FilePath = "Resources/nothing_else_matters.mp3" });
            _songs.Add(new Song() { Name = "Turn the page", Artist = "Metallica", Album = " ", Length = " ", FilePath = "Resources/turn_the_page.mp3" });
            _songs.Add(new Song() { Name = "Unforgiven", Artist = "Metallica", Album = " ", Length = "376", FilePath = "/Resources/unforgiven.mp3" });
        }
        public IList<Song> Search(string query)
        {
            List<Song> res = new List<Song>();

            foreach(Song s in _songs)
            {
                if (s.Name.ToLower().IndexOf(query.ToLower()) != -1) { res.Add(s); continue; }
                if (s.Artist.ToLower().IndexOf(query.ToLower()) != -1) { res.Add(s); continue; }
                //if (s.Name.IndexOf(query) != -1) { res.Add(s); break; }
                //if (s.Name.IndexOf(query) != -1) { res.Add(s); break; }
            }
            return res;
        }

        public IList<Song> SearchByArtist(string artist)
        {
            throw new NotImplementedException();
        }

        public IList<Song> SearchByCategory(string category)
        {
            throw new NotImplementedException();
        }
    }
}