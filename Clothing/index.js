console.clear();

var count = 0;
function increse_count() {
    count = count + 1;
    document.getElementById("cart-count").innerHTML = count;
}
var a = new XMLHttpRequest();
var product = window.location.href;
var product_id = product.slice(product.indexOf("id="));
var product_id_num = Number(product_id.slice(3));
console.log(product_id.slice(3));

a.onload = function () {
    if (this.status == 200 && this.readyState == 4) {
        var jsonObj = JSON.parse(this.responseText);
        var keys = Object(jsonObj[product_id_num - 1]);
        console.log("EKE", keys);
        // var paren = (document.getElementById("demo").innerHTML =
        //     keys["preview"]);
        var prevew_img = document.getElementById("productImg");
        var name = (document.getElementById("name").innerHTML = keys["name"]);
        var brand = (document.getElementById("brand").innerHTML =
            keys["brand"]);
        var price = (document.getElementById("price").innerHTML =
            keys["price"]);
        var description = (document.getElementById("description").innerHTML =
            keys["description"]);
        var previewImg = document.getElementsByClassName("previewImg")[0];
        console.log("NAME", previewImg.childNodes);
        var photo = keys["photos"];
        var photo_length = photo.length;
        console.log("THEL", photo);
        console.log("THEL", photo_length);
        for (let i = 0; i < photo_length; i++) {
            var paren = document.createElement("img");
            paren.src = photo[i];
            if (i == 0) {
                paren.className = "active";
            }

            // paren.addEventListener("click", active_class);
            // paren.addEventListener("mouseout", deactive_class);
            paren.addEventListener("click", rplace_img);
            previewImg.appendChild(paren);
        }
        console.log((prevew_img.src = keys["preview"]));
    } else if ((this.status = 404)) {
        console.log(helo);
    }
};
a.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product");
// a.setRequestHeader();
a.send();
console.log("DKFJ", a);

var img_var = document.getElementsByTagName("img");
function rplace_img(e) {
    document.getElementById("productImg").src = this.src;

    var imge = document.getElementsByClassName("active");
    for (let i = 0; i < imge.length; i++) {
        imge[i].className = "";
    }
    this.classList.toggle("active");
    console.log(this);
}
function deactive_class(e) {
    this.className = "";
}
