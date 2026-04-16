# 🎵 Aura City - Music API (Guia Completo)

Este guia contém **TODOS** os passos para instalar a infraestrutura de música do Aura City em um servidor Ubuntu do zero.

---

### 🛠️ Instalação Automática (Tudo em 1 Passo)
Se o servidor for novo, copie e cole este bloco inteiro no terminal. Ele vai instalar o Docker, baixar a API, rodar o container e liberar a porta 3000 no firewall automaticamente:

```bash
# 1. Instalando o Docker
sudo apt-get update && sudo apt-get install ca-certificates curl -y && \
sudo install -m 0755 -d /etc/apt/keyrings && \
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc && \
sudo chmod a+r /etc/apt/keyrings/docker.asc && \
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null && \
sudo apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# 2. Fazendo o Deploy da API
git clone https://github.com/aureliocorreasonic/aplicativomusicafivem.git && cd aplicativomusicafivem && docker build -t aura-music-api . && docker run -d -p 3000:3000 --name api-musica --restart always aura-music-api

# 3. Liberando a Porta no Firewall
sudo ufw allow 3000/tcp
