$(function () {
    
});
(function (ko) {
    function ViewModel()
    {
        var player;
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
            player.play();
            self.isPlaying(true);
        }
        self.pause = function () {
            player.pause();
            self.isPlaying(false);
        }
        self.forward = function () {
            if (player.currentTime < player.duration - 10)
                    player.currentTime += 10;
        }
        self.backward = function () {
            if (player.currentTime > 10)
                    player.currentTime -= 10;
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
        self.times = ko.observable("");
        self.selectSong = function(el)
        {
            self.song(el);
            player.src = self.song().FilePath;
            player.load();
            self.play();
        }
        $(document).ready(function () {
            player = document.getElementById('audioPlayer');
            $("#volumeSlider").slider({
                value: 100,
                min: 0,
                max: 100,
                step: 1,
                animate: true,
                slide: function (event, ui) {
                    self.volume(ui.value);
                    player.volume = ui.value / 100;
                },
                stop: function (event, ui) {
                    self.volume(ui.value);
                    player.volume = ui.value / 100;
                }
            });
            $("#songProgress").slider({
                value: 0,
                min: 0,
                max: 100,
                step: 1,
                animate: true,
                slide: function (event, ui) {
                    player.currentTime = Math.round(ui.value / 100 * player.duration);
                },
                stop: function (event, ui) {
                    player.currentTime = Math.round(ui.value / 100 * player.duration);
                }
            });
            var progressbar = $("#progressBar");
            var loadedBar = $("#loadedBar");
            player.ontimeupdate = function () {
                $("#progressBar").css({ "width": "" + Math.round(100 / player.duration * player.currentTime) + "%" });
                $("#loadedBar").css({ "width": "" + Math.round(100 / player.duration * player.buffered.end(player.buffered.length - 1)) + "%" });
                $("#songProgress").slider("value", Math.round(100 / player.duration * player.currentTime));
                console.log(player.currentTime + "//" + player.duration);
                self.times(convertSecToMin(player.currentTime) + " / " + convertSecToMin(player.duration));
            }
        });
        var convertSecToMin = function(sec){
            var minutes = Math.floor(sec / 60);
            var seconds = sec - minutes * 60;
            return "" + Math.round(minutes) + ":" + Math.round(seconds);
        }
    } 
    ko.applyBindings(new ViewModel());
})(ko);