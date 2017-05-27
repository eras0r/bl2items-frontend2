import {ItemType} from './item-type.type';

export abstract class Item {
  private id: string;
  private itemType: ItemType;
  private level: number;
  private name: string;
  private manufacturerId: string;
  private rarityId: string;
  private gibbedCode: string;
  private uniqueText: string;
  private additionalText: string;

  constructor(itemType: ItemType) {
    this.itemType = itemType;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getItemType(): ItemType {
    return this.itemType;
  }

  public setItemType(itemType: ItemType): void {
    this.itemType = itemType;
  }

  public getLevel(): number {
    return this.level;
  }

  public setLevel(level: number): void {
    this.level = level;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getManufacturerId(): string {
    return this.manufacturerId;
  }

  public setManufacturerId(manufacturerId: string): void {
    this.manufacturerId = manufacturerId;
  }

  public getRarityId(): string {
    return this.rarityId;
  }

  public setRarityId(rarityId: string): void {
    this.rarityId = rarityId;
  }

  public getGibbedCode(): string {
    return this.gibbedCode;
  }

  public setGibbedCode(gibbedCode: string): void {
    this.gibbedCode = gibbedCode;
  }

  public getUniqueText(): string {
    return this.uniqueText;
  }

  public setUniqueText(uniqueText: string): void {
    this.uniqueText = uniqueText;
  }

  public getAdditionalText(): string {
    return this.additionalText;
  }

  public setAdditionalText(additionalText: string): void {
    this.additionalText = additionalText;
  }

}
