import { GlobalTheme } from "../Global/GlobalTheme";

type CustomTheme = typeof GlobalTheme;

declare module "styled-components"{
    export interface DefaultTheme extends CustomTheme {}
}