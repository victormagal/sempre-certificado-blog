'use client';
import Container from '../Container';

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
      <Container newClasses="pt-8 lg:pt-0">{children}</Container>
    </section>
  );
}
