var app = angular.module("index",["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "body.html" 
                
            })
            .when('/banggia', {
                templateUrl: "banggia.html"
            })
            .when('/sanpham', {
                templateUrl: "sanpham.html"
            })
            .when('/dangnhap', {
                templateUrl: "dangnhap.html"
            })
            .when('/dangki', {
                templateUrl: "dangki.html"
            })
    });
    app.controller('mid',function($scope){
        $scope.chu = "Great quattro reloaded"
        $scope.hinh = "../hinhanh/logo.png"
        $scope.hinh1 = "../hinhanh/9.jpg"
        $scope.hinh2 = "../hinhanh/3.jpg"
        $scope.content="The new Audi Q7"
        $scope.content1="Vivamus vitae augue at quam frigila tristique sit amet, acin ante sikumpre tisdin. "
        $scope.hinh3="../hinhanh/7.jpg"
        $scope.xe1="You drive innovation."
        $scope.xe2="Progress is not just felt. It is experienced."
        $scope.xe3="Find out more"
        $scope.dichvu="Service"
        $scope.hdv="../hinhanh/logo.png"
        $scope.banggia="Audi Vietnam"
        $scope.sanpham="SẢN PHẨM"
        
        
        
    });
    app.controller('bot',function($scope){
        $scope.cut = [
            {hinh: "../hinhanh/1.jpg"},
            {hinh: "../hinhanh/2.jpg"},
            {hinh: "../hinhanh/3.jpg"},
            {hinh: "../hinhanh/4.jpg"},
            
        ]
        $scope.bien = [
            {hinh: "../hinhanh/5.jpg"},
            {hinh: "../hinhanh/6.jpg"},
            {hinh: "../hinhanh/7.jpg"},
            {hinh: "../hinhanh/8.jpg"},
            
        ]
        $scope.ngay = [
            {hinh: "../hinhanh/9.jpg"},
            {hinh: "../hinhanh/1.jpg"},
            {hinh: "../hinhanh/2.jpg"},
            {hinh: "../hinhanh/3.jpg"},
            
        ]
       
        
    });
    app.controller('sp',function($scope){
        $scope.disp = [
            {text1: "AUDI", text2:"Q3", text3: "7.000.000 VND"},
            {text1: "AUDI", text2:"Q4", text3: "1.200.000 VND"},
            {text1: "AUDI", text2:"Q8", text3: "3.400.000 VND"},
            {text1: "AUDI", text2:"A3", text3: "5.600.000 VND"},
            {text1: "AUDI", text2:"A5", text3: "3.200.000VND"},
            {text1: "AUDI", text2:"A8", text3: "2.000.000 VND"},
        ]
    });
    app.controller('boc',function($scope){
        $scope.abc = [
            {hinhmoi1: "../hinhanh/10.jpg", text3:"AUDI Q3", text4:"BUY NOW"},
            {hinhmoi1: "../hinhanh/2.jpg", text3:"AUDI Q7", text4:"BUY NOW"},
            {hinhmoi1: "../hinhanh/3.jpg", text3:"AUDI Q6", text4:"BUY NOW"},
            
        ]
    });
    app.controller('boct',function($scope){
        $scope.adc = [
            {hinhmoi1: "../hinhanh/4.jpg", text3:"AUDI A3", text4:"BUY NOW"},
            {hinhmoi1: "../hinhanh/5.jpg", text3:"AUDI A8", text4:"BUY NOW"},
            {hinhmoi1: "../hinhanh/6.jpg", text3:"AUDI A4", text4:"BUY NOW"},
            {hinhmoi1: "../hinhanh/7.jpg", text3:"AUDI A53", text4:"BUY NOW"},
            
        ]
    })
    
    
    
    