# Prokofiev Piano Sonata No. 2 in D minor, Op. 14

## Overview

| | |
|---|---|
| **Composer** | Sergei Prokofiev |
| **Key** | D minor |
| **Opus** | 14 |
| **Composed** | 1912 |
| **Premiered** | 5 February 1914, Moscow |
| **Duration** | ~18–20 minutes |
| **Movements** | 4 |

## Structure and Form (with Bar Numbers)

A four-movement sonata that is lean, transparent, and pungent. Prokofiev's
second sonata already shows full command of large-scale form while remaining
economical — no bar is wasted.

### Complete Architecture

```mermaid
graph TD
    subgraph "Sonata No. 2 in D minor, Op. 14"
        I["I. Allegro, ma non troppo<br/>D minor | Sonata Form<br/>mm. 1–178"]
        II["II. Scherzo: Allegro marcato<br/>A minor | Ternary (ABA)<br/>mm. 1–112"]
        III["III. Andante<br/>G major | Ternary (ABA')<br/>mm. 1–58"]
        IV["IV. Vivace<br/>D minor → D major | Rondo<br/>mm. 1–170"]
    end
    I --> II --> III --> IV
```

---

### I. Allegro, ma non troppo (D minor)

Sonata form with a characteristically compressed recapitulation.

```mermaid
graph LR
    subgraph Exposition ["Exposition (mm. 1–69)"]
        T1["Theme 1<br/>mm. 1–26<br/>D minor"]
        TR["Transition<br/>mm. 27–38"]
        T2["Theme 2<br/>mm. 39–57<br/>F major"]
        CL["Closing<br/>mm. 58–69"]
    end

    subgraph Development ["Development (mm. 70–120)"]
        D1["T1 fragmentation<br/>mm. 70–85"]
        D2["Più mosso<br/>mm. 86–104"]
        D3["Retransition<br/>mm. 105–120"]
    end

    subgraph Recapitulation ["Recapitulation (mm. 121–178)"]
        R1["Theme 1<br/>mm. 121–142<br/>D minor"]
        R2["Theme 2<br/>mm. 143–163<br/>D major"]
        CO["Coda<br/>mm. 164–178<br/>D minor"]
    end

    CL --> D1
    D3 --> R1
```

| Section | Bars | Key | Character |
|---------|------|-----|-----------|
| Theme 1 | 1–26 | D minor | Brooding, rhythmically driven |
| Transition | 27–38 | → F major | Ascending sequences |
| Theme 2 | 39–57 | F major | Lyrical, singing quality |
| Closing | 58–69 | F major | Cadential figures |
| Development | 70–120 | Various | Fragmentation, Più mosso climax |
| Recap — Theme 1 | 121–142 | D minor | Compressed return |
| Recap — Theme 2 | 143–163 | D major | Tonal resolution |
| Coda | 164–178 | D minor | Quiet, unresolved ending |

---

### II. Scherzo: Allegro marcato (A minor)

A sharp, biting scherzo in ternary form with a contrasting lyrical trio.

```mermaid
graph LR
    subgraph A_Section ["A Section (mm. 1–40)"]
        A1["Main theme<br/>mm. 1–16<br/>A minor"]
        A2["Extension<br/>mm. 17–32<br/>modulatory"]
        A3["Closing phrase<br/>mm. 33–40"]
    end

    subgraph B_Section ["B Section — Trio (mm. 41–72)"]
        B1["Trio theme<br/>mm. 41–56<br/>F major"]
        B2["Trio continuation<br/>mm. 57–72"]
    end

    subgraph A_Return ["A' Section (mm. 73–112)"]
        A4["Main theme return<br/>mm. 73–88<br/>A minor"]
        A5["Compressed extension<br/>mm. 89–104"]
        A6["Coda<br/>mm. 105–112"]
    end

    A3 --> B1
    B2 --> A4
```

| Section | Bars | Key | Character |
|---------|------|-----|-----------|
| A — Main theme | 1–16 | A minor | Staccato, angular, percussive |
| A — Extension | 17–40 | Modulatory | Driving eighth-note motion |
| B — Trio | 41–72 | F major | Legato, gentler contrast |
| A' — Return | 73–104 | A minor | Intensified reprise |
| Coda | 105–112 | A minor | Abrupt, dry ending |

---

### III. Andante (G major)

A brief, lyrical slow movement — simple ternary form with expressive warmth.

```mermaid
graph LR
    subgraph A_Andante ["A Section (mm. 1–18)"]
        AA1["Main melody<br/>mm. 1–10<br/>G major"]
        AA2["Phrase extension<br/>mm. 11–18"]
    end

    subgraph B_Andante ["B Section (mm. 19–38)"]
        BB1["Contrasting theme<br/>mm. 19–28<br/>E♭ major"]
        BB2["Intensification<br/>mm. 29–38<br/>modulatory"]
    end

    subgraph A_prime ["A' Section (mm. 39–58)"]
        AA3["Melody return<br/>mm. 39–48<br/>G major"]
        AA4["Coda — dying away<br/>mm. 49–58"]
    end

    AA2 --> BB1
    BB2 --> AA3
```

| Section | Bars | Key | Character |
|---------|------|-----|-----------|
| A — Melody | 1–18 | G major | Tender, singing, simple texture |
| B — Contrasting | 19–38 | E♭ major → mod. | More chromatic, restless |
| A' — Return | 39–50 | G major | Decorated reprise |
| Coda | 51–58 | G major | ppp, dissolving |

---

### IV. Vivace (D minor → D major)

A tarantella-like finale in rondo form — relentless energy driving toward
a triumphant D major conclusion.

```mermaid
graph LR
    subgraph Rondo ["Rondo: Vivace"]
        R_A1["A<br/>mm. 1–32<br/>D minor"]
        R_B["B<br/>mm. 33–64<br/>B♭ major"]
        R_A2["A<br/>mm. 65–88<br/>D minor"]
        R_C["C<br/>mm. 89–128<br/>G major"]
        R_A3["A<br/>mm. 129–148<br/>D minor"]
        R_Coda["Coda<br/>mm. 149–170<br/>D major"]
    end

    R_A1 --> R_B --> R_A2 --> R_C --> R_A3 --> R_Coda
```

| Section | Bars | Key | Character |
|---------|------|-----|-----------|
| A — Refrain | 1–32 | D minor | Tarantella, perpetual motion |
| B — Episode 1 | 33–64 | B♭ major | More legato, contrasting |
| A — Refrain | 65–88 | D minor | Shortened return |
| C — Episode 2 | 89–128 | G major | Development-like, climactic |
| A — Refrain | 129–148 | D minor | Final statement |
| Coda | 149–170 | **D major** | Triumphant resolution, fff |

---

## Character and Difficulty

- More demanding than Sonata No. 1 — full four-movement span
- First movement requires control of long-line phrasing within rhythmic drive
- Scherzo demands crisp staccato and rhythmic precision
- Andante: deceptively simple — requires expressive touch and voicing
- Finale: stamina, speed, and the ability to build across 170 bars of perpetual motion

## Practice Notes

!!! tip "Structural awareness"
    Use the diagrams above to plan your practice sessions around
    structural sections rather than page numbers. Each section has
    distinct technical and musical demands.

!!! warning "Tempo relationships"
    The four movements form a tempo arch: moderate → fast → slow → very fast.
    Keep the Allegro ma non troppo honest — resist the urge to rush it,
    saving the real velocity for the Vivace finale.

## References

- [IMSLP Score](https://imslp.org/wiki/Piano_Sonata_No.2,_Op.14_(Prokofiev,_Sergey))
- [Wikipedia](https://en.wikipedia.org/wiki/Piano_Sonata_No._2_(Prokofiev))
