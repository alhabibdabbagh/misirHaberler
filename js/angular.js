var app = angular.module('homeApp', [])
				 .controller('homeController', function($scope) 
 {
 			  $scope.girisli=1;
		  $scope.girisliDegil=0;
	
 	 	  $scope.cikisYap=function() {
 	 	  $scope.girisli=0;
		  $scope.girisliDegil=1;
 	 	  };
 	   	  $scope.girisYap=function(){
 	   	  	$scope.girisli=1;
			$scope.girisliDegil=0;
 	   	  };	
    $scope.news = [
    	{title:"haber 1",about:"1about about about about 1 25 skjdj 3  ",image:"images/img_01.jpg",date:"01-05-2018"},
    	{title:"haber 2",about:"2about about about about 1 253 321 ",	 image:"images/img_02.jpg",date:"05-03-2017"},
    	{title:"haber 3",about:"3about about about about 1  321 ",		 image:"images/img_03.jpg",date:"04-08-2015"},
    	{title:"haber 4",about:"4about about about about 1 253  ",		 image:"images/img_04.jpg",date:"03-02-2015"}
    ];
  	  $scope.addHaber={};
  	  $scope.clickedHaber={};
  
  	  $scope.saveHaber=function(){
  	  	$scope.news.push($scope.addHaber);
  	  	$scope.addHaber={};
  	  };
  	   $scope.selectHaber=function(x){
	   	$scope.clickedHaber = x ;
	   };
  	  $scope.updateHaber=function(){

  	  };
  	   $scope.deleteHaber=function(){
  	   	$scope.news.splice($scope.news.indexOf($scope.clickedHaber),1);
  	   };

     $scope.sliders = [
    	{title:"slide 1",about:"1about about about about 1 25 skjdj 3  ",image:"images/img_01.jpg",date:"01-05-2018"},
    	{title:"slide 2",about:"2about about about about 1 253 321 ",	 image:"images/img_02.jpg",date:"05-03-2017"},
    	{title:"slide 3",about:"3about about about about 1  321 ",		 image:"images/img_03.jpg",date:"04-08-2015"},
    	{title:"slide 4",about:"4about about about about 1 253  ",		 image:"images/img_04.jpg",date:"03-02-2015"}
    ];

 	$scope.comments = [
    	{title:"slide 1",about:"1about about about about 1 25 skjdj 3  ",image:"images/img_01.jpg",date:"01-05-2018"},
    	{title:"slide 2",about:"2about about about about 1 253 321 ",	 image:"images/img_02.jpg",date:"05-03-2017"},
    	{title:"slide 3",about:"3about about about about 1  321 ",		 image:"images/img_03.jpg",date:"04-08-2015"},
    	{title:"slide 4",about:"4about about about about 1 253  ",		 image:"images/img_04.jpg",date:"03-02-2015"}
    ];

    $scope.users = [
    	{username:"slide 1",about:"1about about about about 1 25 skjdj 3  ", image:"images/img_01.jpg",date:"01-05-2018"},
    	{username:"slide 2",about:"2about about about about 1 253 321 ",	 image:"images/img_02.jpg",date:"05-03-2017"},
    	{username:"slide 3",about:"3about about about about 1  321 ",		 image:"images/img_03.jpg",date:"04-08-2015"},
    	{username:"slide 4",about:"4about about about about 1 253  ",		 image:"images/img_04.jpg",date:"03-02-2015"}
    ];

  	  // $scope.addUser={};
  	  // $scope.clickedHaber={};
  	  // $scope.selectUser={};
  	  // $scope.saveUser={};
  	  // $scope.updateUser={};
  	  // $scope.deleteUser={};
});
