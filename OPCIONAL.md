# ⚙️ Configuração Opcional: Docker sem Sudo

Por padrão, o Docker exige privilégios de `root` (sudo) para executar qualquer comando. Siga os passos abaixo para permitir que o seu usuário gerencie os containers de música sem precisar digitar a senha toda vez.

### 📋 Instruções
Execute os comandos abaixo na ordem. Eles vão adicionar seu usuário ao grupo do Docker e atualizar as permissões da sessão.

### 🚀 Comandos (Copie e cole um por vez)

1. **Criar o grupo Docker e adicionar seu usuário:**
```bash
sudo usermod -aG docker $USER
