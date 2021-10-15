# Alloy InterVue Test

Welcome to the Alloy InterVue Test are you ready kohai?

![OPM](https://media0.giphy.com/media/arbHBoiUWUgmc/giphy.gif)

Follow the [Project setup](#project-setup) and [Development](#development) steps below to first make sure you can run
the project. Then carry on reading the [Project brief](#project-brief).

### Project brief

Hi Developer, through rigorous training lies the path to the ultimate technique! We are in need of a person to help us
update the worlds leading One Punch Man Encyclopedia. We aren't finished with the sites features and we are sure
that a few more tests would help make sure the site never fails. You are expected to:

1. Implement the `src/utils/CharacterPowerCalculator.ts` following the [Trait power table](#trait-power-table) below
   and the formula `((speed * strength) / 176400) * 9000`
2. Implement `src/components/Trait.vue` to show the strength and speed traits with the understanding that more trait
   types could be added at a later date
   1. The `StrengthTraitModel` should be displayed similar to `src/components/LabelText.vue` but I want the 3 strengths
      `weak | average | super strong` to be represented by the emoji `💪 | 💪💪 | 💪💪💪` respectively
   2. The `SpeedTraitModel` should be displayed with a coloured bar, the fill should be represented by how fast they are
      e.g. `tortoise = 10%`, `goat = 30%`, `speed of sound = 60%`, `speed of light = 100%` a mockup is shown below
      ![Speed trait mockup](https://i.imgur.com/Qaar6HD.png)
3. Add a `PageNotFound.vue` view that is redirected to via the router if the route isn't handled
4. Complete the `tests/unit/utils/CharacterPowerCalculator.spec.ts` unit test, can you also think of another test we
   may be missing?
5. Complete the `tests/e2e/specs/CharacterView.spec.ts` e2e test, you should be able to check we can find Mumen Rider
   and check his ID is present on the page

> *Note*: You can use ANY material... Google, StackOverflow, Discord, Forums...

> *Note*: You must strive to adhere to TypeScripts type safety, avoid using casting e.g. `as` and rely on other means...

### Trait power table

The following is the trait power table that identifies power values for traits

| Trait Type | Trait Value      | Power |
| ---------- | ---------------- | ----- |
| `Speed`    | `tortoise`       | 7     |
| `Speed`    | `goat`           | 21    |
| `Speed`    | `speed of sound` | 69    |
| `Speed`    | `speed of light` | 420   |
| `Strength` | `weak`           | 7     |
| `Strength` | `average`        | 69    |
| `Strength` | `super strong`   | 420   |

## Project setup

Clone and install dependencies with:

```
npm install
```

### Development

To run the dev server use:

```
npm run serve
```

### Unit tests

Don't let your unit tests slip, execute them with:

```
npm run test:unit
```

### End-to-end tests

The icing on the cake, test end-to-end:

```
npm run test:e2e
```
