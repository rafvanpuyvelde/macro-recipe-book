import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    fontFamily: string;
    primaryColor: string;
    secondaryColor: string;
    primaryAccentColor: string;
    secondaryAccentColor: string;
    tertiaryAccentColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    primaryGradient: string;
    secondaryGradient: string;
    primaryGradientShadow: string;
  }
}
