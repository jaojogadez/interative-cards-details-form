# 💳 Interactive Cards Details Form

Uma aplicação web interativa para coletar detalhes de cartões de pagamento e informações pessoais. O formulário valida os dados em tempo real e fornece feedback visual para uma melhor experiência do usuário. Após a submissão, os dados são enviados para um endpoint da API SheetMonkey.

🔗 Acesse o projeto: [https://jaojogadez.github.io/interative-cards-details-form/]

## ✨ Recursos

* 🎴 **Exibição Interativa do Cartão:** O formulário atualiza dinamicamente uma representação visual do cartão de crédito à medida que o usuário digita os dados.
* ✅ **Validação em Tempo Real:** Os campos são validados com a biblioteca `validate.js`, oferecendo feedback imediato.
* 🔢 **Formatação de Entrada:** Os campos de telefone, CPF e CEP são automaticamente formatados conforme o usuário digita.
* 🎟️ **Cupom de Desconto:** O usuário pode inserir o cupom "vaiCorinthians10" para obter um desconto, dentro de um tempo limite.
* 📤 **Envio de Formulário:** Após validação bem-sucedida, os dados são enviados para a API SheetMonkey.
* ⚠️ **Tratamento de Erros:** Mensagens de erro são exibidas utilizando toasts do Bootstrap.
* 📱 **Design Responsivo:** Layout otimizado com Bootstrap 5.

## 🛠️ Tecnologias Utilizadas

* **Frontend:** HTML, CSS, JavaScript
* **Framework CSS:** Bootstrap 5
* **Bibliotecas:** `validate.js` para validação
* **API:** SheetMonkey (https://api.sheetmonkey.io/form/9qGHZ1Ki5b8WLuknMeVd1g)

## 📋 Requisitos

* 🌐 Um navegador web atualizado (Chrome, Firefox, Safari, etc.)
* 🖥️ Node.js (opcional, caso deseje expandir o projeto localmente)
* 📌 Conhecimento básico de HTML, CSS e JavaScript

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/jaojogadez/interative-cards-details-form.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd interative-cards-details-form
   ```
3. Abra o arquivo `index.html` no seu navegador.

## 🎮 Como Usar

1. 📝 Preencha os campos com suas informações pessoais. A validação em tempo real indicará se o formato está correto.
2. 💳 Digite os dados do cartão de crédito. A visualização do cartão será atualizada conforme você preenche.
3. 🎟️ Caso possua, insira o cupom "vaiCorinthians10" antes que o tempo expire.
4. ✅ Clique em "Confirmar" para enviar o formulário. Caso os dados estejam corretos, você será redirecionado para uma tela de confirmação.

## 📚 Documentação da API

O projeto utiliza a API SheetMonkey no seguinte endpoint:
🔗 [https://api.sheetmonkey.io/form/9qGHZ1Ki5b8WLuknMeVd1g](https://api.sheetmonkey.io/form/9qGHZ1Ki5b8WLuknMeVd1g)

O formulário envia um payload JSON contendo todas as informações preenchidas. Para mais detalhes sobre os parâmetros e respostas, consulte a documentação oficial da SheetMonkey.

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga estas etapas:

1. 🍴 Faça um fork do repositório.
2. 🌱 Crie um branch para sua funcionalidade ou correção de bug.
3. 💻 Faça suas alterações e realize commits com mensagens descritivas.
4. 📤 Envie seu branch para o repositório forkado.
5. 🔁 Crie um pull request para mesclar suas alterações no branch `main`.

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📩 Contato/Suporte

Para qualquer dúvida ou problema, entre em contato via GitHub: [@jaojogadez](https://github.com/jaojogadez).

