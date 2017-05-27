import {Item} from '../items/item';

export class Weapon extends Item {

  private damage: number;
  private damageMultiplier: number;
  private accuracy: number;
  private fireRate: number;
  private reloadSpeed: number;
  private magazineSize: number;
  private damageTypeId: string;
  private elemDamage: number;
  private elemChance: number;
  private weaponTypeId: string;

  constructor() {
    super('weapon');
  }

  // TODO getters and setters
}
