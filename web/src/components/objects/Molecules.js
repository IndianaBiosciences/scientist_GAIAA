/*
* Utility Class to handle all the Target-related definitions and functions
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import assayData from '../../Data/tgts_ChEMBL_assays_results.json';

export default class Targets {
  constructor() {
    this.molecules = assayData.molecules;
  }

  // Getter Functions
//  get allTargets/() {
//    return this.allTargets();
//  }

  all = () => {
    return this.molecules;
  }

}
