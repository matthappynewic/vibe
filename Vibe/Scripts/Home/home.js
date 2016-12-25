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
        self.volume = ko.observable(100);
        self.isPlaying = ko.observable(false);
        self.play = function () {
            self.isPlaying(true);
        }
        self.pause = function () {
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

    }
    ko.applyBindings(new ViewModel());
})(ko);