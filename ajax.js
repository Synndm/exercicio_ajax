document.addEventListener('DOMContentLoaded', async function () {

    const nomeElemento = document.querySelector('#nome')
    const usuarioElemento = document.querySelector('#usuario')
    const avatarElemento = document.querySelector('#avatar')
    const reposElemento = document.querySelector('#repositorios')
    const seguidoresElemento = document.querySelector('#seguidores')
    const seguindoElemento = document.querySelector('#seguindo')
    const linkElemento = document.querySelector('#link-github')

    try {

        const resposta = await fetch('https://api.github.com/users/Synndm')

        if (!resposta.ok) {
            throw new Error('Erro ao buscar usuário')
        }

        const json = await resposta.json()

        nomeElemento.innerText = json.name
        usuarioElemento.innerText = `@${json.login}`
        avatarElemento.src = json.avatar_url

        seguindoElemento.innerText = json.following
        seguidoresElemento.innerText = json.followers

        reposElemento.innerText = json.public_repos

        linkElemento.href = json.html_url

    } catch (erro) {

        console.log('Erro encontrado:', erro)

        alert('Erro ao buscar dados do GitHub')

    }

})