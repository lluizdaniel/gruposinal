const tabela = document.getElementById("tabela")
const moldal = document.getElementById("moldal");
const cartItems = document.getElementById("cart-items")
const observacao = document.getElementById("observacao")
const fechar = document.getElementById("bt-fechar");
const enviar = document.getElementById("bt-enviar")

let requisicao = {
    codigo:"",
    data: "",
    loja: ""
};

tabela.addEventListener("click", function(event){
    //console.log(event.target)
    let parentButton = event.target.closest(".bt-open-moldal")
    if(parentButton){
        const codigo = parentButton.getAttribute("data-cod")
        const data = parentButton.getAttribute("data-dia")
        const loja = parentButton.getAttribute("data-loja")
        const descricao = parentButton.getAttribute("data-descricao")
        const cliente = parentButton.getAttribute("data-cliente")
        addDescricao(codigo, data, loja, descricao, cliente)
        openMoldal()
        requisicao.codigo = codigo;
        requisicao.data = data;
        requisicao.loja = loja;
    }

})

function addDescricao(codigo, data, loja, descricao, cliente){
    cartItems.innerHTML = "";
    const cartItemElement = document.createElement("div")
    cartItemElement.innerHTML = `
        <p>Cod.Req: <span>${codigo}</span></p>
        <p>Data Geração: <span>${data}</span></p>
        <p>Loja: <span>${loja}</span></p>
        <p>Requisitante: <span>${cliente}</span></p>
        <p>Descrição: <span>${descricao}</span></p>
    `
    cartItems.appendChild(cartItemElement)
}

function openMoldal (){
    moldal.style.display = "flex";
}

enviar.addEventListener("click", function(event){
    const phone = "947718966"
    window.open(`https://wa.me/${phone}?text=A requisição do código:  ${requisicao.codigo}, gerado na data: ${requisicao.data}, da loja ${requisicao.loja} está ${observacao.value}`, "_blank")
})

moldal.addEventListener("click", function(event){
    if(event.target === moldal){
        moldal.style.display = "none"
        requisicao.codigo = "";
        requisicao.data = "";
        requisicao.loja = "";
    }
})

fechar.addEventListener("click", function (){
    moldal.style.display = 'none';
    requisicao.codigo = "";
    requisicao.data = "";
    requisicao.loja = "";
})