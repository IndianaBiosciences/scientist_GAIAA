/*
* Utility Class to handle all the Target-related definitions and functions
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

const all_networks = {
  'test-tim' : {
    name  : 'Tim INPP4D Test',
    style : require('../../Data/networks/test-tim-cy-style.json'),
    data  : require('../../Data/networks/test-tim-data.json')
  },
  'ad3c-yr2' : {
    name  : 'AD3C Year 2 Targets',
    style : null,
    data  : null
  }
}

export default class Networks {
  constructor() {
    this._networks = all_networks;
  }

  getAll() {
    return Object.keys(this._networks);
  }

  getName(network) {
    if (!this._networks.hasOwnProperty(network)) {
      return null;
    }
    return this._networks[network].name
  }

  getData(network) {
    if (!this._networks.hasOwnProperty(network)) {
      return null;
    }
    return this._networks[network].data
  }

  getStyle(network) {
    if (!this._networks.hasOwnProperty(network)) {
      return null;
    }
    return this._networks[network].style
  }

}
