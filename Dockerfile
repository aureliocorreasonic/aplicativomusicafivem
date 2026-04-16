# Usa a imagem oficial do Node.js (versão slim para ser mais leve)
FROM node:20-slim

# Instala as dependências do sistema operacional necessárias
RUN apt-get update && \
    apt-get install -y python3 ffmpeg curl && \
    curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp && \
    chmod a+rx /usr/local/bin/yt-dlp && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do Node
COPY package*.json ./

# Instala os pacotes (Express e CORS)
RUN npm install

# Copia o restante do código (server.js)
COPY . .

# Expõe a porta que a API vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
