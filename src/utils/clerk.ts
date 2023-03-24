import type { Theme } from "@clerk/types";

const fontFamily = "'Inter', sans-serif";

export const appearance: Theme = {
  layout: {
    socialButtonsVariant: "iconButton",
  },
  variables: {
    colorPrimary: "#000000",
  },
  elements: {
    card: "bg-transparent shadow-none border border-neutral-700",
    headerTitle: {
      fontFamily,
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "30px",
      textAlign: "center",
      color: "#f1f5f9",
    },
    headerSubtitle: {
      fontFamily,
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "20px",
      textAlign: "center",
      color: "rgba(241, 245, 249, 0.65)",
    },
    logoBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      gap: "4px",
    },
    logoImage: {
      filter: "brightness(0%)",
      width: "76.5px",
      height: "24px",
    },
    socialButtonsIconButton__discord:
      "bg-[#5865F2] hover:bg-[#5865F2]/50 hover:border hover:border-[#5865F2]/80",
    socialButtonsProviderIcon__discord: "brightness-0 invert",
    socialButtonsIconButton__github:
      "bg-white hover:bg-white/30 hover:border hover:border-white/80 group",
    socialButtonsProviderIcon__github:
      "group-hover:brightness-0 group-hover:invert",
    formButtonPrimary: "bg-sky-500 hover:bg-sky-500/40 hover:border-sky-500/80",
    formFieldLabel: {
      padding: "0px 0px 4px",
      gap: "2px",
      fontFamily,
      color: "#f1f5f9",
    },
    formFieldInput: {
      border: "1px solid #f1f5f9 !important",
      borderRadius: "6px",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: "10px 10px 10px 16px",
      gap: "8px",
      backgroundColor: "transparent",
      color: "#f1f5f9",
    },
    dividerText: {
      color: "#f1f5f9",
    },
    dividerLine: {
      backgroundColor: "#404040",
    },
    footer: {
      "& + div": {
        display: "none",
      },
    },
    footerActionLink: {
      width: "45px",
      height: "15px",
      fontFamily,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "15px",
      textDecorationLine: "underline",
      color: "#f1f5f9",
      "&:hover": {
        color: "#0ea5e9",
        transitionProperty:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        transitionDuration: "100ms",
      },
    },
    footerActionText: {
      height: "15px",
      fontFamily,
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "12px",
      lineHeight: "15px",
      color: "rgba(241, 245, 249, 0.65)",
    },
  },
};
