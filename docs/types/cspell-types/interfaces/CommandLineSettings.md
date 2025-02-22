[@cspell/cspell-types](../README.md) / [Exports](../modules.md) / CommandLineSettings

# Interface: CommandLineSettings

These are settings only used by the command line application.

## Hierarchy

- **`CommandLineSettings`**

  ↳ [`FileSettings`](FileSettings.md)

## Table of contents

### Properties

- [cache](CommandLineSettings.md#cache)
- [failFast](CommandLineSettings.md#failfast)

## Properties

### cache

• `Optional` **cache**: [`CacheSettings`](CacheSettings.md)

Define cache settings.

#### Defined in

[CSpellSettingsDef.ts:339](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L339)

___

### failFast

• `Optional` **failFast**: `boolean`

Exit with non-zero code as soon as an issue/error is encountered (useful for CI or git hooks)

**`default`** false

#### Defined in

[CSpellSettingsDef.ts:344](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L344)
