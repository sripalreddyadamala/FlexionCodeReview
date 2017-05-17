/**
 * Created by sripalreddyadamala on 5/17/17.
 */
var classifyTriangle  = function(){
    var s1,s2,s3;
    s1 = parseFloat(document.getElementById("s1").value);
    s2 = parseFloat(document.getElementById("s2").value);
    s3 = parseFloat(document.getElementById("s3").value);
    console.log(s1+" "+s2+" "+s3);

    if((s1 + s2 > s3)){
        //To  Equilateral triangle condition
        if((s1===s2) && (s2===s3)){
            document.getElementById("result").innerHTML = "equilateral";
        }
        //Isosceles triangle
        else if (((s1 === s2) && (s2 !== s3)) || ((s2 === s3) && (s3!== s1)) || ((s1===s3))&&(s1!==s2) ){
            //console.log(" Isosceles");
            document.getElementById("result").innerHTML = "Isosceles";
        } // Scalene triangle (3 different sizes)
        else if((s1 !== s2) && (s2 !== s3)){
            //console.log("Scalene Triangle.");
            document.getElementById("result").innerHTML = "Scalene Triangle.";
        }
    }       //Sum of two smaller sides is smaller than the longest side
    //When it is not a triangle it will print this.
    else{
        //console.log("not a triangle");
        document.getElementById("result").innerHTML = "not a triangle";
    }
};
