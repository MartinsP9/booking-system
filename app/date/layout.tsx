// mantine
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <MantineProvider
                theme={{
                    primaryColor: "blue",
                    
                }}
            >
                {children}
            </MantineProvider>
        </div>
    );
}
