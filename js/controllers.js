'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('OuterCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.checkClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return "active"
		} else {
			return ""
		}
	}
}])

.controller('HomeCtrl', [function() {

}])

.controller('ContactCtrl', [function() {

}])

.controller('MembersCtrl', ['$scope', function($scope) {
	$scope.members = [
	{
		name: "Aiden Yang",
		img: "aiden.jpg",
		part: "Vocal Percussion",
		hometown: "Toledo, Ohio",
		bio: "Aiden is a junior in Columbia College studying Computer Science. You will usually find him reading, looking at clothes online, or coding in his pajamas in the dark. His favorite activities are listening to/talking about/making music, redditing, writing obscene poetry, and getting into altercations.",
		solos: ""
	},
	{
		name: "Jenna Ledet",
		part: "Alto",
		img: "",
		hometown: "Ithaca, New York",
		bio: "Jenna is a sophomore at Barnard College. She transferred to Barnard after studying for a year at the American University of Paris where she studied English and Comparative Literature. She has always loved making music and especially enjoys singing with her siblings. When she's not singing alto with Notes and Keys, she can be found playing guitar, singing jazz standards, taking photos, and sipping dicks.",
		solos: ""
	},
	{
		name: "Izzi Eberstadt",
		part: "Soprano",
		img: "",
		hometown: "Washington, D.C.",
		bio: "Izzi Eberstadt is a soprano hailing from Washington, D.C. While not in Notes and Keys rehearsal, she can be found in the Prentis Computer Music Center, or on the phone catching up with one (or perhaps all) of her five family members.  She is excited to be back on campus after a semester off, and looks forward to working with her talented and inspiring peers.",
		solos: "Turning Tables, Shake It Out, Wayfaring Stranger"
	},
	{
		name: "Jess Lempit",
		part: "Alto",
		img: "",
		hometown: "Wilton, Connecticut",
		bio: "Jess Lempit is a junior at Barnard College studying History and French. She sings alto for Notes and Keys, and serves as the Media and Publicity manager on NaK's executive board. Jess transferred to Barnard from NYU after her first year, citing noise problems and academic interest for the move- but she was rejected from NYU a cappella, so go figure. Jess is thrilled to call NaK her family. When not planning all-ABBA NaK concerts, she enjoys Kitchenette milkshakes, Rufus Wainwright, bringing pizza to 1020, reading multiple books at once, and complaining about the 1 train.",
		solos: "Seven Nation Army"
	},
	{
		name: "Saringi Agata",
		part: "Soprano",
		img: "",
		hometown: "Cary, North Carolina",
		bio: "Saringi is a sophomore in SEAS studying Chemical Engineering. This is her second year in Notes and Keys and she's really excited about the opportunity to sing with such talented and gifted individuals! Outside of Notes and Keys she likes to teach ballet, play the cello and watch way too much Private Practice/Grey's Anatomy for her own good. If you want to stay on her good side buy her chocolate...lots of chocolate.",
		solos: "Addicted, My Boo, Killing/Can't Take My Eyes Off You, Always"
	},
	{
		name: "Marisa Onanian",
		part: "Soprano",
		img: "",
		hometown: "Houston, Texas",
		bio: "Marisa is a sophomore at Columbia College and is SO happy to be a part of Notes and Keys. Hailing from Houston,TX, Marisa does not appreciate the long winters for she cannot ride her horse to school. Her favorite activities include doing homework, facetimeing with her cat Checkers, and talking about the brain.",
		solos: "Hurt, Call Me When You're Sober, Wrecking Ball, Come on Over"
	}
	];

}])

.controller('AboutCtrl', ['$scope', function($scope) {
	$scope.images = ['s_1.jpg', 's_2.jpg', 's_3.jpg', 's_4.jpg', 's_5.jpg', 's_6.jpg'];
	$scope.imageCount = $scope.images.length;
	$scope.limit = $scope.imageCount - 1;
	$scope.currIndex = 0;
	$scope.getNextImage = function() {
		if ($scope.currIndex == $scope.limit) {
			$scope.currIndex = 0;
			$scope.image = $scope.images[0];
		}
		else {
			$scope.currIndex = $scope.currIndex++;
			$scope.currIndex++;
			$scope.image = $scope.images[$scope.currIndex];
		}
	}
	
	$scope.image = $scope.images[0];
}]);