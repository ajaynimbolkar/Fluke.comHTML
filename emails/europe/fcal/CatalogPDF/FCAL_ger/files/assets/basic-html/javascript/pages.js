﻿
    pageList = [{}
    
      ,{"item" : "page1", "title" : "1",  "src" : "../flash/pages/page0001_s.jpg"}
    
      ,{"item" : "page2", "title" : "2",  "src" : "../flash/pages/page0002_s.jpg"}
    
      ,{"item" : "page3", "title" : "3",  "src" : "../flash/pages/page0003_s.jpg"}
    
      ,{"item" : "page4", "title" : "4",  "src" : "../flash/pages/page0004_s.jpg"}
    
      ,{"item" : "page5", "title" : "5",  "src" : "../flash/pages/page0005_s.jpg"}
    
      ,{"item" : "page6", "title" : "6",  "src" : "../flash/pages/page0006_s.jpg"}
    
      ,{"item" : "page7", "title" : "7",  "src" : "../flash/pages/page0007_s.jpg"}
    
      ,{"item" : "page8", "title" : "8",  "src" : "../flash/pages/page0008_s.jpg"}
    
      ,{"item" : "page9", "title" : "9",  "src" : "../flash/pages/page0009_s.jpg"}
    
      ,{"item" : "page10", "title" : "10",  "src" : "../flash/pages/page0010_s.jpg"}
    
      ,{"item" : "page11", "title" : "11",  "src" : "../flash/pages/page0011_s.jpg"}
    
      ,{"item" : "page12", "title" : "12",  "src" : "../flash/pages/page0012_s.jpg"}
    
      ,{"item" : "page13", "title" : "13",  "src" : "../flash/pages/page0013_s.jpg"}
    
      ,{"item" : "page14", "title" : "14",  "src" : "../flash/pages/page0014_s.jpg"}
    
      ,{"item" : "page15", "title" : "15",  "src" : "../flash/pages/page0015_s.jpg"}
    
      ,{"item" : "page16", "title" : "16",  "src" : "../flash/pages/page0016_s.jpg"}
    
      ,{"item" : "page17", "title" : "17",  "src" : "../flash/pages/page0017_s.jpg"}
    
      ,{"item" : "page18", "title" : "18",  "src" : "../flash/pages/page0018_s.jpg"}
    
      ,{"item" : "page19", "title" : "19",  "src" : "../flash/pages/page0019_s.jpg"}
    
      ,{"item" : "page20", "title" : "20",  "src" : "../flash/pages/page0020_s.jpg"}
    
      ,{"item" : "page21", "title" : "21",  "src" : "../flash/pages/page0021_s.jpg"}
    
      ,{"item" : "page22", "title" : "22",  "src" : "../flash/pages/page0022_s.jpg"}
    
      ,{"item" : "page23", "title" : "23",  "src" : "../flash/pages/page0023_s.jpg"}
    
      ,{"item" : "page24", "title" : "24",  "src" : "../flash/pages/page0024_s.jpg"}
    
      ,{"item" : "page25", "title" : "25",  "src" : "../flash/pages/page0025_s.jpg"}
    
      ,{"item" : "page26", "title" : "26",  "src" : "../flash/pages/page0026_s.jpg"}
    
      ,{"item" : "page27", "title" : "27",  "src" : "../flash/pages/page0027_s.jpg"}
    
      ,{"item" : "page28", "title" : "28",  "src" : "../flash/pages/page0028_s.jpg"}
    
      ,{"item" : "page29", "title" : "29",  "src" : "../flash/pages/page0029_s.jpg"}
    
      ,{"item" : "page30", "title" : "30",  "src" : "../flash/pages/page0030_s.jpg"}
    
      ,{"item" : "page31", "title" : "31",  "src" : "../flash/pages/page0031_s.jpg"}
    
      ,{"item" : "page32", "title" : "32",  "src" : "../flash/pages/page0032_s.jpg"}
    
      ,{"item" : "page33", "title" : "33",  "src" : "../flash/pages/page0033_s.jpg"}
    
      ,{"item" : "page34", "title" : "34",  "src" : "../flash/pages/page0034_s.jpg"}
    
      ,{"item" : "page35", "title" : "35",  "src" : "../flash/pages/page0035_s.jpg"}
    
      ,{"item" : "page36", "title" : "36",  "src" : "../flash/pages/page0036_s.jpg"}
    
      ,{"item" : "page37", "title" : "37",  "src" : "../flash/pages/page0037_s.jpg"}
    
      ,{"item" : "page38", "title" : "38",  "src" : "../flash/pages/page0038_s.jpg"}
    
      ,{"item" : "page39", "title" : "39",  "src" : "../flash/pages/page0039_s.jpg"}
    
      ,{"item" : "page40", "title" : "40",  "src" : "../flash/pages/page0040_s.jpg"}
    
      ,{"item" : "page41", "title" : "41",  "src" : "../flash/pages/page0041_s.jpg"}
    
      ,{"item" : "page42", "title" : "42",  "src" : "../flash/pages/page0042_s.jpg"}
    
      ,{"item" : "page43", "title" : "43",  "src" : "../flash/pages/page0043_s.jpg"}
    
      ,{"item" : "page44", "title" : "44",  "src" : "../flash/pages/page0044_s.jpg"}
    
      ,{"item" : "page45", "title" : "45",  "src" : "../flash/pages/page0045_s.jpg"}
    
      ,{"item" : "page46", "title" : "46",  "src" : "../flash/pages/page0046_s.jpg"}
    
      ,{"item" : "page47", "title" : "47",  "src" : "../flash/pages/page0047_s.jpg"}
    
      ,{"item" : "page48", "title" : "48",  "src" : "../flash/pages/page0048_s.jpg"}
    
      ,{"item" : "page49", "title" : "49",  "src" : "../flash/pages/page0049_s.jpg"}
    
      ,{"item" : "page50", "title" : "50",  "src" : "../flash/pages/page0050_s.jpg"}
    
      ,{"item" : "page51", "title" : "51",  "src" : "../flash/pages/page0051_s.jpg"}
    
      ,{"item" : "page52", "title" : "52",  "src" : "../flash/pages/page0052_s.jpg"}
    
    ]

    function getPageTmb(num){
      var  i=1;
      var src=false;
      while(pageList[i]){
        if(pageList[i].title == num) {
          src = pageList[i].src;
          break;
        }
        i++;
      }
      return src;
    }
     function getSrcByTmbName(num){
        var  i=1;
        var src=false;
        while(pageList[i]){
            if(pageList[i].item == num) {
                src = pageList[i].src;
                break;
            }
            i++;
        }
        return src;
    }
       
  	function getPageSeo(num){
      var  i=1;
      var item=false;
      while(pageList[i]){
        if(pageList[i].title == num) {
          item = pageList[i].item;
          break;
        }
        i++;
      }
      return item;
    }
  