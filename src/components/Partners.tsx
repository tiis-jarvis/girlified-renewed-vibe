export const Partners = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Supported by:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 hover:opacity-100 transition-opacity">
          <div className="text-4xl font-serif italic">a</div>
          <div className="text-2xl font-bold">O'SHAUGHNESSY<br/>VENTURES</div>
          <div className="text-2xl font-bold text-green-700">THE EWABILI<br/>GREEN INITIATIVE.</div>
          <div className="text-2xl font-bold text-blue-600">NAZA AGAPE<br/>FOUNDATION</div>
        </div>
      </div>
    </section>
  );
};
