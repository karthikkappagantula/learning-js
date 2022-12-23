    // method-1
    var x = "GeeksforGeeks";
    var y = 'A computer science portal';  
    console.log(x + "\n" + y);

    // method-2
    var a = "'GeeksforGeeks'";
    var b = "A 'computer' 'science' portal";     
    console.log(a + "\n" + b); 

    var x = "Great Geek";
    var y = new String("Great Geek");
    console.log(typeof(x) + "\n" + typeof(y));

    //string search
    function myFunction(){
        var str = "welcome to geeksforgeeks";
        var a = str.search("geeksforgeeks");
        console.log(a);
    }
    myFunction();

    //string split
    function myFunction2(){
        var str = "welcome to geeksforgeeks";
        var a = str.split("geeksforgeeks");
        console.log(a);
    }
    myFunction2();

    
    //string startsWith
    function myFunction3(){
        var str = "welcome to geeksforgeeks";
        var a = str.startsWith("geeksforgeeks");
        console.log(a);
    }
    myFunction3();

    