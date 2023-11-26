import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

export const tabsTheme = defineMultiStyleConfig({
  variants: {
    line: {
      tab: {
        fontWeight: 500,
        color: "gray.400",
        _selected: {
          color: "gray.100",
          borderBottomWidth: "2px",
          borderBottomColor: "#ec56c8",
        },
      },
      tablist: {
        borderBottomWidth: "1px",
        borderBottomColor: "gray.400",
      },
    },
  },
});
