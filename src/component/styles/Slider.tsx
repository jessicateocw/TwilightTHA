import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
  filledTrack: {
    bg: mode("blue.400", "blue.300")(props),
  },
  thumb: {
    bg: mode("white", "gray.200")(props),
    _hover: {
      bg: mode("gray.100", "gray.300")(props),
    },
     zIndex: 5,
  },
  mark: {
    textAlign: 'center',
    border: "1px solid",
    bg: '#07081b',
    borderRadius: 'full',
    color: 'white',
    mt: '-1.5',
    ml: '-1.5',
    w: '3',
    h: '3',
    zIndex: 2,
  }
}));

const sizes = {
  sm: definePartsStyle({
    track: defineStyle({
      h: 0.1,
    }),
    thumb: defineStyle({
      boxSize: 3,
    }),
  }),
};

export const sliderTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
});