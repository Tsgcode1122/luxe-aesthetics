// ColorComponent.js
export const Colors = {
  gold: "#D0AD5B",
  darkGold: "#9E7A2C",
  lightGold: "#F7D782",
  coolBlack: "#333333",
  white: "#FFFFFF",
  offWhite: "#F8F8F8",
};

export const Shadows = {
  goldShadow: `
    0 0 2px #f3d57f,
    0 0 2px #f3d57f,
    0 0 2px #a08733,
    0 0 2px #a08733
  `,
  lightShadow: "#9E7A2C",
};

export const Gradients = {
  goldGradient: `
    linear-gradient(
      180deg,
      #0b090a 0%,
      #a08733 10%,
      #f3d57f 20%,
      #7d6023 30%,
      #f3d57f 40%,
      #9c782c 50%,
      #7d6023 60%,
      #8c6c28 70%,
      #9a762a 80%,
      #f3d57f 90%,
      #0b090a 100%
    )
  `,
  blackToGold: "linear-gradient(90deg, #333333 0%, #D0AD5B 100%)",
  goldToDarkGold: `
    linear-gradient(
      -135deg,
      #f0e8d7 0%,
      #f0e8d7 10%,
      #faf2df 20%,
      #f0e8d7 30%,
      #e1d7c0 60%,
      #d6d0c1 70%,
      #f0e8d7 80%,
      #d6d0c1 90%,
      #f0e8d7 100%
    )
  `,
  lightGoldToGold: `
    linear-gradient(
      185deg,
      #d8d5ce 0%,
      #f5f2ea 10%,
      #d8d5ce 20%,
      #f5f2ea 30%,
      #f5f2ea 60%,
      #d8d5ce 70%,
      #f5f2ea 80%,
      #f5f2ea 90%,
      #d8d5ce 100%
    )
  `,
};

export default { Colors, Shadows, Gradients };
