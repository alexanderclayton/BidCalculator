import { NoSubstitutionTemplateLiteral } from "typescript";

type TDimensions = {
  front: number;
  rear: number;
  right: number;
  left: number;
};

type TMaterials = {
  material: string;
  cost: NoSubstitutionTemplateLiteral;
};

export type TBid = {
  dimensions: TDimensions;
  windows: number;
  hours: number;
  rate: number;
  paint: number;
  materials: TMaterials[];
};
