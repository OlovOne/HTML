document.getElementById('imgs').addEventListener("mouseenter", function(){
    var imgone = document.getElementById('img-one');
    var imgtwo = document.getElementById('img-two');
    var imgthree = document.getElementById('img-three'); 
    imgone.addEventListener("mouseenter", function(){
        document.getElementById('img-zero').src = imgone.src;
    });
    imgtwo.addEventListener("mouseenter", function(){
        document.getElementById('img-zero').src = imgtwo.src;
    });
    imgthree.addEventListener("mouseenter", function(){
        document.getElementById('img-zero').src = imgthree.src;
    }); 
});
