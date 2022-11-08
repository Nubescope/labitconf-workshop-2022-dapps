# Intro al desarrollo frontend para DApps en React 
**LABITCONF | Noviembre 2022**

Sitio web hecho en [NextJS](https://nextjs.org/) usado durante la charla para demostrar como interactuar con DAI y CompoundJS desde nuestro browser usando React.

Acá dejamos el link a la [presentación](https://github.com/underscopeio/labitconf-workshop-2022-dapps/blob/main/presentation.pdf).

## Pre-requisitos

- Tener instalada una versión de [NodeJS](https://nodejs.org/) >= 16
- Instalar metamask en el browser ([link](https://metamask.io/))
- Obtener GoerliEth de faucet ([link](https://goerlifaucet.com/))
- Convertir un poco de GoerliEth a DAI en [Uniswap](https://app.uniswap.org/) (usar dirección de DAI para Goerli especificada más abajo)

## Como correr el sitio

1. Clonar el repo

	```bash
	git clone git@github.com:underscopeio/labitconf-workshop-2022-dapps.git 
	```

2. Instalar dependencias

	```bash
	npm install
	# ó
	yarn
	```

3. Iniciar el servidor

	```bash
	npm run dev
	# ó
	yarn dev
	```

4. Abrir en el navegador la dirección http://localhost:3000

## Pasos

- [Paso 0](./src/pages/demo-0.tsx) - componentes mockeados
- [Paso 1](./src/pages/demo-1.tsx) - leer contratos
- [Paso 2](./src/pages/demo-2.tsx) - verificar si se otorgó acceso a los fondos
- [Paso 3](./src/pages/demo-3.tsx) - conectar billetera
- [Paso 4](./src/pages/demo-4.tsx) - autorizar a compound a acceder a los fondos
- [Paso 5](./src/pages/demo-5.tsx) - obtener info de la TX
- [Paso 6](./src/pages/demo-6.tsx) - mintear CDAI

## Desafío: retirar fondos

Te desafiamos a que implementes la funcionalidad de retirar el DAI invertido en Compound. Para esto dejamos el archivo [challenge.tsx](./src/pages/challenge.tsx) para que lo completes. Acá te dejamos algunos consejos:

- Investigá la documentación de compound para ver como se llama el método que necesitamos llamar y sus parámetros
- No te olvides de conseguir GoerliEth y DAI (que coincida con la dirección de contrato que pusimos más abajo)
- Una vez hecha la transacción, podés actualizar los valores que se ven en pantalla

## Direcciones de contratos (Goerli)

- DAI: `0x2899a03ffDab5C90BADc5920b4f53B0884EB13cC`
- CDAI: `0x0545a8eaF7ff6bB6F708CbB544EA55DBc2ad7b2a`

## Links

- [Ethers.js](https://docs.ethers.io/) (para interactuar con ethereum)
- [Wagmi](https://wagmi.sh/) (hooks de react para interactuar con ethereum)
- [Goerli Faucet](https://goerlifaucet.com/) (para obtener Eth de prueba)
- [Block Explorer](https://goerli.etherscan.io/) (para ver info de txs)
- [Docs de Compound](https://docs.compound.finance/#networks) (sección para verificar los contratos que debemos usar para cada network)

