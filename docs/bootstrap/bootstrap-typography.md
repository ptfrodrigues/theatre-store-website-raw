# Bootstrap Typography Utilities

## Font Sizes

| Class   | Approximate Font Size (px)        |
|---------|-----------------------------------|
| `.fs-1` | 48px                              |
| `.fs-2` | 40px                              |
| `.fs-3` | 32px                              |
| `.fs-4` | 24px                              |
| `.fs-5` | 20px                              |
| `.fs-6` | 16px                              |
| `.small`| ~13.6px (85% of base size)        |

---

## Display Headings

Display headings provide oversized text for hero sections or important headings.

| Class         | Approximate Font Size (px) |
|---------------|-----------------------------|
| `.display-1`  | 80px                        |
| `.display-2`  | 72px                        |
| `.display-3`  | 64px                        |
| `.display-4`  | 56px                        |
| `.display-5`  | 48px                        |
| `.display-6`  | 40px                        |

---

## Text Alignment

Use these classes to align text horizontally. These also come with responsive variants like `.text-md-start`, `.text-lg-center`, etc.

| Class            | Description                |
|------------------|----------------------------|
| `.text-start`    | Aligns text to the left    |
| `.text-center`   | Centers text horizontally  |
| `.text-end`      | Aligns text to the right   |

---

## Text Transformation

Use text transformation classes to adjust the case of your text.

| Class               | Description                       |
|---------------------|-----------------------------------|
| `.text-lowercase`   | Transforms text to lowercase      |
| `.text-uppercase`   | Transforms text to uppercase      |
| `.text-capitalize`  | Capitalizes the first letter of each word |

---

## Text Decoration

These classes control text decoration, such as underlining or strikethrough.

| Class                     | Description                           |
|---------------------------|---------------------------------------|
| `.text-decoration-none`   | Removes underline                    |
| `.text-decoration-underline` | Adds underline                   |
| `.text-decoration-line-through` | Adds strikethrough          |

---

## Font Weight & Style

Control the weight and style of text.

| Class             | Description                  |
|-------------------|------------------------------|
| `.fw-bold`        | Bold font weight             |
| `.fw-normal`      | Normal font weight           |
| `.fw-light`       | Light font weight            |
| `.fst-italic`     | Italic style                 |
| `.fst-normal`     | Resets font style to normal  |

---

## Text Colour

Bootstrap offers several colour utilities for text in various shades. These adapt to the theme’s colours if using a dark or light theme.

| Class             | Description                  |
|-------------------|------------------------------|
| `.text-primary`   | Primary theme colour         |
| `.text-secondary` | Secondary theme colour       |
| `.text-success`   | Success (green) colour       |
| `.text-danger`    | Danger (red) colour          |
| `.text-warning`   | Warning (yellow) colour      |
| `.text-info`      | Info (teal) colour           |
| `.text-light`     | Light grey (dark backgrounds)|
| `.text-dark`      | Dark grey                    |
| `.text-body`      | Default body text colour     |
| `.text-muted`     | Muted (less prominent) colour|
| `.text-white`     | White text                   |
| `.text-black-50`  | Black at 50% opacity         |
| `.text-white-50`  | White at 50% opacity         |

---

## Line Height

Adjust vertical spacing between lines with Bootstrap’s line-height utilities.

| Class           | Description                 |
|-----------------|-----------------------------|
| `.lh-1`         | Line height of 1            |
| `.lh-sm`        | Small line height (1.25)    |
| `.lh-base`      | Default line height (1.5)   |
| `.lh-lg`        | Large line height (2)       |

---

## Word Wrap and Text Truncation

Control how text wraps within its container.

| Class                | Description                                         |
|----------------------|-----------------------------------------------------|
| `.text-wrap`         | Wraps text to the next line                         |
| `.text-nowrap`       | Prevents text wrapping                              |
| `.text-break`        | Breaks long words to fit within container           |
| `.text-truncate`     | Truncates text with ellipsis (requires `overflow-hidden` and `white-space-nowrap`) |

---

## Responsive Font Sizes

Combine font size classes with responsive utilities to make font sizes adaptive to screen size.

```html
<p class="fs-3 fs-md-4 fs-lg-2">Responsive font size that adapts to screen width</p>
```