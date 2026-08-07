/**
 * HornetCut R650. Jedyne miejsce z treścią strony.
 *
 * ZASADA EDYCJI: cały widoczny tekst i każda liczba są tutaj. Komponenty
 * nie zawierają treści. Żeby zmienić stronę, edytujesz ten plik i przebudowujesz.
 *
 * ZNACZNIK "?" NA POCZĄTKU WARTOŚCI = dana niepotwierdzona.
 * Renderuje się z bursztynowym podkreśleniem i dopiskiem "do potwierdzenia".
 * Po potwierdzeniu wystarczy usunąć znak "?" z początku wartości.
 */

export const site = {
  meta: {
    brand: 'HORNETCUT',
    model: 'HornetCut R650',
    domain: 'hornetcut.pl',
    url: 'https://hornetcut.pl',
    lang: 'pl-PL',
    title: 'HornetCut R650. Wycinarka okręgów do studzienek kanalizacyjnych',
    description:
      'Wycinarka HornetCut R650 tnie asfalt i beton po obwodzie włazu. Średnica cięcia 1100–1300 mm, głębokość do 100 mm, studzienki 500–900 mm. Zapytaj o cenę.',
    // Autor i realizacja strony. Zaszyte w <meta name="author"> oraz w llms.txt.
    maker: 'Wojciech Łuszczyński, GTM Architect, wojciech.io',
  },

  contact: {
    // Dane z fijalo.pl oraz z publicznych rejestrów (CEIDG). NIP i REGON
    // oznaczone do potwierdzenia, bo pochodzą z agregatorów, nie z dokumentu firmy.
    company: 'Fijalo-Poland Cyprian Fijało',
    brandLine: 'Producent maszyn dla budownictwa podziemnego',
    phone: '+48 534 979 628',
    phoneHref: '+48534979628',
    email: 'biuro@fijalo.pl',
    street: 'ul. Jana Kochanowskiego 130',
    city: '80-405 Gdańsk',
    nip: '?8431504413',
    regon: '?221964971',
    hours: 'Poniedziałek do piątku, 9:00–18:00',
    reply: 'Odpowiadamy w ciągu jednego dnia roboczego.',
  },

  nav: [
    { label: 'Maszyna', href: '/#maszyna' },
    { label: 'Zastosowania', href: '/zastosowania/' },
    { label: 'Jak to działa', href: '/jak-to-dziala/' },
    { label: 'Dane techniczne', href: '/dane-techniczne/' },
    { label: 'Poradnik', href: '/poradnik/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Kontakt', href: '/kontakt/' },
  ],

  hero: {
    eyebrow: 'Wycinarka okręgów do studzienek',
    h1: 'Wytnij właz po okręgu.\nNie rozbijaj pół jezdni.',
    lead: 'HornetCut R650 mocuje się w pierścieniu włazu i tnie asfalt lub beton po obwodzie. Średnica cięcia 1100 do 1300 mm, głębokość do 100 mm, studzienki od 500 do 900 mm.',
    ctaPrimary: { label: 'Zapytaj o cenę', href: '/kontakt/' },
    ctaSecondary: { label: 'Dane techniczne', href: '/dane-techniczne/' },
  },

  stats: [
    { value: '100', unit: 'mm', label: 'Głębokość cięcia' },
    { value: '1100–1300', unit: 'mm', label: 'Średnica cięcia' },
    { value: '500–900', unit: 'mm', label: 'Zakres studzienek' },
    { value: '11,2', unit: 'KM', label: 'Silnik spalinowy' },
    { value: '125', unit: 'kg', label: 'Masa robocza' },
  ],

  /** Ból klienta zestawiony z tym, co się zmienia. Bez obietnic bez pokrycia. */
  pains: {
    eyebrow: 'Problem i korzyść',
    h2: 'Co kosztuje najwięcej przy regulacji studzienki?',
    lead: 'Nie samo cięcie. Kosztuje wszystko, co trzeba zrobić dookoła, kiedy wycinka wyjdzie większa i brzydsza, niż powinna.',
    rows: [
      {
        pain: 'Rozbiórka wychodzi dwa razy większa od potrzebnej',
        gain: 'Zdejmujesz pierścień o średnicy ustawionej co do milimetra, od 1100 do 1300 mm.',
      },
      {
        pain: 'Wywóz gruzu i dowóz masy rosną razem z powierzchnią',
        gain: 'Mniejsza wycinka to mniej gruzu na wywóz i mniej mieszanki do wbudowania.',
      },
      {
        pain: 'Pas ruchu stoi zamknięty dłużej, niż zakładał harmonogram',
        gain: 'Jedno mocowanie i jedno przejście po obwodzie zamiast czterech cięć i dobijania naroży.',
      },
      {
        pain: 'Po zimie styk wokół włazu pęka i wraca jako reklamacja',
        gain: 'Pionowa, równa krawędź daje czysty styk ze świeżą masą.',
      },
      {
        pain: 'Młot potrafi uszkodzić korpus studni albo pierścień odciążający',
        gain: 'Tarcza pracuje w nawierzchni, maszyna opiera się na włazie, konstrukcja studni zostaje nietknięta.',
      },
    ],
  },

  why: {
    eyebrow: 'Porównanie metod',
    h2: 'Młot, piła prosta czy cięcie po obwodzie?',
    body: [
      'Rozkuwanie młotem zabiera więcej nawierzchni, niż wymaga tego regulacja studzienki. Więcej gruzu do wywiezienia, więcej masy do wbudowania, dłuższe zajęcie pasa ruchu.',
      'Krawędź po młocie jest poszarpana, więc styk ze świeżą masą przepuszcza wodę i pęka po pierwszej zimie. Cięcie po obwodzie zdejmuje tylko pierścień wokół włazu i zostawia równą, pionową krawędź.',
    ],
    rows: [
      {
        method: 'Młot, rozkuwanie',
        marks: ['krawędź poszarpana', 'nadmiarowy obszar rozbiórki', 'ryzyko uszkodzenia korpusu studni'],
        highlight: false,
      },
      {
        method: 'Piła prosta, cięcie na kwadrat',
        marks: ['równa krawędź', 'cztery przejścia i naroża do dobicia', 'wycinka większa od potrzebnej'],
        highlight: false,
      },
      {
        method: 'HornetCut R650',
        marks: ['jedno mocowanie w pierścieniu włazu', 'jedno przejście po obwodzie', 'pierścień wychodzi w całości'],
        highlight: true,
      },
    ],
  },

  how: {
    eyebrow: 'Jak to działa',
    h2: 'Cztery kroki, jeden operator',
    steps: [
      {
        title: 'Mocowanie',
        body: 'Maszyna wchodzi w pierścień włazu na regulowanym uchwycie krzyżowym. Nie wymaga kotwienia w nawierzchni ani przygotowania podłoża.',
      },
      {
        title: 'Ustawienie',
        body: 'Ustawiasz promień cięcia w zakresie 550 do 650 mm i głębokość do 100 mm. Blokada obrotu zwalniana jest po ustawieniu.',
      },
      {
        title: 'Cięcie',
        body: 'Pełny obrót ramienia o 360 stopni. Posuw głębokości i posuw obrotu prowadzi operator, więc masz kontrolę nad tempem na twardym kruszywie.',
      },
      {
        title: 'Wyjęcie',
        body: 'Wycięty pierścień wychodzi w całości. Korpus studni i właz zostają nienaruszone, obszar wokół nadaje się od razu do regulacji.',
      },
    ],
    video: {
      youtubeId: '', // pusty = slot na film promocyjny
      caption: 'Film promocyjny HornetCut R650',
      title: 'HornetCut R650 w pracy: cięcie po obwodzie włazu studzienki',
    },
  },

  /** Warstwa ludzka. Zdjęcia i cytat dosyłamy, dlatego są tu sloty, nie wymyślone treści. */
  people: {
    eyebrow: 'Ludzie i maszyna',
    h2: 'Kto tym pracuje?',
    body: 'Maszyna jedzie na budowę z brygadą drogową albo z ekipą sieciowca. Prowadzi ją operator, który zna nawierzchnię, a nie serwisant producenta. Dlatego liczy się to, żeby obsługa była oczywista po pierwszym instruktażu, a części dało się zamówić jednym telefonem.',
    quote: {
      text: '?Miejsce na opinię użytkownika. Jedno lub dwa zdania o tym, ile trwa wycięcie i co się zmieniło na budowie.',
      author: '?Imię i nazwisko',
      role: '?Firma, stanowisko',
    },
    facts: [
      { k: 'Obsługa', v: '?jeden operator przy cięciu' },
      { k: 'Instruktaż', v: '?przy przekazaniu maszyny' },
      { k: 'Kontakt serwisowy', v: 'ten sam numer co do sprzedaży' },
    ],
  },

  uses: {
    eyebrow: 'Zastosowania',
    h2: 'Gdzie pracuje?',
    items: [
      {
        title: 'Regulacja wysokości studzienek',
        icon: 'poziom',
        body: 'Podniesienie lub obniżenie włazu do poziomu nowej nawierzchni bez rozbierania obszaru wokół.',
      },
      {
        title: 'Wymiana włazów i pierścieni',
        icon: 'wlaz',
        body: 'Wymiana skorodowanego lub pękniętego włazu razem z pierścieniem odciążającym.',
      },
      {
        title: 'Remonty i przebudowy dróg',
        icon: 'droga',
        body: 'Przygotowanie studzienek przed frezowaniem i układaniem nowej warstwy ścieralnej.',
      },
      {
        title: 'Sieci wod-kan, ciepłownicze i gazowe',
        icon: 'siec',
        body: 'Dostęp do armatury i zasuw w nawierzchni utwardzonej, bez rozkuwania połowy pasa.',
      },
      {
        title: 'Place manewrowe i parkingi',
        icon: 'plac',
        body: 'Punktowa naprawa nawierzchni betonowej i asfaltowej na terenach zakładowych.',
      },
      {
        title: 'Awarie i szybkie interwencje',
        icon: 'awaria',
        body: 'Wejście w nawierzchnię i jej odtworzenie w tym samym dniu roboczym, z krótkim zajęciem pasa.',
      },
    ],
  },

  equipment: {
    eyebrow: 'Wyposażenie',
    h2: 'Co jest w standardzie?',
    items: [
      { title: 'Wózek przejezdny kołowy', body: 'Przestawienie maszyny między studzienkami bez dźwigu.' },
      { title: 'Rozruch ręczny i elektryczny', body: 'Rozruch elektryczny na co dzień, linka jako zabezpieczenie.' },
      { title: 'Regulowany uchwyt krzyżowy', body: 'Mocowanie w pierścieniu włazu, bez kotwienia w nawierzchni.' },
      { title: 'Kogut ostrzegawczy', body: 'Światło pomarańczowe, demontowane na czas transportu.' },
      { title: 'Licznik motogodzin', body: 'Kontrola przeglądów i realnego przebiegu pracy silnika.' },
      { title: 'Blokada obrotu do transportu', body: 'Ramię unieruchomione na czas przewozu i rozładunku.' },
    ],
  },

  specs: {
    eyebrow: 'Dane techniczne',
    h2: 'Parametry',
    caption: 'Dane techniczne wycinarki HornetCut R650',
    rows: [
      { k: 'Maksymalna głębokość cięcia', v: '100 mm' },
      { k: 'Średnica cięcia, regulowana', v: '1100–1300 mm' },
      { k: 'Maksymalny promień cięcia', v: '650 mm' },
      { k: 'Zakres średnic studzienek', v: '500–900 mm' },
      { k: 'Silnik', v: 'spalinowy benzynowy, 11,2 KM' },
      { k: 'Rozruch', v: 'ręczny i elektryczny' },
      { k: 'Posuw głębokości i obrotu', v: 'ręczny' },
      { k: 'Masa robocza', v: 'ok. 125 kg' },
      { k: 'Wymiary transportowe', v: '?840 × 1080 mm' },
      { k: 'Tarcza diamentowa', v: '?średnica do uzupełnienia' },
      { k: 'Cięcie na mokro', v: '?do potwierdzenia' },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    h2: 'Najczęściej pytane',
    items: [
      {
        q: 'Na jakich studzienkach pracuje HornetCut R650?',
        a: 'Na studzienkach o średnicy włazu od 500 do 900 mm. Maszyna mocuje się w pierścieniu włazu regulowanym uchwytem krzyżowym, więc nie wymaga kotwienia w nawierzchni. Średnicę cięcia ustawiasz niezależnie, w zakresie 1100 do 1300 mm.',
        home: true,
      },
      {
        q: 'Czy maszyna tnie beton, czy tylko asfalt?',
        a: 'Tnie asfalt i beton. Zakres w żelbecie zależy od doboru tarczy diamentowej, ?ustalamy go przy zamówieniu.',
        home: true,
      },
      {
        q: 'Ile osób obsługuje maszynę?',
        a: '?Do samego cięcia wystarczy jeden operator. Do rozładunku i przestawienia maszyny o masie około 125 kg wygodniej pracować we dwie osoby, choć wózek kołowy pozwala przetoczyć ją w pojedynkę po równym podłożu.',
        home: true,
      },
      {
        q: 'Jak transportuje się HornetCut R650?',
        a: 'Na wózku przejezdnym kołowym. Przed transportem blokujesz obrót ramienia, a kogut ostrzegawczy jest demontowany. Masa robocza to około 125 kg, więc maszyna mieści się w zwykłej przyczepie lub w skrzyni auta dostawczego.',
        home: true,
      },
      {
        q: 'Ile trwa wycięcie jednego okręgu?',
        a: '?Czas zależy od głębokości, rodzaju nawierzchni i tarczy. Dokładny czas dla asfaltu 100 mm uzupełnimy po pomiarach na budowie.',
        home: true,
      },
      {
        q: 'Ile kosztuje HornetCut R650?',
        a: 'Cena zależy od konfiguracji i dostępności. ?Aktualny cennik wysyłamy w odpowiedzi na zapytanie, zwykle w ciągu jednego dnia roboczego.',
        home: true,
      },
      {
        q: 'Czy głębokość 100 mm osiąga się w jednym przejściu?',
        a: '?Zalecana liczba przejść zależy od twardości nawierzchni. Uzupełnimy po potwierdzeniu z dokumentacją techniczną.',
        home: false,
      },
      {
        q: 'Czy cięcie wymaga podłączenia wody?',
        a: '?Do potwierdzenia. Cięcie na mokro ogranicza pylenie i wydłuża żywotność tarczy, ale wymaga zasilania wodą na stanowisku.',
        home: false,
      },
      {
        q: 'Czy da się wyciąć okrąg tam, gdzie nie ma jeszcze włazu?',
        a: '?Do potwierdzenia. Uchwyt krzyżowy bazuje na pierścieniu włazu, więc cięcie w pełnej nawierzchni wymagałoby dodatkowego mocowania.',
        home: false,
      },
      {
        q: 'Jaka jest gwarancja i gdzie jest serwis?',
        a: '?Warunki gwarancji i lokalizacja serwisu do uzupełnienia. Części eksploatacyjne, w tym tarcze, są dostępne z magazynu.',
        home: false,
      },
      {
        q: 'Jaki jest czas dostawy?',
        a: '?Termin zależy od dostępności maszyn w danym momencie. Podajemy go w odpowiedzi na zapytanie.',
        home: false,
      },
      {
        q: 'Czy prowadzicie szkolenie z obsługi?',
        a: '?Do potwierdzenia. Przekazanie maszyny z instruktażem na miejscu jest możliwe do ustalenia przy zamówieniu.',
        home: false,
      },
    ],
  },

  maker: {
    eyebrow: 'Producent',
    h2: 'Kto za tym stoi?',
    body: 'Fijalo-Poland z Gdańska, polski producent maszyn do robót bezwykopowych. Ich sterowana maszyna przeciskowa ALUSTEER jeździ na targi branżowe i na szkolenia w terenie. Ta sama firma, ten sam serwis, ten sam numer telefonu, pod który dzwonisz po części.',
    facts: [
      { k: 'Siedziba', v: 'Gdańsk, Kochanowskiego 130' },
      { k: 'Druga marka', v: 'ALUSTEER, przeciski sterowane' },
      { k: 'Produkcja', v: 'Polska' },
      { k: 'Targi', v: 'TRAKO i ENERGETAB 2025' },
      { k: 'Na rynku od', v: '?2013' },
    ],
    links: [
      { label: 'fijalo.pl', href: 'https://fijalo.pl/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@fijalopoland' },
    ],
  },

  form: {
    eyebrow: 'Kontakt',
    h2: 'Zapytaj o cenę i dostępność',
    intro: 'Napisz, na jakich studzienkach pracujesz i w jakiej nawierzchni. Odpowiemy konkretną ceną i terminem.',
    endpoint: '/api/kontakt.php',
    fields: {
      name: 'Imię i nazwisko',
      company: 'Firma',
      phone: 'Telefon',
      email: 'E-mail',
      scope: 'Zakres średnic studzienek',
      message: 'Wiadomość',
    },
    scopeOptions: ['500–600 mm', '600–800 mm', '800–900 mm', 'Różne średnice'],
    consent:
      'Wyrażam zgodę na kontakt w sprawie mojego zapytania. Dane przetwarzamy zgodnie z polityką prywatności.',
    submit: 'Wyślij zapytanie',
    success: 'Zapytanie wysłane. Odezwiemy się w ciągu jednego dnia roboczego.',
    error: 'Nie udało się wysłać formularza. Zadzwoń albo napisz bezpośrednio na adres e-mail.',
  },

  /** Lista ujęć do dosłania. Kolejność zgodna z układem strony. */
  photos: {
    hero: { id: 'FOTO 01', desc: 'Maszyna zamocowana w pierścieniu włazu, ujęcie z góry', ratio: '3:2' },
    work: { id: 'FOTO 02', desc: 'Operator przy pełnym obrocie ramienia, plan pełny', ratio: '3:2' },
    edge: { id: 'FOTO 03', desc: 'Krawędź cięcia z bliska, widoczna pionowa ścianka', ratio: '4:3' },
    ring: { id: 'FOTO 04', desc: 'Wyjęty pierścień asfaltu obok studzienki', ratio: '4:3' },
    transport: { id: 'FOTO 05', desc: 'Maszyna na wózku kołowym, blokada obrotu założona', ratio: '3:2' },
    detail: { id: 'FOTO 06', desc: 'Uchwyt krzyżowy i regulacja promienia, detal', ratio: '1:1' },
    crew: { id: 'FOTO 07', desc: 'Operator w kamizelce przy maszynie, twarz widoczna, plan amerykański', ratio: '3:2' },
    handover: { id: 'FOTO 08', desc: 'Przekazanie maszyny i instruktaż, dwie osoby przy urządzeniu', ratio: '3:2' },
    site: { id: 'FOTO 09', desc: 'Cała brygada i oznakowany odcinek drogi, szeroki plan', ratio: '16:9' },
  },

  downloads: [
    { title: 'Karta produktu HornetCut R650', file: '?do dostarczenia', format: 'PDF' },
    { title: 'Instrukcja obsługi i DTR', file: '?do dostarczenia', format: 'PDF' },
    { title: 'Deklaracja zgodności CE', file: '?do dostarczenia', format: 'PDF' },
  ],

  /* ------------------------------------------------------------------
     PODSTRONY
     ------------------------------------------------------------------ */
  pages: {
    specs: {
      title: 'Dane techniczne HornetCut R650',
      description:
        'Pełna specyfikacja wycinarki HornetCut R650: głębokość cięcia 100 mm, średnica 1100–1300 mm, silnik 11,2 KM, masa 125 kg, wyposażenie standardowe.',
      h1: 'Dane techniczne\nHornetCut R650',
      lead: 'Parametry maszyny w konfiguracji standardowej. Pozycje oznaczone podkreśleniem czekają na potwierdzenie w dokumentacji technicznej producenta.',
      blocks: [
        {
          h2: 'Cięcie',
          rows: [
            { k: 'Maksymalna głębokość cięcia', v: '100 mm' },
            { k: 'Średnica cięcia, regulowana', v: '1100–1300 mm' },
            { k: 'Maksymalny promień cięcia', v: '650 mm' },
            { k: 'Zakres średnic studzienek', v: '500–900 mm' },
            { k: 'Zakres obrotu ramienia', v: '360°' },
            { k: 'Posuw głębokości', v: 'ręczny' },
            { k: 'Posuw obrotu', v: 'ręczny' },
            { k: 'Tarcza diamentowa', v: '?średnica do uzupełnienia' },
            { k: 'Cięcie na mokro', v: '?do potwierdzenia' },
          ],
        },
        {
          h2: 'Napęd',
          rows: [
            { k: 'Typ silnika', v: 'spalinowy, benzynowy' },
            { k: 'Moc', v: '11,2 KM' },
            { k: 'Rozruch', v: 'ręczny i elektryczny' },
            { k: 'Pojemność zbiornika paliwa', v: '?do uzupełnienia' },
            { k: 'Licznik motogodzin', v: 'w standardzie' },
          ],
        },
        {
          h2: 'Podwozie i transport',
          rows: [
            { k: 'Masa robocza', v: 'ok. 125 kg' },
            { k: 'Wózek przejezdny', v: 'kołowy, w standardzie' },
            { k: 'Blokada obrotu do transportu', v: 'w standardzie' },
            { k: 'Wymiary transportowe', v: '?840 × 1080 mm' },
            { k: 'Światło ostrzegawcze', v: 'pomarańczowe, demontowane' },
          ],
        },
      ],
      note: 'Producent zastrzega prawo do zmian konstrukcyjnych. Dane nie stanowią oferty w rozumieniu Kodeksu cywilnego.',
    },

    uses: {
      title: 'Zastosowania wycinarki do studzienek',
      description:
        'Gdzie pracuje HornetCut R650: regulacja studzienek, wymiana włazów, remonty dróg, sieci wod-kan, place manewrowe i szybkie interwencje awaryjne.',
      h1: 'Zastosowania',
      lead: 'Wszędzie tam, gdzie trzeba wejść w utwardzoną nawierzchnię wokół włazu i odtworzyć ją tego samego dnia.',
      details: [
        {
          title: 'Regulacja wysokości studzienek',
          body: 'Po nałożeniu nowej warstwy ścieralnej właz zostaje poniżej poziomu jezdni. Cięcie po obwodzie pozwala zdjąć pierścień nawierzchni, wyregulować właz na docelową rzędną i uzupełnić masę tylko w wyciętym pierścieniu. Obszar naprawy jest przewidywalny, a krawędź pionowa, więc styk trzyma szczelność.',
        },
        {
          title: 'Wymiana włazów i pierścieni odciążających',
          body: 'Skorodowany właz albo pęknięty pierścień odciążający wymaga dostępu do korpusu studni. Wycięcie okręgu odsłania konstrukcję bez rozkuwania nawierzchni młotem, więc korpus studni nie dostaje udarów.',
        },
        {
          title: 'Remonty i przebudowy dróg',
          body: 'Przy frezowaniu i układaniu nowej nawierzchni studzienki obsługuje się seryjnie. Maszyna na wózku przejeżdża między kolejnymi włazami, a zakres średnic 1100 do 1300 mm pokrywa typowe wymiary spotykane w drogach publicznych.',
        },
        {
          title: 'Sieci wod-kan, ciepłownicze i gazowe',
          body: 'Dostęp do zasuw, hydrantów i armatury schowanej pod nawierzchnią. Punktowa wycinka ogranicza zakres odtworzenia i skraca czas zajęcia pasa ruchu, co ma bezpośrednie przełożenie na koszt zajęcia terenu.',
        },
        {
          title: 'Place manewrowe, parkingi i tereny zakładowe',
          body: 'Nawierzchnie betonowe i asfaltowe na terenach przemysłowych. Naprawa punktowa zamiast wymiany całych płyt, przy zachowanym ruchu na pozostałej części placu.',
        },
        {
          title: 'Awarie i szybkie interwencje',
          body: 'Przy awarii liczy się czas wejścia i czas odtworzenia. Maszyna nie wymaga przygotowania podłoża ani kotwienia, więc od dojazdu do pierwszego cięcia mija tyle, ile zajmuje ustawienie uchwytu w pierścieniu włazu.',
        },
      ],
    },

    how: {
      title: 'Jak działa wycinarka okręgów HornetCut R650',
      description:
        'Cięcie po obwodzie włazu krok po kroku: mocowanie w pierścieniu, ustawienie promienia i głębokości, pełny obrót 360 stopni, wyjęcie pierścienia nawierzchni.',
      h1: 'Jak to działa',
      lead: 'Maszyna bazuje na pierścieniu włazu, a nie na nawierzchni. To jedyny powód, dla którego cięcie po okręgu jest powtarzalne bez wytyczania i bez kotwienia.',
      safety: {
        h2: 'Zanim zaczniesz ciąć',
        items: [
          'Oznakuj i zabezpiecz miejsce pracy zgodnie z projektem organizacji ruchu.',
          'Sprawdź, czy pierścień włazu jest stabilny i czy uchwyt krzyżowy ma pełne oparcie.',
          'Ustaw promień i głębokość przed uruchomieniem posuwu obrotu.',
          'Pracuj w środkach ochrony: ochronniki słuchu, okulary, rękawice, obuwie ochronne.',
          '?Zasady cięcia na mokro i odprowadzania szlamu uzupełnimy zgodnie z DTR.',
        ],
      },
    },

    faq: {
      title: 'FAQ: wycinarka do studzienek kanalizacyjnych',
      description:
        'Odpowiedzi na pytania o HornetCut R650: zakres studzienek, głębokość cięcia, obsługa, transport, tarcze, cena i dostawa.',
      h1: 'Pytania i odpowiedzi',
      lead: 'Jeśli czegoś tu brakuje, zadzwoń albo wyślij zapytanie. Odpowiadamy konkretem, nie folderem reklamowym.',
    },

    contact: {
      title: 'Kontakt i zapytanie ofertowe',
      description:
        'Zapytaj o cenę i dostępność wycinarki HornetCut R650. Odpowiadamy w ciągu jednego dnia roboczego.',
      h1: 'Kontakt',
      lead: 'Napisz, na jakich studzienkach pracujesz i w jakiej nawierzchni. Odpowiemy ceną, terminem i doborem tarczy.',
    },

    downloads: {
      title: 'Materiały do pobrania',
      description: 'Karta produktu, instrukcja obsługi i deklaracja zgodności CE wycinarki HornetCut R650.',
      h1: 'Do pobrania',
      lead: 'Dokumentacja maszyny w formacie PDF. Jeśli potrzebujesz czegoś, czego tu nie ma, napisz.',
    },

    thanks: {
      title: 'Zapytanie wysłane',
      description: 'Dziękujemy za zapytanie o HornetCut R650.',
      h1: 'Zapytanie wysłane',
      lead: 'Odezwiemy się w ciągu jednego dnia roboczego. Jeśli sprawa jest pilna, zadzwoń.',
    },

    privacy: {
      title: 'Polityka prywatności',
      description: 'Zasady przetwarzania danych osobowych w serwisie hornetcut.pl.',
      h1: 'Polityka prywatności',
    },

    notFound: {
      title: 'Strona nie istnieje',
      description: 'Pod tym adresem nic nie ma.',
      h1: 'Błąd 404',
      lead: 'Pod tym adresem nic nie ma. Wróć na stronę główną albo zajrzyj do danych technicznych.',
    },
  },
} as const;

export type Site = typeof site;
