# Bootstrap Breakpoints

Bootstrap uses a responsive, mobile-first approach to create adaptable designs across different screen sizes. Here are the core breakpoints in Bootstrap:

| Breakpoint | Class Prefix | Minimum Width | Description                     |
|------------|--------------|---------------|---------------------------------|
| Extra Small (xs) | None        | 0px           | For all screen sizes (default)  |
| Small (sm)       | `-sm-`      | 576px         | Small screens like phones       |
| Medium (md)      | `-md-`      | 768px         | Medium screens like tablets     |
| Large (lg)       | `-lg-`      | 992px         | Large screens like desktops     |
| Extra Large (xl) | `-xl-`      | 1200px        | Extra-large screens             |
| Extra Extra Large (xxl) | `-xxl-` | 1400px    | Very large screens              |

## Example Usage

### Responsive Grid Layout

To create responsive columns that adapt to different breakpoints, use classes like `.col-md-*`, `.col-lg-*`, etc.

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">Responsive Column</div>
        <div class="col-12 col-md-6 col-lg-4">Responsive Column</div>
        <div class="col-12 col-lg-4">Responsive Column</div>
    </div>
</div>
```

### Display Utilities by Breakpoint

Bootstrap’s display utilities let you show or hide elements based on screen size.

```html
<div class="d-none d-sm-block">Visible from Small screens (sm) and up</div>
<div class="d-md-none">Hidden on Medium screens (md) and larger</div>
```

### Text Alignment

You can also apply responsive alignment classes based on breakpoints.

```html
<p class="text-start text-md-center text-lg-end">
    This text aligns left on small screens, center on medium screens, and right on large screens.
</p>
```

---

Bootstrap's breakpoint system enables flexible, responsive layouts that adapt gracefully across various device sizes.