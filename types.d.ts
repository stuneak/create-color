declare module "create-color" {
  export interface CreateColorOptions {
    format: "hex" | "rgb" | "hsl";
  }

  export default function createColor(
    data: any,
    options?: CreateColorOptions
  ): string;
}
