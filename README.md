# README

VSCode Ember/Glimmer Syntax Extension.

Best with:
* [Unstable Ember Language Server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable)
* [Prettier for Handlebars](https://marketplace.visualstudio.com/items?itemName=EmberTooling.prettier-for-handlebars-vscode)

![preview](assets/preview.png)

Change Theme: `Shift+CMD+P` -> Search `Preferences: Color Theme` -> Switch to `Dark+ (default dark)`

Issues: https://github.com/lifeart/vsc-ember-syntax/issues


## Features
* Syntax highlighting of inline hbs blocks.
* IntelliSense for hbs tags and attributes.
* Quick info hovers on tags.
* Auto closing tags.
* Folding html.
* CSS completions in style blocks.
* Works with literal hbs strings that contain placeholders.

## Usage
The vsc-ember-syntax extension adds highlighting and IntelliSense for hbs template strings in JavaScript and TypeScript. It works out of the box when you use VS Code's built-in version of TypeScript.

## Customizing the theme
![customize-theme](assets/customize-theme.gif)
In your vscode `settings.json` file:
```json
// https://code.visualstudio.com/docs/getstarted/themes
"editor.tokenColorCustomizations": {
    "textMateRules": [
        {
            "scope": [
                "text.html.handlebars meta.tag.any.handlebars entity.other.argument-name.handlebars",
            ],
            "settings": {
                "foreground": "#47c7b3",
            }
        }
    ]
}
```

If you are using VS Code 1.30 or older and are using a workspace version of typescript, you must currently configure the TS Server plugin manually by following these instructions
## Thanks to:
* [vscode-lit-html](https://github.com/mjbvz/vscode-lit-html)
* [Ember Syntax](https://marketplace.visualstudio.com/items?itemName=dhedgecock.ember-syntax)
* [VSCode Glimmer](https://marketplace.visualstudio.com/items?itemName=chiragpat.vscode-glimmer)
* [Grammar](https://macromates.com/manual/en/language_grammars)

How to publish: https://code.visualstudio.com/api/working-with-extensions/publishing-extension


