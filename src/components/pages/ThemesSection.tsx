export default function ThemesSection() {
  const themeCards = [
    {
      text: "Sustainability",
      color1: "#D9D9D9",
      color2: "#0E86C7",
      color3: "#D9D9D9",
      color4: "#006BD6",
      color5: "#1A4869",
    },
    {
      text: "AI in Traditional Medicine",
      color1: "#D9D9D9",
      color2: "#0E86C7",
      color3: "#D9D9D9",
      color4: "#098FC4",
      color5: "#00AA4D",
    },
    {
      text: "AI in Airline Operations",
      color1: "#D9D9D9",
      color2: "#580BF6",
      color3: "#D9D9D9",
      color4: "#0935C4",
      color5: "#5E50FF",
    },
    {
      text: "FinTech",
      color1: "#D9D9D9",
      color2: "#FC3228",
      color3: "#D9D9D9",
      color4: "#FC683CA6",
      color5: "#FD0037C2",
    },
    {
      text: "Ethereum",
      color1: "#D9D9D9",
      color2: "#01C7F7",
      color3: "#D9D9D9",
      color4: "#01E6E8",
      color5: "#7B8604",
    },
  ];
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center gap-8 p-5 pt-20">
      <h1 className="relative bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-center text-4xl font-light tracking-[-1.4px] text-transparent sm:text-5xl md:text-left">
        Themes of Define
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {themeCards.map((card) => (
          <div className="relative h-[138px] w-[292px] overflow-clip rounded-[8.5px]">
            <p className="flex h-full w-full items-center justify-center text-center text-xl">
              {card.text}
            </p>
            <img src="pixel_matrix.png" className="absolute top-0  mix-blend-soft-light" />

            <div className="absolute top-0 left-0 -z-1 h-full w-full">
              <div
                className="absolute top-[16px] right-[157px] h-[152px] w-[152px] rounded-full blur-[48px]"
                style={{ backgroundColor: card.color1 }}
              ></div>
              <div
                className="absolute top-[16px] right-[59px] h-[152px] w-[152px] rounded-full blur-[48px]"
                style={{ backgroundColor: card.color2 }}
              ></div>
              <div
                className="absolute bottom-[29px] left-[170px] h-[152px] w-[152px] rounded-full blur-[48px]"
                style={{ backgroundColor: card.color3 }}
              ></div>
              <div
                className="absolute right-[166px] bottom-[29px] h-[152px] w-[152px] rounded-full blur-[48px]"
                style={{ backgroundColor: card.color4 }}
              ></div>
              <div
                className="absolute top-[21px] left-[174px] h-[152px] w-[152px] rounded-full blur-[48px]"
                style={{ backgroundColor: card.color5 }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
