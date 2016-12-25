$(function () {
    
});
(function (ko) {
    function ViewModel()
    {
        self.songs = ko.observableArray();
        self.searchText = ko.observable();
        self.search = function () {
            var url = "../../Home/Search";
            $.ajax({
                type: "GET",
                data: { "query": self.searchText() },
                url: url,
                success: function (data) {
                    self.songs(data);
                },
                error: function () {
                    console.log("error");
                }
            });
        }
        
        //player
        self.song = ko.observable("Resources/good_feeling.mp3");
        self.volume = ko.observable(100);
        self.isPlaying = ko.observable(false);
        self.play = function () {
            document.getElementById('audioPlayer').play();
            self.isPlaying(true);
        }
        self.pause = function () {
            document.getElementById('audioPlayer').pause();
            self.isPlaying(false);
        }
        self.muted = function () {
            return self.volume() == 0;
        }
        self.lowVolume = function () {
            return self.volume() < 50 && self.volume() > 0;
        }
        self.loudVolume = function () {
            return self.volume() >= 50;
        }
        self.selectSong = function(el)
        {
            self.song(el.FilePath);
            document.getElementById('audioPlayer').src = self.song();
            document.getElementById('audioPlayer').load();
            self.play();
        }
        
    }
    ko.applyBindings(new ViewModel());
})(ko);