/**
 * @ngdoc service
 * @name angularApp.service:CategoriesService
 * @description
 * # CategoriesService
 * Categories Service for Categories controller
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .service('CriticsService', CriticsService);

    CriticsService.$inject = ['$http', '$q', 'CONSTANTS'];

    function CriticsService($http, $q, CONSTANTS) {

        var service = {
            getCriticsData: getCriticsData
        };

        return service;

        function getCriticsData() {
            var url = 'https://www.flickstree.com/api_service_120v.php?VERSION=1.20&FTOKEN=b6c6eb93c215db92022f&SESSION=4783347878344378&ENCODING=JSON&METHOD=GET_MOVIE_REVIEWS&movie_id=0c01f8e8863baa7';
            var resp = {"RESULT":"SUCCESS","REQUEST":"GET_MOVIE_REVIEWS","RESPONSE":[{"review_id":"220888","submit_time":"2015-07-20 00:00:00","critic_id":"3779578d79c1864","name":"Norman Wilner","picture":"\/\/www.flickstree.com\/images\/no-image.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"This is tremendous, full-throttle filmmaking.","review_url":"https:\/\/nowtoronto.com\/movies\/reviews\/inception\/","movie_rating":"10","review_likes":"0","review_dislikes":"0"},{"review_id":"220899","submit_time":"2015-07-20 00:00:00","critic_id":"6c4f016ce2d4591","name":"Dann Gire","picture":"\/\/www.flickstree.com\/images\/no-image.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"Don't be surprised if your brain hurts. In a good kind of way.","review_url":"http:\/\/prev.dailyherald.com\/story\/?id=393835","movie_rating":"10","review_likes":"0","review_dislikes":"0"},{"review_id":"220900","submit_time":"2015-07-20 00:00:00","critic_id":"96ec831c9c239c5","name":"Ryan Gilbey","picture":"\/\/www.flickstree.com\/images\/no-image.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"If it's the dreamer whose subconscious fills in the details, as the film claims, why the absence of silliness, sex, horror and general abandon?","review_url":"http:\/\/www.newstatesman.com\/film\/2010\/07\/toy-story-andy-woody-inception","movie_rating":"4","review_likes":"0","review_dislikes":"0"},{"review_id":"220901","submit_time":"2015-07-20 00:00:00","critic_id":"dbb67d9e848105b","name":"Chris Knight","picture":"\/\/www.flickstree.com\/images\/no-image.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"Inception is a complicated film, but it follows its own logic so seriously and insidiously that we are completely drawn into its point of view.","review_url":"http:\/\/news.nationalpost.com\/arts\/film-review-inception-4-stars","movie_rating":"10","review_likes":"0","review_dislikes":"0"},{"review_id":"220902","submit_time":"2015-07-20 00:00:00","critic_id":"d16f6a0da04abe6","name":"Edward Johnson-Ott","picture":"\/\/www.flickstree.com\/images\/no-image.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"I'm looking forward to seeing Inception again.","review_url":"http:\/\/www.nuvo.net\/indianapolis\/ed-reviews-inception\/Content?oid=1458085","movie_rating":"9","review_likes":"0","review_dislikes":"0"},{"review_id":"220903","submit_time":"2015-07-20 00:00:00","critic_id":"85a838bff2635a1","name":"Rafer Guzman","picture":"https:\/\/2606a1ad4ca29fb64f56-4a36c2a7b73511d447d0010162213a6b.ssl.cf1.rackcdn.com\/ctimages\/85a838bff2635a1.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"A heist film of thrilling, almost delirious complexity.","review_url":"http:\/\/www.newsday.com\/entertainment\/movies\/inception-close-to-a-sci-fi-masterpiece-1.2105296","movie_rating":"10","review_likes":"0","review_dislikes":"0"},{"review_id":"220906","submit_time":"2015-07-20 00:00:00","critic_id":"3e69322933dc108","name":"Kate Muir","picture":"\/\/www.flickstree.com\/images\/no-image.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"Inception is a grown-up thriller ride through the dreamscapes of the mind, with Leonardo DiCaprio in the lead. The movie is a sign that Hollywood retains some intellectual oomph.","review_url":"http:\/\/www.thetimes.co.uk\/tto\/arts\/film\/reviews\/article2645442.ece","movie_rating":"8","review_likes":"0","review_dislikes":"0"},{"review_id":"220911","submit_time":"2015-07-20 00:00:00","critic_id":"345c6f660f9e436","name":"Stephen Rebello","picture":"\/\/www.flickstree.com\/images\/no-image.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"Inception is as wildly visionary as it is smart. If only all \"big\" movies could be this haunting. We can dream, can't we?","review_url":"http:\/\/www.playboy.com\/articles\/movies-inception\/index.html","movie_rating":"10","review_likes":"0","review_dislikes":"0"},{"review_id":"220913","submit_time":"2015-07-20 00:00:00","critic_id":"1e2fa0ad21fa4c9","name":"Jonathan Romney","picture":"\/\/www.flickstree.com\/images\/no-image.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"The film's imaginative freefall is ruinously anchored to a bogus sense of deep feeling.","review_url":"http:\/\/www.independent.co.uk\/arts-entertainment\/films\/reviews\/inception-christopher-nolan-148-mins-12a-2029050.html","movie_rating":"4","review_likes":"0","review_dislikes":"0"},{"review_id":"220915","submit_time":"2015-07-20 00:00:00","critic_id":"ea97d0a561168a6","name":"Margot Harrison","picture":"\/\/www.flickstree.com\/images\/no-image.jpg","movie_name":"Inception","movie_release_year":"2010","review_text":"Nolan is so eager to make the movie work as an action blockbuster that he sacrifices storytelling to set pieces. Still, what set pieces.","review_url":"http:\/\/www.sevendaysvt.com\/vermont\/inception\/Content?oid=2140878","movie_rating":"8","review_likes":"0","review_dislikes":"0"}]};
            var deferred = $q.defer();
            // $http.get(url).then(function(response) {
            //     console.log(response.data);
            //     if(response && response.data) {
            //         var responseObj = JSON.parse(response.data);
            //         deferred.resolve(resp);
            //     }
            // }, function(error) {
            //     console.log(error);
            //     deferred.reject(error);
            // });
            deferred.resolve(resp);
            return deferred.promise;
            
        }
    }

})();
