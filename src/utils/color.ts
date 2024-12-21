import { Color } from "../models/utils";

export function parseRGBColor(color: string): Color {
    if (!color) {
        return { r: 0, g: 0, b: 0 };
    }

    const [r, g, b] = color.split(',').map(Number);
    return { r, g, b };
}
