document.querySelector("form").addEventListener("submit",data)

var det=JSON.parse(localStorage.getItem("admission"))||[]
    function data(a){

        
        a.preventDefault()

        var name=document.querySelector("#name").value
        var email=document.querySelector("#email").value
        var phone=document.querySelector("#phone").value
        var gender=document.querySelector("#gender").value
        var cours=document.querySelector("#course").value
        
       
       
       
        var detail={
            Name:name,
            Email:email,
            Phn:phone,
            gen:gender,
            course:cours,
        }
    }
