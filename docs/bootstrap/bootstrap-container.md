# Bootstrap Container Utilities

## Container Types

### 1. `.container`

A fixed-width container that adapts to the current breakpoint. It provides a responsive layout with fixed widths at each breakpoint.

| Breakpoint | Container Width |
|------------|-----------------|
| `sm`       | 540px           |
| `md`       | 720px           |
| `lg`       | 960px           |
| `xl`       | 1140px          |
| `xxl`      | 1320px          |

Example usage:

```html
<div class="container">
    <!-- Content here will be constrained to fixed widths based on screen size -->
</div>
```

---

### 2. `.container-fluid`

A full-width container that always takes up 100% of the viewport width, regardless of screen size.

Example usage:

```html
<div class="container-fluid">
    <!-- Content here will take up the full width of the viewport -->
</div>
```

---

### 3. `.container-{breakpoint}`

These containers are full-width until they reach the specified breakpoint, at which they become fixed-width. For example, `.container-md` will be fluid on screens smaller than `md`, but fixed-width at `md` and above.

| Class            | Description                           |
|------------------|---------------------------------------|
| `.container-sm`  | Full-width until the `sm` breakpoint  |
| `.container-md`  | Full-width until the `md` breakpoint  |
| `.container-lg`  | Full-width until the `lg` breakpoint  |
| `.container-xl`  | Full-width until the `xl` breakpoint  |
| `.container-xxl` | Full-width until the `xxl` breakpoint |

Example usage:

```html
<div class="container-md">
    <!-- Content here is fluid until the `md` breakpoint, then it becomes fixed width -->
</div>
```

---

## Container Padding

By default, containers include 15px padding on both the left and right. You can override this with Bootstrap's spacing utilities if needed.

Example usage:

```html
<div class="container p-5">
    <!-- Container with extra padding of 5 units on all sides -->
</div>
```

---

## Nesting Containers

Containers can be nested within each other to create complex layouts, though typically you would nest rows and columns inside containers rather than other containers.

Example usage:

```html
<div class="container">
    <div class="row">
        <div class="col">
            Nested container content
        </div>
    </div>
</div>
```

---

## Responsive Behaviour

Containers adjust according to the viewport and Bootstrap’s grid breakpoints. Using the \`.container-{breakpoint}\` classes lets you control when the container should switch between fluid and fixed widths.

---

This document serves as a quick reference for Bootstrap’s container utilities, helping to create structured, responsive layouts.