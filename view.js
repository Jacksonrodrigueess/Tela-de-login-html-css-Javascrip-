

var mostrar = document.getElementById('mostrar1')
    mostrar.addEventListener('click', function(){

        let password = document.getElementById('password')

        if(password.type == "password"){
            password.type = "text"
            this.style.opacity = "1"
            
        } else{
            password.type ="password"
            this.style.opacity = "0.4"
        }

    })
