const express = require('express');
const cors = require('cors');
const { exec, spawn } = require('child_process');

const app = express();
app.use(cors());

// Rota 1: Pesquisa no YouTube para a tela do celular
app.get('/search', (req, res) => {
    const query = req.query.q;
    if (!query) return res.status(400).json({ error: 'Digite o nome da música.' });

    const cmd = `yt-dlp "ytsearch5:${query}" --dump-json --flat-playlist`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: 'Erro ao buscar' });

        const results = stdout.trim().split('\n').map(line => {
            try {
                const data = JSON.parse(line);
                return {
                    id: data.id,
                    title: data.title,
                    thumbnail: `https://i.ytimg.com/vi/${data.id}/hqdefault.jpg`,
                    duration: data.duration
                };
            } catch (e) { return null; }
        }).filter(item => item !== null);

        res.json(results);
    });
});

// Rota 2: Stream de áudio direto para o xSound do FiveM
app.get('/play', (req, res) => {
    const videoId = req.query.id;
    if (!videoId) return res.status(400).send('ID não informado.');

    res.setHeader('Content-Type', 'audio/webm');
    res.setHeader('Transfer-Encoding', 'chunked');

    const yt = spawn('yt-dlp', [
        '-f', 'bestaudio',
        '-o', '-', 
        `https://www.youtube.com/watch?v=${videoId}`
    ]);

    yt.stdout.pipe(res);

    req.on('close', () => {
        yt.kill();
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API de Música rodando na porta ${PORT}`);
});
