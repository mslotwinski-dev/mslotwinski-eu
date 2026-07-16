export default [
  {
    id: 'algorytmy-genetyczne-000001',
    title: 'Algorytmy genetyczne - jak natura inspiruje programistów',
    date: '24 lutego 2026',
    img: 'https://images.pexels.com/photos/921878/pexels-photo-921878.jpeg',
    tags: ['programowanie'],
    content: `
      <p>Wszystko, co nas otacza, z czegoś wynika. Często myślimy, że każdy problem trzeba rozwiązać siłowo, pisząc tysiące linijek warunków logicznych. Czasami jednak warto odrzucić ciężki, umiłowany przez fizyków klasycznych, determinizm, i spojrzeć na problem z bardziej kreatywnie.  Skoro natura uznała proces ewolucji za doskonały, to w informatyce i przemyśle algorytmicznym też musiał on znaleźć zastosowanie, prawda? 
      
       </p><p>Prawda. 
      
      </p> <p>Zamiast pisać instrukcję krok po kroku, w algorytmach genetycznych tworzymy ramy symulacji. Powołujemy do życia populację losowych, często bardzo ułomnych rozwiązań. Następnie do gry wkracza funkcja przystosowania (tzw. fitness), która jak bezwzględna matka natura ocenia, czy dany osobnik nadaje się do czegokolwiek. Najlepsze z nich krzyżują się ze sobą, dokładamy do tego szczyptę losowych mutacji i proces powtarza się, rzeźbiąc z generacji na generację coraz doskonalszy kod.
      
      
      <p>Wraz z kolegą postanowiliśmy przenieść te surowe zasady do mikroskopijnego świata chemii obliczeniowej. Jak dokładnie opisaliśmy to w <a href="https://github.com/mslotwinski-dev/gold-hbn-optimization/" target="_blank">repozytorium</a>, celem projektu było znalezienie najbardziej stabilnej geometrii dla klastra sześciu atomów złota (Au6) zaadsorbowanego na płaskiej powierzchni heksagonalnego azotku boru (h-BN).  W przeciwieństwie do standardowych algorytmów pokoleniowych wykorzystaliśmy algorytm genetyczny typu steady-state w środowisku ASE. Oznacza to, że populacja nie wymiera w całości po każdym cyklu – zamiast tego nowe, ulepszone i lokalnie zrelaksowane (dzięki metodzie BFGS) osobniki płynnie zastępują te najsłabsze. Rolę absolutnego sędziego, który wyliczał energię i siły, powierzyliśmy modelowi uczenia maszynowego MACE – konkretnie użyto kalkulatora MACE-MH1 z głowicą oc20_usemppbe, idealną do układów powierzchniowych.  
      </p>
      `,
  },
]
