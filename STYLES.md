# Next.js / Style Guide of Pan Homepage

## I: Organizing the components

1. Separate the component to subcomponents if it is complex and is valuable to separate.
2. Organize the subcomponents in a directory.
   1. So people can comprehend if a component is the subcomponent of a component easily.

## II: Component Docs

1. Always add a basic description of the component, so the reader can understand what the component is.
2. If this component is for internal use, mark it `@internal`.
3. `@param` and `@returns` is not necessary in our codebase.
4. If this component is a very internal stuff, you can disable the lint rule.

## III: Linting and Formatting

1. You should respect the lint rule or the formatting rule, but you can disable it if you have a good reason.
2. If you disable the lint rule, it is better to add a comment to explain why you disable it.
3. You are free to make the rules stricter or looser if there is a good reason to do that.

## IV: Comments

1. English only in the codebase (except for the docs).
2. Allow meaningless comments to pass the lint check, but we still encouraged to write meaningful comments.
   1. Our linter can't exclude the specified name by Regexp.
3. For boilerplate parts, use code snippet to generate it.

## V: Refactoring

1. We always appreciated for the refactoring!
2. The refactored part should match this style guide.
