import { Type } from "@angular/core";

export type TMenuItem ={
  icon: string;
  label: string;
  route?: string;
  subItems?: TMenuItem[];
  component: Type<unknown>;
  routerPath: string;
}
