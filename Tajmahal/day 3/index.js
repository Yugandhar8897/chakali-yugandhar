function demo(){
    document.getElementById("heading").textContent="4.0 technologies";
    document.getElementById("heading").style.color="blue";
}
function switchoff(){
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("cat-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("status").textContent="switched-Off"
    document.getElementById("off-switch").style.backgroundColor="red";
    document.getElementById("on-switch").style.backgroundColor="orange";
     

}
function switchon(){
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("cat-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("status").textContent="switched-On"
    document.getElementById("off-switch").style.backgroundColor="green";
    document.getElementById("on-switch").style.backgroundColor="yellow";
     
    
}