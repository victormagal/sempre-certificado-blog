export default function Container({
  bgColor,
  bgContainer,
  children,
  gradient,
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
  newClasses
}) {
  return (
    <section style={{ background: bgColor ? bgColor : 'transparent' }}>
      <div
        className={`container grid lg:grid-cols-12 grid-cols-4 gap-6 mx-auto px-4 lg:px-0 ${
          newClasses && newClasses
        }`}
        style={{
          background: `${
            gradient
              ? `linear-gradient(90deg, ${firstColor} 0%, ${secondColor} 18.13%, ${thirdColor} 56.24%, ${fourthColor} 99.99%)`
              : bgContainer || 'transparent'
          }`
        }}
      >
        {children}
      </div>
    </section>
  );
}
