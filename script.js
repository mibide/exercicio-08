const listaUsuarios = document.getElementById('lista-usuarios')
const form= document.getElementById('form-usuario')


async function carregarusuarios(){
    try{
        const resposta=await fetch('https://jsonplaceholder.typicode.com/users')
        const usuarios = await resposta.json();
        usuarios.forEach(usuario => {
            adicionarUsuarioNaTela(usuario.name, usuario.email);

            
        });
    } catch(erro){
        console.error('erro ao carregar usuários', erro)

    }

}

function adicionarUsuarioNaTela(nome,email){
    const li = document.createElement('li');
        li.textContent = `${nome} - ${email}`
        listaUsuarios.appendChild(li);
    
}

form.addEventListener('submit' , async(evento)=>{
    evento.preventDefault();
    const name = document.getElementById('nome').ariaValueMax;
    const email = document.getElementById('email').ariaValueMax;
    const novousuario = {

        nome:nome,
        email:email,

    }
         try{
            const resposta = await fetch('https://jsonplaceholder.typicode.com/users',
                {
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(novoUsuario)
                }
            );

            const usuarioCriado = await resposta.json();
            adicionarUsuarioNaTela(usuarioCriado, nome, usuarioCriado.email);
            form.reset();
        }catch(erro){

            console.error('erro ao adicionar usuario', erro)
        }





         }
         
)
carregarusuarios();