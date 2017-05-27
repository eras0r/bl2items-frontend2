import {Item} from '../items/item';

export class Shield extends Item {

  private capacity: number;
  private rechargeRate: number;
  private rechargeDelay: number;
  private maxHealth: number;
  private boosterChance: number;
  private elementalResistance: number;
  private absorbChance: number;
  private ampDamage: number;
  private ampShotDrain: number;
  private novaDamage: number;
  private novaRadius: number;
  private roidDamage: number;
  private spikeDamage: number;

  constructor() {
    super('shield');
  }

  // TODO getters and setters

}
