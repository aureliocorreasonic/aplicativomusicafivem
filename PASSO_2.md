# 📦 Passo 2: Instalação e Deploy da API (Aura City)

Siga as instruções abaixo para baixar o projeto e subir o container da API de música automaticamente no seu servidor Ubuntu.

### 📋 Instruções
1. Certifique-se de que o **Docker** já está instalado no seu servidor.
2. Copie o comando único abaixo.
3. Cole no seu terminal e aperte **Enter**.
4. O comando irá clonar o repositório, criar a imagem e iniciar a API na porta **3000**.

### 🚀 Comando de Instalação (Clique no ícone à direita para copiar)

```bash
git clone [https://github.com/aureliocorreasonic/aplicativomusicafivem.git](https://github.com/aureliocorreasonic/aplicativomusicafivem.git) && cd aplicativomusicafivem && docker build -t aura-music-api . && docker run -d -p 3000:3000 --name api-musica --restart always aura-music-api
