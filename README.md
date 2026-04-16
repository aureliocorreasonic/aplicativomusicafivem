# Music API (FiveM / Qbox)

Esta é a API backend responsável por processar pesquisas do YouTube e fornecer streaming de áudio contínuo para o sistema de celular (`lb-phone`) e áudio 3D (`xSound`) do servidor Aura City. 

O projeto é 100% conteinerizado (Docker), isolando o uso de CPU/RAM e evitando travamentos no servidor principal do FiveM. Ele utiliza Node.js e `yt-dlp` para extração de mídia.

---

## 🚀 Requisitos
* Um servidor Linux (Testado em Ubuntu 20.04 / 22.04 / 24.04).
* Acesso *root* ou usuário com privilégios `sudo`.
* Porta `3000` liberada no firewall.

---

## 🛠️ Passo 1: Instalação do Docker (Ubuntu)

Se o seu servidor for uma máquina limpa, instale o Docker utilizando o repositório oficial. Execute os comandos abaixo no terminal:

```bash
# 1. Atualize o sistema e instale os pacotes essenciais
sudo apt-get update
sudo apt-get install ca-certificates curl -y

# 2. Adicione a chave GPG oficial do Docker
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL [https://download.docker.com/linux/ubuntu/gpg](https://download.docker.com/linux/ubuntu/gpg) -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# 3. Adicione o repositório do Docker
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] [https://download.docker.com/linux/ubuntu](https://download.docker.com/linux/ubuntu) \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 4. Instale o Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
