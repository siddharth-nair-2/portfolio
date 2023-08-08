import Header from "@/components/Header";
import "./matchMedia.mock";
import { render, screen } from "@testing-library/react";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

describe("Header Rendering", () => {
  it("should have anchor links for navigation", () => {
    render(
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    );
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Skills" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Experience" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });
});
