export interface IActive {
  id: string;
  name: string;
  description: String;
  quantity: number;
  currentValue: number;
  netResult: number;
  percentageResult: number;
  costValue: number;
  averageCost: Number;
  activeType: Number;
  createdAt: Date;
  updatedAt: Date;
  enabled: Boolean;
  objective: Number;
  currentPrice: number;
  quantityToBuy: number;
}
