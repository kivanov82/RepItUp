import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

// let Web3 = require('web3');

import { BigNumber } from 'bignumber.js';

import { AppSettings } from './config/AppSettings';

declare let require: any;
declare let window: any;

let tokenAbi = require('./config/tokenContract.json');

@Injectable()
export class ContractsService {

  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = AppSettings.VOTING_TOKEN_ADDRESS;

  constructor() {

    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);

      if (this._web3.version.network !== '5777') {
        alert('Please connect to the ETH (Ganache) network');
      }
    } else {
      alert(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }

    this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  }

  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }

    return Promise.resolve(this._account);
  }

  public async getUserBalance(): Promise<number> {
    // let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.balanceOf.call(0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef, function (err, result) {
        if(err != null) {
          reject(err);
        }

        resolve(_web3.fromWei(result));
      }); 
    }) as Promise<number>;
  }

  public async getEntrepreneurBalance(): Promise<number> {
    // let account = await this.getAccount();
    
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.balanceOf.call(0xf17f52151EbEF6C7334FAD080c5704D77216b732, function (err, result) {
        if(err != null) {
          reject(err);
        }

        resolve(_web3.fromWei(result));
      }); 
    }) as Promise<number>;
  }


  public async sendFunds(): Promise<boolean> {
    let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      let _web3 = this._web3;

      this._tokenContract.transfer(
        0xf17f52151EbEF6C7334FAD080c5704D77216b732, // Entrepreneur
        1, 
        function (err, result) {
          if(err != null) {
            reject(err);
          }
        
        resolve(_web3.fromWei(result));
      });
    }) as Promise<boolean>;
  }

  public async sendRewardFundsBackToCivilian(): Promise<boolean> {
    let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      let _web3 = this._web3;

      this._tokenContract.transfer(
        // 0x627306090abaB3A6e1400e9345bC60c78a8BEf57, // Municipality
        0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef, // Civilian
        100, 

        function (err, result) {
          console.log("sendFunds::err -> "+err);
          if(err != null) {
            reject(err);
          }
        
          console.log("sendFunds::result -> "+result);

        resolve(_web3.fromWei(result));
      });
    }) as Promise<boolean>;
  }
}
