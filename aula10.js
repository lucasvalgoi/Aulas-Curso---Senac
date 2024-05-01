//Aula 10
// Funções Assíncronas

//código tirado de um exemplo do PDF do Sor
// async function getBlogPost() {
//     let response = await 
//     fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let post = await response.json();
//     console.log(post);
//     }
// getBlogPost();


//DESAFIOS
//FÁCIL

//1
async function buscaConteudo() {
    let busca = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    let conteudo = await busca.json();

    console.log(conteudo);
}
buscaConteudo();

//2
async function buscaConteudoMudaId(id) {
    let busca = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    let conteudo = await busca.json();

    console.log(conteudo);
}
buscaConteudoMudaId(12);


//Médio
//1
async function tratandoErros(id) {
    let busca = await fetch(`https jsonplaceholder.typicode.com/posts/${id}`)
    .catch(error => {
        console.log(`Deu erro na hora de buscar o post ${id} cpx :(`);
        return undefined;
    });

    let conteudo = await busca?.json();

    console.log(conteudo);
}
tratandoErros(1000);


//Dífícil
//1
async function buscaPosts() {
    let posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then(resp => resp.json());

    let users = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(resp => resp.json())
    .then(userList => userList.map(user => {
        const currentUser = {
            id: user.id,
            username: user.username,
            email: user.email,
        };
        
        return currentUser;
    }));
    return console.log(users.map((user => {
        const currentUser = {
            ...user,
            posts: [],
        };

        currentUser.posts = posts.filter(post => post.userId === user.id);
        
        return currentUser;
    })));
}//com esse 'console.log()' lá em cima, o terminal não vai se "preocupar" com a profundidade, logo, vai aparecer '[Object]' nos 10 posts de cada usuário, mas, caso eu queira que apareça TUDO, sem se preocupar em profundidade, eu tenho que fazer a seguinte coisa:
//buscarPosts().then(resp => console.log(resp));

//se eu quiser acessar apenas um determinado usuário, com os posts e tudo mais, aí eu só coloco assim:
//buscarPosts().then(resp => console.log(resp[1]));
buscaPosts();