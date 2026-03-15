var sts = document.querySelector("h5");

var btn = document.querySelector("#add");
var check = 0;
btn.addEventListener("click", function () {
    if (check == 0) {
        sts.innerHTML = "Friends";
        sts.style.color = "green";
        btn.innerHTML = "Remove Friend";

        check = 1;
    } else {
        sts.innerHTML = "Stranger";
        sts.style.color = "red";
        btn.innerHTML = "Add Friend";

        check = 0;
    }
});

// var remFrnd = document.querySelector("#remove")
// remFrnd.addEventListener("click", function(){
//     sts.innerHTML = "Stranger";
//     sts.style.color = "red";
// })

var con = document.querySelector("#container");
var hrt = document.querySelector("i");

con.addEventListener("dblclick", function () {
    hrt.style.transform = "translate(-50%, -50%) scale(1)";
    hrt.style.opacity = "0.8";

    setTimeout(function () {
        hrt.style.opacity = 0;
        hrt.style.transform = "translate(-50%, -50%) scale(0)";
    }, 700);
});

var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
    // console.log(dets.x, dets.y);
    // crsr.style.left = dets.x + "px";
    // crsr.style.top = dets.y + "px";

    const rect = main.getBoundingClientRect();
    crsr.style.left = dets.clientX - rect.left - 25 + "px";
    crsr.style.top = dets.clientY - rect.top - 25 + "px";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (val) {
    var img = val.querySelector("img");
    val.addEventListener("mouseenter", function () {
        img.style.opacity = 1;
    });
    val.addEventListener("mouseleave", function () {
        img.style.opacity = 0;
    });
    val.addEventListener("mousemove", function (dets) {
        const rect = val.getBoundingClientRect();
        img.style.left = dets.clientX - rect.left + "px";
        // img.style.top = dets.clientY - rect.top + "px";
    });
});


var arr = [
    {dp: "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://i.pinimg.com/1200x/c1/90/a5/c190a5b8e95ae1af61312a153ab346bc.jpg"},
    
    {dp: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7952371/legobatmancover.jpg?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=750", story: "https://i.pinimg.com/736x/ac/f3/b8/acf3b85631ba2efe557dd1afa9922534.jpg"},
    
    {dp: "https://i.guim.co.uk/img/media/7f0b8e1b7c6d6c0d876f4cacc98302f2862b67c7/290_0_1340_804/master/1340.jpg?width=620&dpr=2&s=none&crop=none", story: "https://i.pinimg.com/736x/84/af/af/84afaf629460862179081508641a845e.jpg"},

    {dp: "https://i.pinimg.com/736x/6d/42/39/6d4239cd7269d584a0a2285cd6818d08.jpg", story: "https://i.pinimg.com/736x/d1/e3/94/d1e394405133de3c41dd67d386ebc250.jpg"},

    {dp: "https://i.pinimg.com/1200x/e5/bd/0a/e5bd0aaf0e048aaba6b4e98d96e3c33a.jpg", story: "https://i.pinimg.com/1200x/a1/a0/99/a1a099a9dbdbf8559a959b16162cce06.jpg"}, 

    {dp: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2017/12/lego-dc-comics-super-heroes-the-flash.jpg?q=50&fit=crop&w=1136&h=639&dpr=1.5", story: "https://i.pinimg.com/1200x/11/ba/5c/11ba5c2d2f82b4f3ce5e9862926994f7.jpg"}, 

    {dp: "https://i.pinimg.com/736x/a4/06/98/a406981205c2b1197532039cc856fef9.jpg", story: "https://i.pinimg.com/736x/78/c0/5d/78c05df3bce1523e6ec58c7e2b839c48.jpg"}
    
]

var stories = document.querySelector("#stories");

var clutter = ""
arr.forEach(function(val, idx){
    // console.log(val, idx);
    clutter += `<div class="story">
                    <img id="${idx}" src="${val.dp}" alt="">
                </div>`
});
// console.log(clutter);

stories.innerHTML = clutter;

stories.addEventListener("click", function(dets){
    // console.log(arr[dets.target.id].story); 
    // arr[dets.target.id].story //golden value
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;    
    
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    }, 3000)

})
