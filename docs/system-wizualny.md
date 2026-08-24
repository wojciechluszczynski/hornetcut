# System wizualny HornetCut

Ten dokument istnieje po to, żeby HornetCut i HydraCut nie zrosły się z powrotem
w jedną stronę w dwóch kolorach. Wcześniej różnica między nimi wynosiła 38 linii
CSS, samych wartości barwnych. Teraz różni je układ, nie paleta.

## Metafora: arkusz rysunkowy

HornetCut tnie po okręgu wokół osi, która leży w środku włazu. Strona jest
rysowana **jak arkusz z marginesem**: po lewej szyna z numerem sekcji, treść
zaczepiona o tę szynę, a geometria biegunowa jest motywem przewodnim.

HydraCut używa **wywołań przekroju A—A** i pionowej podziałki. To osobny język.
Elementów jednego nie przenosimy do drugiego.

## Elementy

| Klasa | Rola |
|---|---|
| `.sheet` | siatka `szyna \| treść`. Powyżej 1100 px dwie kolumny, niżej jedna |
| `.smark` | numer sekcji w szynie plus kreska na całą jej wysokość, `sticky` |
| `.measure` | pozioma podziałka zamykająca nagłówek i hero |
| `.arc` | łuk zakreślony wokół osi leżącej **poza kadrem** — to robi maszyna |
| `.bignum` | wielka liczba tabelaryczna, jak wybicie na tabliczce znamionowej |
| `.bleed` | wyjście poza `--shell` dla rysunków, które ma przycinać okno |

### Pułapka w `.sheet`

Reguła `.sheet:not(.sheet--free) > *:not(.smark)` wrzuca **każde** dziecko do
drugiej kolumny. Sekcja nie potrzebuje dodatkowego wrappera, ale jeżeli
wewnątrz jest własna siatka (`.kt`, `.faq-page`, `.safety`), musi ona siedzieć
w osobnym `div`, inaczej `.smark` wpadnie do niej jako komórka.

`.sheet--free` wyłącza tę regułę tam, gdzie kolumn jest więcej — na hero.

### Pułapka w nazwie `.measure`

Nie nazywać jej `.strip`. `StatStrip.astro` już zajmuje tę nazwę i globalna
reguła zniszczyłaby komponent.

### Pułapka w `.hero > *`

Reguła nadająca `position: relative` wszystkim dzieciom hero zabierała łukowi
pozycjonowanie absolutne i łuk zjadał 823 px wysokości. Dlatego jest zapisana
jako `.hero > *:not(.hero__arc)`. Ta sama klasa błędu wraca wszędzie tam, gdzie
tło jest elementem, a nie pseudoelementem.

## Numeracja

Strona główna numeruje sekcje `01`–`09`. Podstrony mają **numer arkusza** w
nagłówku (`<PageHero sheet="03">`, kolejność jak w nawigacji) i własną numerację
sekcji od `01` w środku. To nie kolizja: jedno jest arkuszem, drugie sekcją na nim.

Strony poza nawigacją (`404`, podziękowanie) numeru nie dostają, tylko etykietę.

## Rytm pasów

Równy padding na każdym pasie sprawia, że strona tyka jak metronom. Trzy stopnie
(`.band`, `.band--tight`, `.band--wide`) i **dwa** pasy `--paper` zamiast pięciu.

## Logotyp

W nagłówku i stopce stoi **wordmark producenta**. Logo Fijalo kończy się na słowie
HORNET, więc „Cut" dokłada typografia strony: IBM Plex Mono za pionową kreską.
To kompozycja lockupu, nie ingerencja w znak — warto ją pokazać Piotrowi.

Warianty barwne: plik `-light` ma **jasny tusz** i idzie na ciemne tło, `-dark`
jest grafitowy i idzie na jasne. Nazwa opisuje kolor farby, nie motyw strony.

Znak wchodzi jako tło CSS, nie `<img>`: przeglądarka pobiera wtedy wyłącznie ten
wariant, który stosuje. Plik z `currentColor` (`_archiwum/logo/`) nadaje się do
inline'owania, ale waży 30 kB na każdą podstronę.

Lockup jest o ~85 px szerszy od dawnego napisu i poniżej 480 px schodzi o stopień.
Nie chowamy „Cut" — bez niego nagłówek podaje inną nazwę niż domena.

## Zasady, które zostają

**Zakazane:** fiolet i indigo, gradienty blue→purple, glassmorphism, wyśrodkowane
hero z dwoma pigułkami, siatka trzech kart z ikonką lucide, `rounded-3xl`,
`shadow-2xl`, Inter, domyślny shadcn, emoji, stockowe zdjęcia AI maszyn,
półpauza w polskim copy.

**Obowiązuje:** Archivo do display i tekstu, IBM Plex Mono do każdej liczby i
etykiety, promień maksymalnie 2 px, struktura budowana kreską 1 px zamiast kart
i cieni, `prefers-reduced-motion` respektowane. Nagłówki będące pytaniami mają
pytajnik. Copy: krótkie zdania oznajmujące, konkretne liczby z jednostkami.
