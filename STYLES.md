# Next.js / Style Guide of Pan Homepage

Work in progress.

## I: Organizing the components

1. Only separate the component to subcomponents if it can't be represented with one element.
   1. In other words: prefer `module.scss` over a meaningless component.
2. Use `[Component].module.scss` for styles to share across the subcomponents.
3. Use `[Component].scss` for components that is not necessary to make a subcomponent.
   1. For example, the container.
   2. In the SCSS file, use BEM to prevent the style conflicts.
4. Organize the subcomponents in a directory.
   1. So people can comprehend if a component is the subcomponent of a component easily.

## II: When to separate the Tailwind utilities from components?

1. The _unique_ class in subcomponents is not necessary to be separated from the component. Don't separate it as it will make our codebase loose.
2. The _common_ class that is shared across the subcomponents is better to separate as a class in module CSS.
   1. For example, the `transition duration-300` class.
   2. The common class should be placed in the `[Component].module.scss` file.
3. The part of components that is not necessary to be a subcomponent is better to separate as a class in normal CSS.
   1. For example, the class of `Nav-item`.
   2. The common class should be placed in the `[Component].scss` file.

## III: The naming of class name

1. On account of Tailwind CSS, we don't need to name the component very strictly.
   Nonetheless, it is still encouraged to specify a BEM-styled class name for the component,
   so machines can read our page easily.
2. We name the components class with [SUIT BEM](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) if necessary.

## IV: Component Docs

1. Always add a basic description of the component, so the reader can understand what the component is.
2. If this component is for internal use, mark it `@internal`.
3. `@param` and `@returns` is not necessary in our codebase.
4. If this component is a very internal stuff, you can disable the lint rule.

## V: Linting and Formatting

1. You should respect the lint rule or the formatting rule, but you can disable it if you have a good reason.
2. If you disable the lint rule, it is better to add a comment to explain why you disable it.
3. You are free to make the rules stricter or looser if there is a good reason to do that.

## VI: Comments

1. English only in the codebase (except for the docs).
2. Allow meaningless comments to pass the lint check, but we still encouraged to write meaningful comments.
   1. Our linter can't exclude the specified name by Regexp.
3. For boilerplate parts, use code snippet to generate it.

## VII: Refactoring

1. We always appreciated for the refactoring!
2. The refactored part should match this style guide.
