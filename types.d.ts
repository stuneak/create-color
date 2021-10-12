declare module "create-color" {
  export interface CreateColorOptions {
    format: string;
  }

  export default function createColor(
    data: any[],
    options?: CreateColorOptions
  ): string;
}
