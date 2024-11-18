import { Type } from "@angular/core";

export interface IWidget {
  id: number;
  label: string;
  content: Type<unknown>; 
}
