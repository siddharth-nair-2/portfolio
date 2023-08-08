import Contact from "@/components/Contact";
import "./matchMedia.mock";
import { render, screen } from "@testing-library/react";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

describe("Contact Form Rendering", () => {
  it("should input field for email, with placeholder text", () => {
    render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Contact />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    );

    screen.getByRole("textbox", { name: "Your email" });
  });
});
