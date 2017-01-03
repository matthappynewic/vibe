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
        self.song = ko.observable({"FilePath":"Resources/good_feeling.mp3"});
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
        self.forward = function () {
            if (document.getElementById('audioPlayer').currentTime < document.getElementById('audioPlayer').duration - 10)
                    document.getElementById('audioPlayer').currentTime += 10;
        }
        self.backward = function () {
            if (document.getElementById('audioPlayer').currentTime > 10)
                    document.getElementById('audioPlayer').currentTime -= 10;
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
            self.song(el);
            document.getElementById('audioPlayer').src = self.song().FilePath;
            document.getElementById('audioPlayer').load();
            //document.getElementById('songProgress').attr({"max":self.song().Length});
            self.play();
        }
        $(document).ready(function () {
            $("#volumeSlider").slider({
                value: 100,
                min: 0,
                max: 100,
                step: 1,
                animate: true,
                slide: function (event, ui) {
                    self.volume(ui.value);
                    document.getElementById('audioPlayer').volume = ui.value / 100;
                },
                stop: function (event, ui) {
                    self.volume(ui.value);
                    document.getElementById('audioPlayer').volume = ui.value / 100;
                }
            });
            $("#songProgress").slider({
                value: 0,
                min: 0,
                max: 100,
                step: 1,
                animate: true,
                slide: function (event, ui) {
                    document.getElementById('audioPlayer').currentTime = Math.round(ui.value / 100 * document.getElementById('audioPlayer').duration);
                },
                stop: function (event, ui) {
                    document.getElementById('audioPlayer').currentTime = Math.round(ui.value / 100 * document.getElementById('audioPlayer').duration);
                }
            });
        });
    } 
    ko.applyBindings(new ViewModel());
})(ko);