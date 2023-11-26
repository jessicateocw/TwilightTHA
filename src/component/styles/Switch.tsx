import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: '#07081b',
  },
  track: {
    bg: '#76fbcb',
    _checked: {
      bg: 'gray.100',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })