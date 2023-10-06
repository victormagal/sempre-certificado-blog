'use client';

export default function HeroPage({
  bgColor,
  children,
  gradient,
  firstColor,
  secondColor,
  thirdColor,
  fourthColor
}) {
  return (
    <section
      style={{
        background: `${
          gradient
            ? `linear-gradient(83deg, ${firstColor} -1.48%, ${secondColor} 16.92%, ${thirdColor} 55.59%, ${fourthColor} 100%)`
            : bgColor
        }`
      }}
      className="relative flex flex-col justify-center"
    >
      <div className="container grid lg:grid-cols-12 grid-cols-4 gap-6 items-center mx-auto py-12 lg:py-0 px-4">
        {children}
      </div>
    </section>
  );
}
