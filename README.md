# 🏗 JSQTS built with Scaffold-ETH 2

Next.js > yarn start
Problem Statement:

In today's fast-paced digital age, it can be difficult for users to stay motivated in physical activities like squatting due to lack of clear incentives or competition. This lack of motivation and rewards can lead to a decline in the overall health and fitness level of users. 

Moreover, there is an increasing trend towards digital assets being used as rewards instead of traditional currency, but the tracking and verification process for these assets is not easy nor efficient. The current process involves complex code, which might deter many users from participating.

Solution:

Jessesquats.xyz aims to solve both issues by introducing a mobile application that tracks squatting activities using a device's built-in sensors and includes a live leaderboard for competition. The real-time tracking feature allows the user to see their progress on the leaderboard, encouraging them to keep up the good work.

Furthermore, every 12 hours, users will receive rewards on chain based on their position in the leaderboard, which eliminates the need for a traditional reward system and makes verification of these assets easier and more accessible for all users. This change from digital assets to physical rewards not only motivates users to continue squatting but also increases user engagement as they can see and feel the satisfaction when they reach new positions on the leaderboard.


Setup:

Right: 90 (alpha), -180 (beta), -90 (gamma)

It is expected by the webapp for the phone to be in landscape mode - right / left. 


Left: 90 (alpha), 0 (beta), -90 Y (gamma)

We also would need to measure the acceleration.


Project Details:

jessiesquats.xyz

Description: incentivizing people for doing squats and getting them rewarded and competetive as they can see a live leadership board with attestations and winners are rewarded on chain every 12 hours.




Solution: **Problem Statement:** In today's fast-paced digital age, it can be difficult for users to stay motivated in physical activities like squatting due to lack of clear incentives or competition. This lack of motivation and rewards can lead to a decline in the overall health and fitness level of users. Moreover, there is an increasing trend towards digital assets being used as rewards instead of traditional currency, but the tracking and verification process for these assets is not easy nor efficient. The current process involves complex code, which might deter many users from participating.




Implementation: Jessesquats.xyz aims to solve both issues by introducing a mobile application that tracks squatting activities using a device's built-in sensors and includes a live leaderboard for competition. The real-time tracking feature allows the user to see their progress on the leaderboard, encouraging them to keep up the good work. Furthermore, every 12 hours, users will receive rewards on chain based on their position in the leaderboard, which eliminates the need for a traditional reward system and makes verification of these assets easier and more accessible for all users. This change from digital assets to physical rewards not only motivates users to continue squatting but also increases user engagement as they can see and feel the satisfaction when they reach new positions on the leaderboard.




Technology Stack: eas, eth, base, gyro.js.

Evaluation Comments: The project 'jessiesquats.xyz' presents a compelling solution to a real-world problem of lacking motivation for physical activities, specifically squatting, by integrating digital rewards. The problem statement is clear and well-articulated, highlighting the gap in current fitness motivation strategies and the potential for digital assets to serve as incentives. The solution's innovative approach to use a live leaderboard and on-chain rewards to foster competition and motivation is both relevant and timely, considering the growing interest in digital assets and fitness. The technology stack, while briefly mentioned as 'eas' and 'eth', suggests the use of Ethereum for on-chain transactions, which is a solid choice for implementing the proposed reward system. However, the feasibility score is slightly lower due to potential challenges in accurately tracking and verifying physical activities without sophisticated or intrusive equipment. Additionally, ensuring user engagement and maintaining a fair, cheat-resistant system could present significant hurdles. The project scores high on innovation for its creative use of blockchain technology to solve a non-financial problem. The fun score is high because the competitive aspect and digital rewards could significantly enhance user engagement and enjoyment. 



<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
