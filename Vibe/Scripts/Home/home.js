(function (ko) {
    
    var demoSongs = "[{\"Name\":\"Sorrow\",\"Artist\":\"Pink Floyd\"},{\"Name\":\"Numb\",\"Artist\":\"Linkin park\"}]";
    function Home()
    {
        self.songs = ko.observableArray(JSON.parse(demoSongs));
    }
    function Player()
    {
        self.isPlaying = ko.observable(false);
        self.play = function () {
            self.isPlaying(true);
        }
        self.pause = function () {
            self.isPlaying(false);
        }
    }
    ko.applyBindings(new Home());
})(ko);