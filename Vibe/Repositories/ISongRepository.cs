using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vibe.Models;

namespace Vibe.Repositories
{
    interface ISongRepository
    {
        IList<Song> Search(string query);
        IList<Song> SearchByCategory(string category);

        IList<Song> SearchByArtist(string artist);
    }
}
