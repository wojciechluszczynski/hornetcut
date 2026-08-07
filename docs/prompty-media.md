# Prompty na materiały: wideo i zdjęcia

Do czego to jest: strona ma gotowe sloty na zdjęcia i film. Każdy slot ma numer,
opis ujęcia i proporcję. Ten plik daje gotowe prompty pod każdy z nich.

**Zasada nadrzędna.** Maszyny HornetCut R650 nie ma w żadnym modelu. Prompt tekstowy
wymyśli maszynę, która nie istnieje, i to widać po dwóch sekundach. Dlatego:

| Co pokazujemy | Metoda |
|---|---|
| Sama maszyna, cięcie, krawędź, wyjęty pierścień | **image-to-video z Waszego zdjęcia** albo zwykłe wideo z budowy |
| Kontekst: droga, ruch, oznakowanie, ekipa z daleka, asfalt | text-to-video, bezpiecznie |
| Tła i tekstury pod sekcje | text-to-image, mocno przyciemnione |

---

## 1. Seedance 2.5, image-to-video (priorytet)

Wrzucasz jedno swoje zdjęcie maszyny i dokładasz prompt ruchu. Model nie wymyśla
sprzętu, tylko animuje to, co jest na kadrze.

**Ustawienia dla wszystkich ujęć:** 1080p lub wyżej, 16:9, 5 s, 24 fps, bez dźwięku,
bez napisów, bez logotypów.

### V1. Ujęcie otwierające (hero, pętla)
> Slow orbit around a yellow and black circular asphalt cutter mounted inside a cast iron
> manhole frame on a Polish municipal road. Camera drifts 20 degrees to the right at ground
> level, shallow depth of field, fine dust in the air, overcast Baltic daylight, wet asphalt
> reflections. Machine stays exactly as in the source image. Slow, steady, documentary.

### V2. Cięcie po obwodzie
> The cutting arm rotates slowly clockwise around the manhole, diamond blade in contact with
> asphalt, thin dust plume rising, operator hand steady on the handle. Locked-off camera,
> no zoom. Realistic industrial motion, no sparks, no exaggeration.

### V3. Krawędź cięcia, detal
> Slow macro push-in on a freshly cut vertical groove in asphalt around a manhole frame,
> clean edge, loose aggregate at the bottom of the cut, dust settling. 8 second slow dolly,
> no camera shake.

### V4. Wyjęcie pierścienia
> Two workers in yellow high-visibility vests lift a cut ring of asphalt out of the road
> surface with crowbars, revealing the manhole structure underneath. Natural overcast light,
> handheld documentary camera, slight movement.

### V5. Transport
> The machine on its wheeled trolley being pushed along a closed lane of a Polish street,
> orange warning beacon on top, traffic cones in the background, tracking shot from the side
> at walking pace.

---

## 2. Seedance 2.5, text-to-video (tylko kontekst, bez maszyny)

### V6. Otwarcie filmu, plan ogólny
> Aerial descent over a Polish municipal street under repair, closed lane marked with red and
> white traffic cones, a road crew in yellow high-visibility vests around an open manhole,
> overcast sky, wet asphalt, muted graphite and amber colour palette, cinematic documentary
> style, no text, no logos, no brand marks.

### V7. Problem, przebitka
> Close-up of a broken, uneven asphalt patch around a sunken manhole cover on a busy Polish
> road, cracked edges, standing water in the depression, cars passing in the background out of
> focus, grey overcast light, realistic documentary photography style.

### V8. Zamknięcie
> A finished road surface with a perfectly circular new asphalt ring around a manhole cover,
> traffic returning to the lane, low evening light, calm and clean, no people in frame.

**Prompt negatywny do wszystkich:**
> text, watermark, logo, brand names, distorted machinery, extra wheels, floating parts,
> unrealistic sparks, fire, American style road markings, yellow school bus, palm trees,
> people looking at camera, deformed hands, plastic look, oversaturated colours

---

## 3. Magnific, obróbka Waszych zdjęć

Nie do generowania, tylko do ratowania zdjęć z telefonu.

| Zadanie | Ustawienia |
|---|---|
| Powiększenie do 2400 px | Upscale 2x, Creativity **1–2**, HDR **2**, Resemblance **7–8** |
| Zdjęcie w słońcu, wypalone | Relight: „overcast soft daylight from the left, muted graphite tones" |
| Zdjęcie w cieniu, płaskie | Relight: „low contrast overcast light, lift shadows, keep amber machine colour" |

Creativity powyżej 3 zaczyna dorysowywać śruby i napisy na maszynie. Przy sprzęcie
technicznym trzymaj nisko.

---

## 4. Canva, tła i tekstury

Do sekcji, nie do treści. Generuj i przyciemniaj.

> Top-down documentary photo of worn asphalt road surface with fine aggregate texture, wet
> after rain, graphite and charcoal tones, even lighting, no objects, no text, seamless

> Macro texture of freshly cut concrete edge, dust particles, cold grey tones, shallow depth
> of field, no text

Uwaga: Canva i inne modele dorysowują napisy na włazach. Kadruj tak, żeby ich nie było,
albo używaj zdjęcia tylko jako tła pod tekstem, przyciemnionego do 15–20 procent.

---

## 5. Czego potrzebuje strona

| Slot | Ujęcie | Proporcja |
|---|---|---|
| FOTO 01 | Maszyna zamocowana w pierścieniu włazu, z góry | 3:2 |
| FOTO 02 | Operator przy pełnym obrocie ramienia, plan pełny | 3:2 |
| FOTO 03 | Krawędź cięcia z bliska, widoczna pionowa ścianka | 4:3 |
| FOTO 04 | Wyjęty pierścień asfaltu obok studzienki | 4:3 |
| FOTO 05 | Maszyna na wózku kołowym, blokada obrotu założona | 3:2 |
| FOTO 06 | Uchwyt krzyżowy i regulacja promienia, detal | 1:1 |
| FOTO 07 | Operator w kamizelce przy maszynie, twarz widoczna | 3:2 |
| FOTO 08 | Przekazanie maszyny i instruktaż, dwie osoby | 3:2 |
| FOTO 09 | Cała brygada i oznakowany odcinek, szeroki plan | 16:9 |
| FILM | Film promocyjny, docelowo YouTube | 16:9 |

Zdjęcia wrzucasz do `public/foto/`, film wystarczy jako identyfikator z YouTube
wpisany w `src/data/site.ts` w polu `how.video.youtubeId`.

**Jedno zdjęcie prawdziwego operatora przy maszynie jest warte więcej niż dziesięć
wygenerowanych ujęć.** Jeżeli macie cokolwiek z budowy, nawet z telefonu, to idzie
przez Magnific i ląduje na stronie.
