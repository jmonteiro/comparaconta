# ComparaConta.com

Comparativos entre corretoras estrangeiras disponíveis para residentes fiscais do Brasil.

## Desenvolvimento

Para executar o servidor localmente, rode: `bin/dev` (http://localhost:4000).
Para gerar o site estático como em produção, rode: `bin/build`.

## Como a tabela é montada

A tabela comparativa tem uma **coluna por corretora** e uma **linha por critério**.
As duas metades vêm de lugares diferentes:

- **As corretoras (colunas)** são um arquivo YAML cada, em `pages/corretoras_exterior/`.
  A ordem das colunas vem do campo `posicao` (menor primeiro).
- **Os critérios (linhas)** são declarados no front matter de
  `pages/corretoras-exterior.html.erb`, sob a chave `structure`, agrupados por seção.

### Adicionar uma corretora

Crie `pages/corretoras_exterior/<slug>.yml` com `nome`, `posicao` e os campos
desejados. O nome do arquivo vira o identificador da coluna (usado para
mostrar/esconder a coluna no navegador), então prefira algo curto e estável.

Ao adicionar ou remover uma corretora, ajuste também o bloco de destaque de
coluna em `pages/stylesheets/application.css.scss`: o seletor precisa de uma
regra por coluna, e o arquivo explica o porquê.

### Adicionar um critério

Um critério novo precisa ser declarado em **dois** lugares:

1. em `structure`, no front matter de `pages/corretoras-exterior.html.erb`
   (define o rótulo e a seção da linha); e
2. na lista `data ...` de `models/corretora_exterior.rb`
   (permite que o valor seja lido do YAML).

### Formatos aceitos em cada campo

Um valor pode ter três formatos:

```yaml
# 1. texto simples
seguro: Não

# 2. registro, com campos opcionais
corretagem_eua:
  text: $0,0035/unidade      # valor principal
  subtext: mín $0,35/ordem   # detalhe, em cinza abaixo do valor
  alt: Explicação mais longa # aparece no ícone (?) ao lado do valor
  url: https://…             # transforma o valor em link
  source: https://…          # ícone de fonte, com link para a referência

# 3. lista de registros (usado em `observacoes`)
observacoes:
  - text: Usa a plataforma da Apex.
  - text: Adquirida pelo Itaú.
    source: https://…
```

Valores que começam com `Sim` ou `Não` ganham automaticamente um ícone verde ou
vermelho, e `n/d` é exibido em cinza — não é preciso fazer nada para isso.

Cada arquivo YAML precisa terminar com `---`, por causa do front matter.

## Licença

Todo este repositório, código e conteúdo, está em domínio público sob
[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br)
(veja `LICENSE`).

Use, copie e adapte à vontade, sem precisar pedir permissão ou dar crédito.
Os dados da tabela, em `pages/corretoras_exterior/`, são feitos justamente
para serem reaproveitados.

## Deploy

Push na `main` dispara `.github/workflows/deploy.yml`, que roda `bin/build` e
publica `./build` no Cloudflare Pages.
