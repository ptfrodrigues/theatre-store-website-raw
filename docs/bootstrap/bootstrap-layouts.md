# Bootstrap Layout Utilities: Flexbox, CSS Grid, and Grid System with Columns

## 1. Flexbox Utilities

Bootstrap’s Flexbox utilities allow you to control alignment, distribution, and ordering of items within a flex container.

### Key Flex Classes

| Class                     | Description                                     |
|---------------------------|-------------------------------------------------|
| `.d-flex`                 | Creates a flex container                        |
| `.flex-row`               | Positions items in a row                        |
| `.flex-column`            | Positions items in a column                     |
| `.justify-content-start`  | Aligns items at the start                       |
| `.justify-content-center` | Centers items horizontally                      |
| `.justify-content-end`    | Aligns items at the end                         |
| `.align-items-start`      | Aligns items to the top of the container        |
| `.align-items-center`     | Centers items vertically within the container   |
| `.align-items-end`        | Aligns items to the bottom of the container     |

Example usage:

```html
<div class="d-flex justify-content-center align-items-center">
    <!-- Flexbox-centered content -->
</div>
```

---

## 2. CSS Grid Utility

Bootstrap also supports CSS Grid layouts with the `.d-grid` utility, allowing you to create grid-based layouts with gap controls.

### Key CSS Grid Classes

| Class          | Description                                   |
|----------------|-----------------------------------------------|
| `.d-grid`      | Applies `display: grid` to an element         |
| `.gap-*`       | Sets the gap between grid items, e.g., `.gap-3` |
| `.d-md-grid`   | Enables grid layout starting from the `md` breakpoint |

Example usage:

```html
<div class="d-grid gap-3">
    <div>Grid Item 1</div>
    <div>Grid Item 2</div>
    <div>Grid Item 3</div>
</div>
```

---

## 3. Bootstrap Grid System and Columns

Bootstrap’s responsive, 12-column Grid System enables structured layouts by dividing the viewport into equal sections. Containers, rows, and columns work together to create layouts that adapt to screen sizes.

### Key Classes for Containers, Rows, and Columns

| Class                    | Description                                       |
|--------------------------|---------------------------------------------------|
| `.container`             | Creates a responsive fixed-width container        |
| `.container-fluid`       | Creates a full-width container                    |
| `.row`                   | Defines a row for containing columns              |
| `.col`                   | Creates a column with automatic equal width       |
| `.col-*`                 | Column with specific width, e.g., `.col-6` for half-width |
| `.col-sm-*`, `.col-md-*`, `.col-lg-*` | Responsive columns at each breakpoint (sm, md, lg, etc.) |

### Column Width Classes and Usage

Columns in Bootstrap automatically adjust based on screen size, allowing fine control through specific width classes:

- `.col`: Takes up equal space in a row by default.
- `.col-6`: Occupies half of the row (6 out of 12 columns).
- `.col-sm-4`: Occupies 4/12 of the row, starting at the `sm` screen size.
- `.col-lg-3`: Occupies 3/12 of the row, starting at the `lg` screen size.

### Example Usage

```html
<div class="container">
    <div class="row">
        <div class="col-4">Column 1</div>
        <div class="col-4">Column 2</div>
        <div class="col-4">Column 3</div>
    </div>
</div>
```

---

This document provides a unified reference for Bootstrap’s Flexbox, CSS Grid, and Grid System utilities, making it easy to create flexible, responsive layouts.