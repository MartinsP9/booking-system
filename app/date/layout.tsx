import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

const theme = createTheme({
  colors: {
    customGreen: [
      "#004f3b",
      "#004f3b",
      "#004f3b",
      "#004f3b",
      "#004f3b",
      "#004f3b",
      "#004f3b",
      "#004f3b",
      "#004f3b",
      "#004f3b",
    ],
  },
  primaryColor: "customGreen",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MantineProvider theme={theme}>
        {children}
      </MantineProvider>
    </div>
  );
}
