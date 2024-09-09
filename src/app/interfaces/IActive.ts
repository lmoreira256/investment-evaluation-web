export interface IActive {
  id: string;
  name: string;
  description: String;
  amount: number;
  currentValue: number;
  resultValue: number;
  resultPercentageValue: number;
  purchaseValue: number;
  averageValue: Number;
  activeType: Number;
  createdAt: Date;
  updatedAt: Date;
  enabled: Boolean;
  objective: Number;
  actualValue: number;
}
