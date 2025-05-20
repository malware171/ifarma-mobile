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

## Inicializar o projeto
 ```
$ yarn start --clear
 ```
- Para abrir na WEB apernas digite:
```
$ w
 ```