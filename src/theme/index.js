import { createBox, createText, createTheme } from "@shopify/restyle";
import { colors } from './colors'
import { textVariants } from './text-variants'

const theme = createTheme({
  colors: colors,
  spacing: {
    "1": 4,
    "2": 8,
    "3": 12,
    "3.5": 14,
    "4": 16,
    "5": 20,
    "5.5": 22,
    "6": 24,
    "7": 28,
    "8": 32,
    "9": 36,
    "10": 40,
    "11": 44,
    "12": 48,
    "13": 52,
    "14": 56,
  },
  borderRadii: {
    none: 0,
    rounded: 4,
    "rounded-xl": 8,
    "rounded-2xl": 10,
    "rounded-3xl": 12,
    "rounded-4xl": 16,
    "rounded-5xl": 20,
    "rounded-7xl": 28,
  },
  textVariants
})

export const Box = createBox()
export const Text = createText()

export default theme
