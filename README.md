[![GitHub forks](https://img.shields.io/github/forks/VasuK111/fedle.svg?style=social)](https://github.com/VasuK111/fedle/network)
[![GitHub stars](https://img.shields.io/github/stars/VasuK111/fedle.svg?style=social)](https://github.com/VasuK111/fedle/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/VasuK111/fedle.svg)](https://github.com/VasuK111/fedle/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/VasuK111/fedle.svg)](https://github.com/VasuK111/fedle/graphs/contributors)

**The following project is a proof-of-concept of the original idea of building a decentralised DL models training platform. As our first step in the product building, we've for now built a library & a simply beautiful UI to reedeem the rewards you earn while helping us out to build this library further!

# Fedle: Federated Learning Python Library

This is v0.0.2 of the fedel open-source library.
![](https://github.com/VasuK111/fedle/blob/589f027f513a60a1ce7ec6feb1ff70b089804fd6/Group%201.png)

## Introduction & Problem
Welcome to Fedle, an open-source python library for federated learning. With the increasing use of deep-learning models in the industry & academia nowadays, developers are feeling the frustration of long & unwanted large training times. Traditional models like CNN, KNN, and MLP on large datasets like the CIFAR-10 often require lengthy training times and frequent accuracy improvements. Waiting for models to become usable can be frustrating and inefficient.

There has to be some solution!
So, we began searching.... lenghty nights of searching online on the web on how to get around this....
And then, we came across [this](https://blog.research.google/2017/04/federated-learning-collaborative.html)

Seems, google has come up with a solution.

## Solution

The solution to this was proposed as [Federated learning](https://federated.withgoogle.com/)
**Federated Learning** : Federated learning (also known as collaborative learning) is a machine learning technique that trains an algorithm via multiple independent sessions, each using its own dataset. This approach stands in contrast to traditional centralized machine learning techniques where local datasets are merged into one training session, as well as to approaches that assume that local data samples are identically distributed. 
[More on federated learning](https://en.wikipedia.org/wiki/Federated_learning)


## What've we built?
We've built an easy to use python library which has a central server & 10 clients feeded into the network. You can choose which model you wish to train from the choice of models available & you can also choose which dataset to let the clients train on your model.
The clients run a complete epoch of the training set & updates the central server the parameters generated. The model aggregates the parameters shared by each client at the end of each traoning round according to a simple federated averaging algorithm & then sends back the updated models to the clients for the next round of training. 
Accuracy & loss are calculated at the end of each round of training to show the increase in accuracy & the decrease in loss after the completion of each training round.

After all the rounds of training are completed & the server has aggregated the features shared by all the clients, the final best model is now shared back to the user.

Yes, that's it!

All you had to do is a simple installation of the *fedle* library & the dependencies mentioned in the requirements.txt file.
Detailed setup instructions are metioned below.


Our Python library for federated learning offers a solution to these problems. It allows you to:
- **Install and Operate**: Easily install and operate the Fedle library.
- **Model Variety**: Choose from a wide range of models.
- **Client Control**: Vary the number of clients training your model.
- **Decentralized Open Source**: Contribute to the project and earn rewards in the form of platform tokens.
- **Rewards**: Earn tokens by adding more models or datasets to the collection.

## Installation Steps
To get started with Fedle, follow these simple installation steps:

1. Clone the Fedle repository from GitHub.
2. Run `poetry install`
3. Run `poetry shell`
4. Then, install the required dependencies by running `pip install -r requirements.txt`.
5. Run the setup script `python test.py install`.
6. You're all set to begin using Fedle, our federated learning library for faster, more efficient model training.

## Rewards

We are humans too & so we've limitations as well. There's no open source project that became succesful without an active community. We need you as much as you need us & so we planned out something.

For easy & fast growth of this library, we'll mint out ERC-20 tokens to anyone who contributes to the library either by adding models to the library or adding the datasets to train on.


## Technologies Used

* We built our [Federated learning model](https://github.com/VasuK111/fedle/tree/main/fedle) using Python. 

* We created a boiler_plate code to run test.py for running the library in your terminal or you can simply type the command :
```
  pip install -i https://test.pypi.org/simple/ fedle
```
* We We craeted 10 clients & a server to be run on your local machine.
* We ran our whole code on [Replit](https://replit.com/@mihir6453/fedle-1)
* We also added our github on [Quine](https://quine.sh/repo/VasuK111-fedle-711340879)
* We deployed our contracts on Ethereum Testnet & Polygon.

## Malicious Clients

We plan to keep clients who are not adding value to the network away through the logic of increasing accuracy. If at the end of each training round, we are getting an increase in accuracy, the training can continue further or else it aborts.

## What's next?

We aim to add more & more number of models into the library in the coming weeks & increase the compatibilty of our library & the versions of the different frameworks so we can cater to as many users as we can & ease your work of training deep learning models!

We also plan to integrate the Hyperledger Fabric to build a communication network between clients & server for giving it a next level shield of privacy & security.

**The following github repository is under constant maintainence.**

## Use cases
* Fast & easy to use
* Significant rate of increase in accuracy
* All complexities of code ridden away.

Thank you for choosing Fedle. We look forward to helping you streamline your deep learning projects.
