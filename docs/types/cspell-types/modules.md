[@cspell/cspell-types](README.md) / Exports

# @cspell/cspell-types

## Table of contents

### Interfaces

- [AdvancedCSpellSettingsWithSourceTrace](interfaces/AdvancedCSpellSettingsWithSourceTrace.md)
- [BaseSetting](interfaces/BaseSetting.md)
- [CSpellReporter](interfaces/CSpellReporter.md)
- [CSpellReporterModule](interfaces/CSpellReporterModule.md)
- [CSpellSettings](interfaces/CSpellSettings.md)
- [CSpellSettingsWithSourceTrace](interfaces/CSpellSettingsWithSourceTrace.md)
- [CacheSettings](interfaces/CacheSettings.md)
- [CharacterSetCosts](interfaces/CharacterSetCosts.md)
- [CommandLineSettings](interfaces/CommandLineSettings.md)
- [DictionaryDefinitionAlternate](interfaces/DictionaryDefinitionAlternate.md)
- [DictionaryDefinitionAugmented](interfaces/DictionaryDefinitionAugmented.md)
- [DictionaryDefinitionBase](interfaces/DictionaryDefinitionBase.md)
- [DictionaryDefinitionCustom](interfaces/DictionaryDefinitionCustom.md)
- [DictionaryDefinitionPreferred](interfaces/DictionaryDefinitionPreferred.md)
- [DictionaryInformation](interfaces/DictionaryInformation.md)
- [EditCosts](interfaces/EditCosts.md)
- [ExtendableSettings](interfaces/ExtendableSettings.md)
- [Features](interfaces/Features.md)
- [FileSettings](interfaces/FileSettings.md)
- [FileSource](interfaces/FileSource.md)
- [ImportFileRef](interfaces/ImportFileRef.md)
- [InMemorySource](interfaces/InMemorySource.md)
- [Issue](interfaces/Issue.md)
- [LanguageSetting](interfaces/LanguageSetting.md)
- [LanguageSettingFilterFields](interfaces/LanguageSettingFilterFields.md)
- [LanguageSettingFilterFieldsDeprecated](interfaces/LanguageSettingFilterFieldsDeprecated.md)
- [LanguageSettingFilterFieldsPreferred](interfaces/LanguageSettingFilterFieldsPreferred.md)
- [LegacySettings](interfaces/LegacySettings.md)
- [MergeSource](interfaces/MergeSource.md)
- [OverrideFilterFields](interfaces/OverrideFilterFields.md)
- [OverrideSettings](interfaces/OverrideSettings.md)
- [ParseResult](interfaces/ParseResult.md)
- [ParsedText](interfaces/ParsedText.md)
- [Parser](interfaces/Parser.md)
- [Plugin](interfaces/Plugin.md)
- [PnPSettings](interfaces/PnPSettings.md)
- [ProgressBase](interfaces/ProgressBase.md)
- [ProgressFileBase](interfaces/ProgressFileBase.md)
- [ProgressFileBegin](interfaces/ProgressFileBegin.md)
- [ProgressFileComplete](interfaces/ProgressFileComplete.md)
- [RegExpPatternDefinition](interfaces/RegExpPatternDefinition.md)
- [ReportingConfiguration](interfaces/ReportingConfiguration.md)
- [RunResult](interfaces/RunResult.md)
- [Settings](interfaces/Settings.md)
- [SuggestionsConfiguration](interfaces/SuggestionsConfiguration.md)
- [TextDocumentOffset](interfaces/TextDocumentOffset.md)
- [TextOffset](interfaces/TextOffset.md)
- [WorkspaceTrustSettings](interfaces/WorkspaceTrustSettings.md)

### Type aliases

- [CSpellPackageSettings](modules.md#cspellpackagesettings)
- [CSpellUserSettings](modules.md#cspellusersettings)
- [CSpellUserSettingsFields](modules.md#cspellusersettingsfields)
- [CSpellUserSettingsWithComments](modules.md#cspellusersettingswithcomments)
- [CacheStrategy](modules.md#cachestrategy)
- [CharacterSet](modules.md#characterset)
- [CustomDictionaryPath](modules.md#customdictionarypath)
- [CustomDictionaryScope](modules.md#customdictionaryscope)
- [DebugEmitter](modules.md#debugemitter)
- [DictionaryDefinition](modules.md#dictionarydefinition)
- [DictionaryFileTypes](modules.md#dictionaryfiletypes)
- [DictionaryId](modules.md#dictionaryid)
- [DictionaryNegRef](modules.md#dictionarynegref)
- [DictionaryPath](modules.md#dictionarypath)
- [DictionaryRef](modules.md#dictionaryref)
- [DictionaryReference](modules.md#dictionaryreference)
- [ErrorEmitter](modules.md#erroremitter)
- [ErrorLike](modules.md#errorlike)
- [FSPathResolvable](modules.md#fspathresolvable)
- [Feature](modules.md#feature)
- [FsPath](modules.md#fspath)
- [Glob](modules.md#glob)
- [LanguageId](modules.md#languageid)
- [LanguageIdMultiple](modules.md#languageidmultiple)
- [LanguageIdMultipleNeg](modules.md#languageidmultipleneg)
- [LanguageIdSingle](modules.md#languageidsingle)
- [LocalId](modules.md#localid)
- [LocaleId](modules.md#localeid)
- [MappedText](modules.md#mappedtext)
- [MessageEmitter](modules.md#messageemitter)
- [MessageType](modules.md#messagetype)
- [MessageTypeLookup](modules.md#messagetypelookup)
- [ParserName](modules.md#parsername)
- [ParserOptions](modules.md#parseroptions)
- [Pattern](modules.md#pattern)
- [PatternId](modules.md#patternid)
- [PatternRef](modules.md#patternref)
- [PredefinedPatterns](modules.md#predefinedpatterns)
- [ProgressEmitter](modules.md#progressemitter)
- [ProgressItem](modules.md#progressitem)
- [ProgressTypes](modules.md#progresstypes)
- [RegExpPatternList](modules.md#regexppatternlist)
- [ReplaceEntry](modules.md#replaceentry)
- [ReplaceMap](modules.md#replacemap)
- [ReporterSettings](modules.md#reportersettings)
- [ResultEmitter](modules.md#resultemitter)
- [SimpleGlob](modules.md#simpleglob)
- [Source](modules.md#source)
- [SpellingErrorEmitter](modules.md#spellingerroremitter)
- [SuggestionCostMapDef](modules.md#suggestioncostmapdef)
- [SuggestionCostsDefs](modules.md#suggestioncostsdefs)
- [TrustLevel](modules.md#trustlevel)
- [Version](modules.md#version)
- [VersionLatest](modules.md#versionlatest)
- [VersionLegacy](modules.md#versionlegacy)

### Variables

- [ConfigFields](modules.md#configfields)
- [MessageTypes](modules.md#messagetypes)

## Type aliases

### CSpellPackageSettings

Ƭ **CSpellPackageSettings**: [`CSpellUserSettings`](modules.md#cspellusersettings)

These settings come from user and workspace settings.

#### Defined in

[CSpellSettingsDef.ts:12](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L12)

___

### CSpellUserSettings

Ƭ **CSpellUserSettings**: [`CSpellSettings`](interfaces/CSpellSettings.md)

#### Defined in

[CSpellSettingsDef.ts:14](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L14)

___

### CSpellUserSettingsFields

Ƭ **CSpellUserSettingsFields**: { [key in ConfigKeys]: key }

#### Defined in

[configFields.ts:5](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/configFields.ts#L5)

___

### CSpellUserSettingsWithComments

Ƭ **CSpellUserSettingsWithComments**: [`CSpellUserSettings`](modules.md#cspellusersettings)

#### Defined in

[CSpellSettingsDef.ts:913](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L913)

___

### CacheStrategy

Ƭ **CacheStrategy**: ``"metadata"`` \| ``"content"``

The Strategy to use to detect if a file has changed.
- `metadata` - uses the file system timestamp and size to detect changes (fastest).
- `content` - uses a hash of the file content to check file changes (slower - more accurate).

#### Defined in

[CSpellSettingsDef.ts:305](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L305)

___

### CharacterSet

Ƭ **CharacterSet**: `string`

This is a set of characters that can include `-` or `|`
- `-` - indicates a range of characters: `a-c` => `abc`
- `|` - is a group separator, indicating that the characters on either side
   are not related.

#### Defined in

[DictionaryInformation.ts:199](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/DictionaryInformation.ts#L199)

___

### CustomDictionaryPath

Ƭ **CustomDictionaryPath**: [`FsPath`](modules.md#fspath)

A File System Path to a dictionary file.

#### Defined in

[CSpellSettingsDef.ts:895](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L895)

___

### CustomDictionaryScope

Ƭ **CustomDictionaryScope**: ``"user"`` \| ``"workspace"`` \| ``"folder"``

Specifies the scope of a dictionary.

#### Defined in

[CSpellSettingsDef.ts:663](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L663)

___

### DebugEmitter

Ƭ **DebugEmitter**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

##### Returns

`void`

#### Defined in

[CSpellReporter.ts:24](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L24)

___

### DictionaryDefinition

Ƭ **DictionaryDefinition**: [`DictionaryDefinitionPreferred`](interfaces/DictionaryDefinitionPreferred.md) \| [`DictionaryDefinitionCustom`](interfaces/DictionaryDefinitionCustom.md) \| [`DictionaryDefinitionAugmented`](interfaces/DictionaryDefinitionAugmented.md) \| [`DictionaryDefinitionAlternate`](interfaces/DictionaryDefinitionAlternate.md) \| `DictionaryDefinitionLegacy`

#### Defined in

[CSpellSettingsDef.ts:543](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L543)

___

### DictionaryFileTypes

Ƭ **DictionaryFileTypes**: ``"S"`` \| ``"W"`` \| ``"C"`` \| ``"T"``

#### Defined in

[CSpellSettingsDef.ts:541](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L541)

___

### DictionaryId

Ƭ **DictionaryId**: `string`

This is the name of a dictionary.

Name Format:
- Must contain at least 1 number or letter.
- Spaces are allowed.
- Leading and trailing space will be removed.
- Names ARE case-sensitive.
- Must not contain `*`, `!`, `;`, `,`, `{`, `}`, `[`, `]`, `~`.

**`pattern`** ^(?=[^!*,;{}[\]~\n]+$)(?=(.*\w)).+$

#### Defined in

[CSpellSettingsDef.ts:768](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L768)

___

### DictionaryNegRef

Ƭ **DictionaryNegRef**: `string`

This a negative reference to a named dictionary.

It is used to exclude or include a dictionary by name.

The reference starts with 1 or more `!`.
- `!<dictionary_name>` - Used to exclude the dictionary matching `<dictionary_name>`.
- `!!<dictionary_name>` - Used to re-include a dictionary matching `<dictionary_name>`.
   Overrides `!<dictionary_name>`.
- `!!!<dictionary_name>` - Used to exclude a dictionary matching `<dictionary_name>`.
   Overrides `!!<dictionary_name>`.

**`pattern`** ^(?=!+[^!*,;{}[\]~\n]+$)(?=(.*\w)).+$

#### Defined in

[CSpellSettingsDef.ts:790](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L790)

___

### DictionaryPath

Ƭ **DictionaryPath**: `string`

A File System Path to a dictionary file.

**`pattern`** ^.*\.(?:txt|trie)(?:\.gz)?$

#### Defined in

[CSpellSettingsDef.ts:890](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L890)

___

### DictionaryRef

Ƭ **DictionaryRef**: [`DictionaryId`](modules.md#dictionaryid)

This a reference to a named dictionary.
It is expected to match the name of a dictionary.

#### Defined in

[CSpellSettingsDef.ts:774](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L774)

___

### DictionaryReference

Ƭ **DictionaryReference**: [`DictionaryRef`](modules.md#dictionaryref) \| [`DictionaryNegRef`](modules.md#dictionarynegref)

Reference to a dictionary by name.
One of:
- [DictionaryRef](modules.md#dictionaryref)
- [DictionaryNegRef](modules.md#dictionarynegref)

#### Defined in

[CSpellSettingsDef.ts:798](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L798)

___

### ErrorEmitter

Ƭ **ErrorEmitter**: (`message`: `string`, `error`: [`ErrorLike`](modules.md#errorlike)) => `void`

#### Type declaration

▸ (`message`, `error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `error` | [`ErrorLike`](modules.md#errorlike) |

##### Returns

`void`

#### Defined in

[CSpellReporter.ts:28](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L28)

___

### ErrorLike

Ƭ **ErrorLike**: `Error` \| { `message`: `string` ; `name`: `string` ; `toString`: () => `string`  }

#### Defined in

[CSpellReporter.ts:26](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L26)

___

### FSPathResolvable

Ƭ **FSPathResolvable**: [`FsPath`](modules.md#fspath)

A File System Path.

Special Properties:
- `${cwd}` prefix - will be replaced with the current working directory.
- Relative paths are relative to the configuration file.

#### Defined in

[CSpellSettingsDef.ts:881](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L881)

___

### Feature

Ƭ **Feature**: `FeatureEnableOnly` \| `FeatureWithConfiguration`

#### Defined in

[features.ts:29](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/features.ts#L29)

___

### FsPath

Ƭ **FsPath**: `string`

A File System Path. Relative paths are relative to the configuration file.

#### Defined in

[CSpellSettingsDef.ts:872](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L872)

___

### Glob

Ƭ **Glob**: [`SimpleGlob`](modules.md#simpleglob) \| `GlobDef`

These are glob expressions.

#### Defined in

[CSpellSettingsDef.ts:824](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L824)

___

### LanguageId

Ƭ **LanguageId**: [`LanguageIdSingle`](modules.md#languageidsingle) \| [`LanguageIdMultiple`](modules.md#languageidmultiple) \| [`LanguageIdMultipleNeg`](modules.md#languageidmultipleneg)

#### Defined in

[CSpellSettingsDef.ts:867](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L867)

___

### LanguageIdMultiple

Ƭ **LanguageIdMultiple**: `string`

This can be 'typescript,cpp,json,literal haskell', etc.

**`pattern`** ^([-\w_\s]+)(,[-\w_\s]+)*$

#### Defined in

[CSpellSettingsDef.ts:859](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L859)

___

### LanguageIdMultipleNeg

Ƭ **LanguageIdMultipleNeg**: `string`

This can be 'typescript,cpp,json,literal haskell', etc.

**`pattern`** ^(![-\w_\s]+)(,![-\w_\s]+)*$

#### Defined in

[CSpellSettingsDef.ts:865](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L865)

___

### LanguageIdSingle

Ƭ **LanguageIdSingle**: `string`

This can be '*', 'typescript', 'cpp', 'json', etc.

**`pattern`** ^(!?[-\w_\s]+)|(\*)$

#### Defined in

[CSpellSettingsDef.ts:853](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L853)

___

### LocalId

Ƭ **LocalId**: [`LocaleId`](modules.md#localeid)

**`deprecated`** true

**`deprecationmessage`** Use `LocaleId` instead.

#### Defined in

[CSpellSettingsDef.ts:821](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L821)

___

### LocaleId

Ƭ **LocaleId**: `string`

This is a written language locale like: 'en', 'en-GB', 'fr', 'es', 'de', etc.

#### Defined in

[CSpellSettingsDef.ts:801](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L801)

___

### MappedText

Ƭ **MappedText**: `Readonly`<`TransformedText`\>

#### Defined in

[TextMap.ts:1](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/TextMap.ts#L1)

___

### MessageEmitter

Ƭ **MessageEmitter**: (`message`: `string`, `msgType`: [`MessageType`](modules.md#messagetype)) => `void`

#### Type declaration

▸ (`message`, `msgType`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `msgType` | [`MessageType`](modules.md#messagetype) |

##### Returns

`void`

#### Defined in

[CSpellReporter.ts:22](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L22)

___

### MessageType

Ƭ **MessageType**: ``"Debug"`` \| ``"Info"`` \| ``"Warning"``

#### Defined in

[CSpellReporter.ts:10](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L10)

___

### MessageTypeLookup

Ƭ **MessageTypeLookup**: { [key in MessageType]: key }

#### Defined in

[CSpellReporter.ts:12](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L12)

___

### ParserName

Ƭ **ParserName**: `string`

#### Defined in

[Parser.ts:3](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/Parser.ts#L3)

___

### ParserOptions

Ƭ **ParserOptions**: `Record`<`string`, `unknown`\>

#### Defined in

[Parser.ts:1](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/Parser.ts#L1)

___

### Pattern

Ƭ **Pattern**: `string` \| `InternalRegExp`

#### Defined in

[CSpellSettingsDef.ts:715](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L715)

___

### PatternId

Ƭ **PatternId**: `string`

This matches the name in a pattern definition.

#### Defined in

[CSpellSettingsDef.ts:748](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L748)

___

### PatternRef

Ƭ **PatternRef**: [`Pattern`](modules.md#pattern) \| [`PatternId`](modules.md#patternid) \| [`PredefinedPatterns`](modules.md#predefinedpatterns)

A PatternRef is a Pattern or PatternId.

#### Defined in

[CSpellSettingsDef.ts:751](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L751)

___

### PredefinedPatterns

Ƭ **PredefinedPatterns**: ``"Base64"`` \| ``"Base64MultiLine"`` \| ``"Base64SingleLine"`` \| ``"CStyleComment"`` \| ``"CStyleHexValue"`` \| ``"CSSHexValue"`` \| ``"CommitHash"`` \| ``"CommitHashLink"`` \| ``"Email"`` \| ``"EscapeCharacters"`` \| ``"HexValues"`` \| ``"href"`` \| ``"PhpHereDoc"`` \| ``"PublicKey"`` \| ``"RsaCert"`` \| ``"SshRsa"`` \| ``"SHA"`` \| ``"HashStrings"`` \| ``"SpellCheckerDisable"`` \| ``"SpellCheckerDisableBlock"`` \| ``"SpellCheckerDisableLine"`` \| ``"SpellCheckerDisableNext"`` \| ``"SpellCheckerIgnoreInDocSetting"`` \| ``"string"`` \| ``"UnicodeRef"`` \| ``"Urls"`` \| ``"UUID"`` \| ``"Everything"``

#### Defined in

[CSpellSettingsDef.ts:717](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L717)

___

### ProgressEmitter

Ƭ **ProgressEmitter**: (`p`: [`ProgressItem`](modules.md#progressitem) \| [`ProgressFileComplete`](interfaces/ProgressFileComplete.md)) => `void`

#### Type declaration

▸ (`p`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`ProgressItem`](modules.md#progressitem) \| [`ProgressFileComplete`](interfaces/ProgressFileComplete.md) |

##### Returns

`void`

#### Defined in

[CSpellReporter.ts:61](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L61)

___

### ProgressItem

Ƭ **ProgressItem**: [`ProgressFileBegin`](interfaces/ProgressFileBegin.md) \| [`ProgressFileComplete`](interfaces/ProgressFileComplete.md)

#### Defined in

[CSpellReporter.ts:33](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L33)

___

### ProgressTypes

Ƭ **ProgressTypes**: ``"ProgressFileBegin"`` \| ``"ProgressFileComplete"``

#### Defined in

[CSpellReporter.ts:32](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L32)

___

### RegExpPatternList

Ƭ **RegExpPatternList**: [`PatternRef`](modules.md#patternref)[]

A list of pattern names or regular expressions.

#### Defined in

[CSpellSettingsDef.ts:754](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L754)

___

### ReplaceEntry

Ƭ **ReplaceEntry**: [`string`, `string`]

#### Defined in

[CSpellSettingsDef.ts:6](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L6)

___

### ReplaceMap

Ƭ **ReplaceMap**: [`ReplaceEntry`](modules.md#replaceentry)[]

#### Defined in

[CSpellSettingsDef.ts:7](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L7)

___

### ReporterSettings

Ƭ **ReporterSettings**: `string` \| [`string`] \| [`string`, `Serializable`]

Reporter name or reporter name + reporter config.

#### Defined in

[CSpellSettingsDef.ts:965](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L965)

___

### ResultEmitter

Ƭ **ResultEmitter**: (`result`: [`RunResult`](interfaces/RunResult.md)) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`result`): `void` \| `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`RunResult`](interfaces/RunResult.md) |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[CSpellReporter.ts:76](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L76)

___

### SimpleGlob

Ƭ **SimpleGlob**: `string`

Simple Glob string, the root will be globRoot.

#### Defined in

[CSpellSettingsDef.ts:827](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L827)

___

### Source

Ƭ **Source**: [`FileSource`](interfaces/FileSource.md) \| [`MergeSource`](interfaces/MergeSource.md) \| [`InMemorySource`](interfaces/InMemorySource.md) \| `BaseSource`

#### Defined in

[CSpellSettingsDef.ts:916](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L916)

___

### SpellingErrorEmitter

Ƭ **SpellingErrorEmitter**: (`issue`: [`Issue`](interfaces/Issue.md)) => `void`

#### Type declaration

▸ (`issue`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `issue` | [`Issue`](interfaces/Issue.md) |

##### Returns

`void`

#### Defined in

[CSpellReporter.ts:30](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L30)

___

### SuggestionCostMapDef

Ƭ **SuggestionCostMapDef**: `CostMapDefReplace` \| `CostMapDefInsDel` \| `CostMapDefSwap`

A WeightedMapDef enables setting weights for edits between related characters and substrings.

Multiple groups can be defined using a `|`.
A multi-character substring is defined using `()`.

For example, in some languages, some letters sound alike.

```yaml
  map: 'sc(sh)(sch)(ss)|t(tt)' # two groups.
  replace: 50    # Make it 1/2 the cost of a normal edit to replace a `t` with `tt`.
```

The following could be used to make inserting, removing, or replacing vowels cheaper.
```yaml
  map: 'aeiouy'
  insDel: 50     # Make it is cheaper to insert or delete a vowel.
  replace: 45    # It is even cheaper to replace one with another.
```

Note: the default edit distance is 100.

#### Defined in

[suggestionCostsDef.ts:24](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/suggestionCostsDef.ts#L24)

___

### SuggestionCostsDefs

Ƭ **SuggestionCostsDefs**: [`SuggestionCostMapDef`](modules.md#suggestioncostmapdef)[]

#### Defined in

[suggestionCostsDef.ts:26](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/suggestionCostsDef.ts#L26)

___

### TrustLevel

Ƭ **TrustLevel**: ``"trusted"`` \| ``"untrusted"``

Trust Security Level.

#### Defined in

[CSpellSettingsDef.ts:884](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L884)

___

### Version

Ƭ **Version**: [`VersionLatest`](modules.md#versionlatest) \| [`VersionLegacy`](modules.md#versionlegacy)

#### Defined in

[CSpellSettingsDef.ts:815](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L815)

___

### VersionLatest

Ƭ **VersionLatest**: ``"0.2"``

Configuration File Version.

#### Defined in

[CSpellSettingsDef.ts:806](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L806)

___

### VersionLegacy

Ƭ **VersionLegacy**: ``"0.1"``

Legacy Configuration File Versions.

**`deprecated`** true

**`deprecationmessage`** Use `0.2` instead.

#### Defined in

[CSpellSettingsDef.ts:813](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellSettingsDef.ts#L813)

## Variables

### ConfigFields

• `Const` **ConfigFields**: [`CSpellUserSettingsFields`](modules.md#cspellusersettingsfields)

#### Defined in

[configFields.ts:9](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/configFields.ts#L9)

___

### MessageTypes

• `Const` **MessageTypes**: [`MessageTypeLookup`](modules.md#messagetypelookup)

#### Defined in

[CSpellReporter.ts:16](https://github.com/streetsidesoftware/cspell/blob/e5b7f09/packages/cspell-types/src/CSpellReporter.ts#L16)
