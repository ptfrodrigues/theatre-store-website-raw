# Bootstrap Custom CSS Variables

## 1. Colour Variables

Define theme colours used across all Bootstrap components.

```css
:root {
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-body-color: #212529;
    --bs-body-bg: #ffffff;
}
```

---

## 2. Font and Typography Variables

Control font families, sizes, weights, and line heights.

```css
:root {
    --bs-font-sans-serif: "Helvetica Neue", Arial, sans-serif;
    --bs-font-monospace: "Courier New", monospace;
    --bs-font-size-base: 1rem;         /* Default font size */
    --bs-font-size-lg: 1.25rem;        /* Large font size */
    --bs-font-size-sm: 0.875rem;       /* Small font size */
    --bs-font-weight-bold: 700;        /* Bold font weight */
    --bs-font-weight-normal: 400;      /* Normal font weight */
    --bs-line-height-base: 1.5;        /* Default line height */
}
```

---

## 3. Spacing Variables

Used for padding and margin utilities, defined relative to a base spacing scale.

```css
:root {
    --bs-spacer: 1rem;                 /* Base spacer for padding and margin */
    --bs-gutter-x: 1.5rem;             /* Horizontal gutters */
    --bs-gutter-y: 1.5rem;             /* Vertical gutters */
}
```

---

## 4. Border and Radius Variables

Control border colours, widths, and radius for rounded corners.

```css
:root {
    --bs-border-width: 1px;
    --bs-border-color: #dee2e6;
    --bs-border-radius: 0.25rem;
    --bs-border-radius-sm: 0.2rem;
    --bs-border-radius-lg: 0.3rem;
    --bs-rounded-circle: 50%;          /* Full circular rounding */
    --bs-rounded-pill: 50rem;          /* Pill-shaped rounding */
}
```

---

## 5. Button Variables

Define the default look for buttons, such as padding, border radius, and colours.

```css
:root {
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-font-weight: 400;
    --bs-btn-border-radius: 0.25rem;
    --bs-btn-border-width: 1px;
    --bs-btn-primary-bg: #0d6efd;
    --bs-btn-primary-border: #0d6efd;
    --bs-btn-secondary-bg: #6c757d;
    --bs-btn-secondary-border: #6c757d;
}
```

---

## 6. Shadow Variables

Used to control shadow intensity and size.

```css
:root {
    --bs-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    --bs-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    --bs-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}
```

---

## 7. Z-Index Variables

Set stacking order for Bootstrap elements like modals, dropdowns, and tooltips.

```css
:root {
    --bs-zindex-dropdown: 1000;
    --bs-zindex-sticky: 1020;
    --bs-zindex-fixed: 1030;
    --bs-zindex-modal-backdrop: 1040;
    --bs-zindex-modal: 1050;
    --bs-zindex-popover: 1060;
    --bs-zindex-tooltip: 1070;
}
```

---

## 8. Component-Specific Variables

- **Alerts**
  ```css
  :root {
      --bs-alert-padding-y: 0.75rem;
      --bs-alert-padding-x: 1.25rem;
      --bs-alert-margin-bottom: 1rem;
      --bs-alert-bg: #cce5ff;
      --bs-alert-border-color: #b8daff;
      --bs-alert-color: #004085;
  }
  ```

- **Badges**
  ```css
  :root {
      --bs-badge-font-size: 0.75em;
      --bs-badge-font-weight: 700;
      --bs-badge-padding-y: 0.35em;
      --bs-badge-padding-x: 0.65em;
      --bs-badge-border-radius: 0.375rem;
  }
  ```

- **Cards**
  ```css
  :root {
      --bs-card-spacer-y: 0.75rem;
      --bs-card-spacer-x: 1.25rem;
      --bs-card-border-width: 1px;
      --bs-card-border-color: rgba(0, 0, 0, 0.125);
      --bs-card-border-radius: 0.25rem;
      --bs-card-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
  ```

- **Modals**
  ```css
  :root {
      --bs-modal-inner-padding: 1rem;
      --bs-modal-footer-gap: 0.5rem;
      --bs-modal-header-border-color: #dee2e6;
      --bs-modal-content-bg: #ffffff;
  }
  ```

---

This document provides a quick reference to Bootstrap’s CSS variables, allowing for easy theming and customisation across your project.
