# 🔒 Passo 3: Configuração de Firewall e Liberação de Acesso

Para que os jogadores do Aura City consigam ouvir as músicas, o servidor precisa permitir conexões na porta **3000**. Siga os procedimentos abaixo:

### 🛡️ 1. Liberar no Servidor Linux (Ubuntu)
Copie e cole o comando abaixo no seu terminal para abrir a porta no firewall interno:

```bash
sudo ufw allow 3000/tcp
