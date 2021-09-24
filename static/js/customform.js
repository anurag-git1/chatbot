
    var f = document.createElement("form1");
    f.classList.add("classForm");
    f.setAttribute("id", "idToggle");

    // f.setAttribute('method',"post");
    // f.setAttribute('action',"/");
    var fname = document.createElement("input"); //input element, text
    fname.classList.add("classInput");
    fname.setAttribute('type',"text");
    fname.setAttribute('name',"fname");
    var lname = document.createElement("input");
    lname.classList.add("classInput");
    lname.setAttribute('type',"text");
    lname.setAttribute('name',"lname");

    var s = document.createElement("input"); //input element, Submit button
    s.classList.add("classButton");
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Submit");

    f.appendChild(fname);  
    f.appendChild(lname);
    f.appendChild(s);

    var t = document.createElement("button");
    t.classList.add("classToggle");
    t.setAttribute("id", "test");
    // t.appendChild('<i class="fas fa-comment"></i>');

    document.getElementById("form1").appendChild(t);

    window.onload = function() {
        var b = document.getElementById("test")
            b.TEXT_NODE('<i class="fas fa-comment"></i>');
            b.onclick = function() {
                var fc = document.getElementById("idToggle");
                if(fc)
                    document.getElementById("form1").removeChild(f);
                else
                    document.getElementById("form1").appendChild(f);
        }
    }

        
            

            
            
            
            