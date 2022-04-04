let text = document.getElementById("text");
    let list = document.getElementById("list");
    let btn = document.getElementById("btn");
    let clr_btn = document.getElementById("clr_btn");

    btn.addEventListener("click", function(event) {
        if(text.value!="" ){
        let list_li = document.createElement("li");
        let note = document.createTextNode(text.value);
        list_li.appendChild(note);
        list.appendChild(list_li);
        text.value ="";
        list_li.onclick = function () {
            if(confirm("Do you really want to delete this 'NOTE'..! "))
            {this.parentNode.removeChild(this);}
        }
        }
        else{
            alert("Please enter a value");
        }
    }
    );
    text.addEventListener("keyup",function(event){
        if (event.keyCode==13){
            let list_li = document.createElement("li");
            let note = document.createTextNode(text.value);
            list_li.appendChild(note);
            list.appendChild(list_li);
            text.value ="";
            list_li.onclick = function () {
                if(confirm("Do you really want to delete this 'NOTE'..! "))
                {this.parentNode.removeChild(this);}
            }
            }
        
    })

