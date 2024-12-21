import { Color } from "../models/utils";

export function parseRGBColor(color: string): Color {
    const [r, g, b] = color.split(',').map(Number);
    return { r, g, b };
}
