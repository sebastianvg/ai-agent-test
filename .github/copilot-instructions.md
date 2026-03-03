# Angular Clean Code Rules

This project follows strict Angular Clean Architecture guidelines:

## Architecture
- Feature-based folder structure
- Smart (container) and dumb (presentational) components
- Business logic only in services/use-cases
- No logic in templates

## Coding Rules
- Strict TypeScript
- No `any`
- No magic numbers
- Small pure functions
- Prefer readonly properties
- Prefer immutability
- OnPush change detection required
- Async pipe instead of manual subscriptions
- Avoid side effects

## Naming Conventions
- Observable variables must end with `$`
- Booleans must be prefixed with is/has/can/should
- Constants must be UPPER_SNAKE_CASE
- Interfaces must describe behavior, not data bags

## Anti-Patterns
- No God components
- No large services with multiple responsibilities
- No nested subscriptions
- No duplicated logic
- No premature abstractions
