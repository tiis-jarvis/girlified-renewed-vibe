export const Partners = () => {
  return (
    <section className="py-16 bg-muted/20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">
          Supported by:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <div className="text-4xl font-serif italic transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '0.1s' }}>a</div>
          <div className="text-2xl font-bold transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '0.2s' }}>O'SHAUGHNESSY<br/>VENTURES</div>
          <div className="text-2xl font-bold text-green-700 transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '0.3s' }}>THE EWABILI<br/>GREEN INITIATIVE.</div>
          <div className="text-2xl font-bold text-blue-600 transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '0.4s' }}>NAZA AGAPE<br/>FOUNDATION</div>
        </div>
      </div>
    </section>
  );
};
