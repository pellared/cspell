[@cspell/cspell-types](../README.md) / [Exports](../modules.md) / CacheSettings

# Interface: CacheSettings

## Table of contents

### Properties

- [cacheLocation](CacheSettings.md#cachelocation)
- [cacheStrategy](CacheSettings.md#cachestrategy)
- [useCache](CacheSettings.md#usecache)

## Properties

### cacheLocation

• `Optional` **cacheLocation**: `string`

Path to the cache location. Can be a file or a directory.
If none specified `.cspellcache` will be used.
Relative paths are relative to the config file in which it
is defined.

A prefix of `${cwd}` is replaced with the current working directory.

#### Defined in

[CSpellSettingsDef.ts:323](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L323)

___

### cacheStrategy

• `Optional` **cacheStrategy**: [`CacheStrategy`](../modules.md#cachestrategy)

Strategy to use for detecting changed files, default: metadata

**`default`** 'metadata'

#### Defined in

[CSpellSettingsDef.ts:329](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L329)

___

### useCache

• `Optional` **useCache**: `boolean`

Store the results of processed files in order to only operate on the changed ones.

**`default`** false

#### Defined in

[CSpellSettingsDef.ts:312](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L312)
