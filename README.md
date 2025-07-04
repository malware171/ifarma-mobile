# Ifarma Mobile

O Ifarma é um aplicativo de delivery de remedios, feito para facilitar a compra de remedios para aquelas pessoas que não tem tempo de irem até a farmacia, faz tudo do conforto de sua casa.

A aplicação vai conter diversas funcionalidades, mas a principio ela contem: 
- Tela de login
- Tela Home com todos os remedios
- Tela de Checkout do produto
- Tela de Carrinho



## Para rodar
Siga o passo a passo para inicializar o projeto.
```
$ git clone https://github.com/malware171/ifarma-mobile
$ cd ifama-mobile
```

## Instalar NODE.JS

##### Linux
```
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
$ nvm install --lts
```

##### MacOS
```
Instalar o homebrew: https://brew.sh/
$ brew install node --lts
```

## Configurar o Yarn

```
$ corepack enable
$ export PATH="$(yarn global bin):$PATH"
$ yarn -v
```
## Instalar pacote do ActionSheet
````
yarn add @expo/react-native-action-sheet
````

## Inicializar o projeto
 ```
$ yarn start --clear
 ```
- Para abrir na WEB apernas digite:
```
$ w
 ```
## Video de apresentação dos testes E2E

[https://youtu.be/CzR5jS76XV4](https://youtu.be/CzR5jS76XV4)

## Diferença entre teste unitario e teste E2E

###  Teste Unitario
Os testes unitarios são espeficificamentes usados para testar compomentes de forma isolada, tentantando assim as suas funcionalidades.

#### Principais Objetivos:
- Verificar a lógica interna e o comportamento de um único componente.
- Testar interações isoladas, como garantir que a função onPress de um botão é chamada quando ele é clicado.

No caso quando estamos testando, tem o comando ```yarn test --coverage``` no qual ele mostra se estamos cobrindo todos os testes necessarios para aquele componente em especifico.

###  Teste E2E
É um teste de Interface UI no qual ele valida o fluxo completo da aplicação, navegação entre telas, a comunicação com o backend e banco de dados se tiver.

## Página Home

![Captura de Tela 2025-05-20 às 19 20 02](https://github.com/user-attachments/assets/d3e4ce1f-fa5c-453a-9136-c5be63100c9a)

## Visualiar o Produto
![Captura de Tela 2025-05-20 às 19 20 20](https://github.com/user-attachments/assets/8f40bbc6-46b7-4ec4-8bac-008a11c2807d)


## Carrinho

![Captura de Tela 2025-05-20 às 19 20 28](https://github.com/user-attachments/assets/2acbf832-4ecd-4d70-9ca2-5889c9290643)


## ActionSheet

![Captura de Tela 2025-05-20 às 19 20 34](https://github.com/user-attachments/assets/f2286f99-79f8-42cc-bee8-687375e7bc5c)






