# Bootstrap Padding and Margin Utilities

## Spacing Scale

The spacing scale in Bootstrap uses values from 0 to 5. Each unit represents a multiple of the `$spacer` variable (default is 1rem, or 16px). The units are:
- **0**: 0
- **1**: $spacer * 0.25 (4px)
- **2**: $spacer * 0.5 (8px)
- **3**: $spacer * 1 (16px)
- **4**: $spacer * 1.5 (24px)
- **5**: $spacer * 3 (48px)

## Padding Utilities

| Class        | Description                     |
|--------------|---------------------------------|
| `p-0`      | No padding                      |
| `p-1`      | Padding of 4px                  |
| `p-2`      | Padding of 8px                  |
| `p-3`      | Padding of 16px                 |
| `p-4`      | Padding of 24px                 |
| `p-5`      | Padding of 48px                 |
| `pt-3`     | Padding top of 16px             |
| `pb-2`     | Padding bottom of 8px           |
| `pl-4`     | Padding left of 24px            |
| `pr-5`     | Padding right of 48px           |
| `px-3`     | Horizontal padding of 16px      |
| `py-1`     | Vertical padding of 4px         |

Example usage:

```html
<div class="p-3">Padding on all sides (16px)</div>
<div class="pt-5">Padding only on the top (48px)</div>
```

---

## Margin Utilities

| Class        | Description                     |
|--------------|---------------------------------|
| `m-0`      | No margin                       |
| `m-1`      | Margin of 4px                   |
| `m-2`      | Margin of 8px                   |
| `m-3`      | Margin of 16px                  |
| `m-4`      | Margin of 24px                  |
| `m-5`      | Margin of 48px                  |
| `mt-3`     | Margin top of 16px              |
| `mb-2`     | Margin bottom of 8px            |
| `ml-4`     | Margin left of 24px             |
| `mr-5`     | Margin right of 48px            |
| `mx-3`     | Horizontal margin of 16px       |
| `my-1`     | Vertical margin of 4px          |

Example usage:

```html
<div class="m-4">Margin on all sides (24px)</div>
<div class="mx-2">Horizontal margin (8px)</div>
```

---

## Auto Margins

Bootstrap provides an auto margin class (`.m-auto`) to center elements horizontally within their container.

| Class      | Description                     |
|------------|---------------------------------|
| `mx-auto` | Centers element horizontally   |
| `my-auto` | Centers element vertically     |
| `m-auto`  | Centers element in both directions |

Example usage:

```html
<div class="mx-auto">Centered horizontally</div>
```

---

## Responsive Spacing

All padding and margin utilities can be applied responsively by adding breakpoint prefixes.

| Class            | Description                                 |
|------------------|---------------------------------------------|
| `p-sm-3`       | Padding of 16px on small screens and up    |
| `m-md-4`       | Margin of 24px on medium screens and up    |
| `pt-lg-2`      | Padding top of 8px on large screens and up |
| `mx-xl-auto`   | Centered margin on extra-large screens and up |

Example usage:

```html
<div class="p-sm-2 p-lg-4">Small padding on small screens, larger padding on large screens</div>
```

---

This document provides a quick reference for Bootstrap's spacing utilities, making it easy to apply consistent padding and margin across your layout.
