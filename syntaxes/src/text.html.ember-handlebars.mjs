export default {
  $schema: 'https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json',
  name: 'Glimmer',
  scopeName: 'text.html.ember-handlebars',
  fileTypes: ['hbs'],
  patterns: [
    {
      include: '#style',
    },
    {
      include: '#script',
    },
    {
      include: '#glimmer-else-block',
    },
    {
      include: '#glimmer-bools',
    },
    {
      include: '#glimmer-special-block',
    },
    {
      include: '#glimmer-unescaped-expression',
    },
    {
      include: '#glimmer-comment-block',
    },
    {
      include: '#glimmer-comment-inline',
    },
    {
      include: '#glimmer-expression-property',
    },
    {
      include: '#glimmer-control-expression',
    },
    {
      include: '#glimmer-expression',
    },
    {
      include: '#glimmer-block',
    },
    {
      include: '#html-tag',
    },
    {
      include: '#component-tag',
    },
    {
      include: '#html-comment',
    },
    {
      include: '#entities',
    },
  ],
  repository: {
    'glimmer-component-path': {
      match: '(::|\\$|\\.)',
      captures: {
        1: {
          name: 'punctuation.definition.tag',
        },
      },
    },
    'string-double-quoted-handlebars': {
      name: 'string.quoted.double.ember-handlebars',
      begin: '"',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.string.begin.ember-handlebars',
        },
      },
      end: '"',
      endCaptures: {
        0: {
          name: 'punctuation.definition.string.end.ember-handlebars',
        },
      },
      patterns: [
        {
          name: 'constant.character.escape.ember-handlebars',
          match: '\\\\"',
        },
      ],
    },
    'string-single-quoted-handlebars': {
      name: 'string.quoted.single.ember-handlebars',
      begin: "'",
      beginCaptures: {
        0: {
          name: 'punctuation.definition.string.begin.ember-handlebars',
        },
      },
      end: "'",
      endCaptures: {
        0: {
          name: 'punctuation.definition.string.end.ember-handlebars',
        },
      },
      patterns: [
        {
          name: 'constant.character.escape.ember-handlebars',
          match: "\\\\'",
        },
      ],
    },
    'string-double-quoted-html': {
      name: 'string.quoted.double.html.ember-handlebars',
      begin: '"',
      beginCaptures: {
        0: {
          name: 'punctuation.definition.string.begin.ember-handlebars',
        },
      },
      end: '"',
      endCaptures: {
        0: {
          name: 'punctuation.definition.string.end.ember-handlebars',
        },
      },
      patterns: [
        {
          name: 'constant.character.escape.ember-handlebars',
          match: '\\\\"',
        },
        {
          include: '#glimmer-bools',
        },
        {
          include: '#glimmer-expression-property',
        },
        {
          include: '#glimmer-control-expression',
        },
        {
          include: '#glimmer-expression',
        },
        {
          include: '#glimmer-block',
        },
      ],
    },
    'string-single-quoted-html': {
      name: 'string.quoted.single.html.ember-handlebars',
      begin: "'",
      beginCaptures: {
        0: {
          name: 'punctuation.definition.string.begin.ember-handlebars',
        },
      },
      end: "'",
      endCaptures: {
        0: {
          name: 'punctuation.definition.string.end.ember-handlebars',
        },
      },
      patterns: [
        {
          name: 'constant.character.escape.ember-handlebars',
          match: "\\\\'",
        },
        {
          include: '#glimmer-bools',
        },
        {
          include: '#glimmer-expression-property',
        },
        {
          include: '#glimmer-control-expression',
        },
        {
          include: '#glimmer-expression',
        },
        {
          include: '#glimmer-block',
        },
      ],
    },
    'boolean': {
      match: 'true|false|undefined|null',
      captures: {
        0: {
          name: 'string.regexp',
        },
        1: {
          name: 'string.regexp',
        },
        2: {
          name: 'string.regexp',
        },
      },
      patterns: [],
    },
    'digit': {
      match: '\\d*(\\.)?\\d+',
      captures: {
        0: {
          name: 'constant.numeric',
        },
        1: {
          name: 'constant.numeric',
        },
        2: {
          name: 'constant.numeric',
        },
      },
      patterns: [],
    },
    'param': {
      match: '(@|this.)([a-zA-Z0-9_.-]+)',
      captures: {
        0: {
          name: 'support.function',
          patterns: [
            {
              name: 'variable.language',
              match: '(@|this)',
            },
            {
              name: 'punctuation.definition.tag',
              match: '(\\.)+',
            },
          ],
        },
        1: {
          name: 'support.function',
          patterns: [
            {
              name: 'punctuation.definition.tag',
              match: '(\\.)+',
            },
          ],
        },
      },
      patterns: [],
    },
    'attention': {
      name: 'storage.type.class.${1:/downcase}',
      match: '@?(TODO|FIXME|CHANGED|XXX|IDEA|HACK|NOTE|REVIEW|NB|BUG|QUESTION|TEMP)\\b',
      patterns: [],
    },
    'glimmer-unescaped-expression': {
      name: 'entity.unescaped.expression.ember-handlebars',
      begin: '{{{',
      end: '}}}',
      captures: {
        0: {
          name: 'keyword.operator',
        },
      },
      patterns: [
        {
          include: '#string-single-quoted-handlebars',
        },
        {
          include: '#string-double-quoted-handlebars',
        },
        {
          include: '#glimmer-subexp',
        },
        {
          include: '#param',
        },
      ],
    },
    'glimmer-comment-block': {
      name: 'comment.block.glimmer',
      begin: '{{!--',
      end: '--}}',
      captures: {
        0: {
          name: 'punctuation.definition.block.comment.glimmer',
        },
      },
      patterns: [
        {
          include: '#script',
        },
        {
          include: '#attention',
        },
      ],
    },
    'glimmer-comment-inline': {
      name: 'comment.inline.glimmer',
      begin: '{{!',
      end: '}}',
      captures: {
        0: {
          name: 'punctuation.definition.block.comment.glimmer',
        },
      },
      patterns: [
        {
          include: '#script',
        },
        {
          include: '#attention',
        },
      ],
    },
    'glimmer-bools': {
      name: 'entity.expression.ember-handlebars',
      match: '({{~?)(true|false|null|undefined|\\d*(\\.)?\\d+)(~?}})',
      captures: {
        0: {
          name: 'keyword.operator',
        },
        1: {
          name: 'keyword.operator',
        },
        2: {
          name: 'string.regexp',
        },
        3: {
          name: 'string.regexp',
        },
        4: {
          name: 'keyword.operator',
        },
      },
    },
    'glimmer-else-block': {
      name: 'entity.expression.ember-handlebars',
      match: '({{~?)(else\\s[a-z]+\\s|else)([()@a-zA-Z0-9\\.\\s\\b]+)?(~?}})',
      captures: {
        0: {
          name: 'punctuation.definition.tag',
        },
        1: {
          name: 'punctuation.definition.tag',
        },
        2: {
          name: 'keyword.control',
        },
        3: {
          name: 'keyword.control',
          patterns: [
            {
              include: '#glimmer-subexp',
            },
            {
              include: '#string-single-quoted-handlebars',
            },
            {
              include: '#string-double-quoted-handlebars',
            },
            {
              include: '#boolean',
            },
            {
              include: '#digit',
            },
            {
              include: '#param',
            },
            {
              include: '#glimmer-parameter-name',
            },
            {
              include: '#glimmer-parameter-value',
            },
          ],
        },
        4: {
          name: 'punctuation.definition.tag',
        },
      },
    },
    'glimmer-special-block': {
      name: 'entity.expression.ember-handlebars',
      match: '({{~?)(yield|outlet)(~?}})',
      captures: {
        0: {
          name: 'keyword.operator',
        },
        1: {
          name: 'keyword.operator',
        },
        2: {
          name: 'keyword.control',
        },
        3: {
          name: 'keyword.operator',
        },
      },
    },
    'glimmer-as-stuff': {
      patterns: [
        {
          include: '#as-keyword',
        },
        {
          include: '#as-params',
        },
      ],
    },
    'glimmer-block': {
      name: 'entity.expression.ember-handlebars',
      begin: '({{~?)(#|/)(([@\\$a-zA-Z0-9_/.-]+))',
      end: '(~?}})',
      captures: {
        1: {
          name: 'punctuation.definition.tag',
        },
        2: {
          name: 'punctuation.definition.tag',
        },
        3: {
          name: 'keyword.control',
          patterns: [
            {
              include: '#glimmer-component-path',
            },
            {
              name: 'punctuation.definition.tag',
              match: '(\\/)+',
            },
            {
              name: 'punctuation.definition.tag',
              match: '(\\.)+',
            },
          ],
        },
      },
      patterns: [
        {
          include: '#glimmer-as-stuff',
        },
        {
          include: '#glimmer-supexp-content',
        },
      ],
    },
    'glimmer-expression-property': {
      name: 'entity.expression.ember-handlebars',
      begin: '({{~?)((@|this.)([a-zA-Z0-9_.-]+))',
      end: '(~?}})',
      captures: {
        1: {
          name: 'keyword.operator',
        },
        2: {
          name: 'keyword.operator',
        },
        3: {
          name: 'support.function',
          patterns: [
            {
              name: 'variable.language',
              match: '(@|this)',
            },
            {
              name: 'punctuation.definition.tag',
              match: '(\\.)+',
            },
          ],
        },
        4: {
          name: 'support.function',
          patterns: [
            {
              name: 'punctuation.definition.tag',
              match: '(\\.)+',
            },
          ],
        },
      },
      patterns: [
        {
          include: '#glimmer-supexp-content',
        },
      ],
    },
    'glimmer-expression': {
      name: 'entity.expression.ember-handlebars',
      begin: '({{~?)(([()\\s@a-zA-Z0-9_.-]+))',
      end: '(~?}})',
      captures: {
        1: {
          name: 'keyword.operator',
        },
        2: {
          name: 'keyword.operator',
        },
        3: {
          name: 'support.function',
          patterns: [
            {
              name: 'string.regexp',
              match: '[(]+',
            },
            {
              name: 'string.regexp',
              match: '[)]+',
            },
            {
              name: 'punctuation.definition.tag',
              match: '(\\.)+',
            },
            {
              include: '#glimmer-supexp-content',
            },
          ],
        },
      },
      patterns: [
        {
          include: '#glimmer-supexp-content',
        },
      ],
    },
    'glimmer-supexp-content': {
      patterns: [
        {
          include: '#glimmer-subexp',
        },
        {
          include: '#string-single-quoted-handlebars',
        },
        {
          include: '#string-double-quoted-handlebars',
        },
        {
          include: '#boolean',
        },
        {
          include: '#digit',
        },
        {
          include: '#param',
        },
        {
          include: '#glimmer-parameter-name',
        },
        {
          include: '#glimmer-parameter-value',
        },
      ],
    },
    'glimmer-control-expression': {
      name: 'entity.expression.ember-handlebars',
      begin: '({{~?)(([-a-z/]+)\\s)',
      end: '(~?}})',
      captures: {
        1: {
          name: 'keyword.operator',
        },
        2: {
          name: 'keyword.operator',
        },
        3: {
          name: 'keyword.control',
        },
      },
      patterns: [
        {
          include: '#glimmer-supexp-content',
        },
      ],
    },
    'glimmer-subexp': {
      name: 'entity.subexpression.ember-handlebars',
      begin: '(\\()([@a-zA-Z0-9.-]+)',
      end: '(\\))',
      captures: {
        1: {
          name: 'keyword.other',
        },
        2: {
          name: 'keyword.control',
        },
      },
      patterns: [
        {
          include: '#glimmer-supexp-content',
        },
      ],
    },
    'as-keyword': {
      name: 'keyword.control',
      match: '\\s\\b(as)\\b(?=\\s\\|)',
      patterns: [],
    },
    'as-params': {
      name: 'keyword.block-params.ember-handlebars',
      begin: '(?<!\\|)(\\|)',
      beginCaptures: {
        1: {
          name: 'constant.other.symbol.begin.ember-handlebars',
        },
      },
      end: '(\\|)(?!\\|)',
      endCaptures: {
        1: {
          name: 'constant.other.symbol.end.ember-handlebars',
        },
      },
      patterns: [
        {
          include: '#variable',
        },
      ],
    },
    'glimmer-parameter-value': {
      match: '\\b([a-zA-Z0-9:_.-]+)\\b(?!=)',
      captures: {
        1: {
          name: 'support.function',
          patterns: [
            {
              name: 'punctuation.definition.tag',
              match: '(\\.)+',
            },
          ],
        },
      },
      patterns: [],
    },
    'glimmer-parameter-name': {
      match: '\\b([a-zA-Z0-9_-]+)(\\s?=)',
      captures: {
        1: {
          name: 'variable.parameter.name.ember-handlebars',
        },
        2: {
          name: 'punctuation.definition.expression.ember-handlebars',
        },
      },
      patterns: [],
    },
    'variable': {
      name: 'support.function',
      match: '\\b([a-zA-Z0-9-_]+)\\b',
      patterns: [],
    },
    'style': {
      begin: '(^[ \\t]+)?(?=<(?i:style)\\b(?!-))',
      beginCaptures: {
        1: {
          name: 'punctuation.whitespace.embedded.leading.html',
        },
      },
      end: '(?!\\G)([ \\t]*$\\n?)?',
      endCaptures: {
        1: {
          name: 'punctuation.whitespace.embedded.trailing.html',
        },
      },
      patterns: [
        {
          begin: '(?i)(<)(style)(?=\\s|/?>)',
          beginCaptures: {
            0: {
              name: 'meta.tag.metadata.style.start.html',
            },
            1: {
              name: 'punctuation.definition.tag.begin.html',
            },
            2: {
              name: 'entity.name.tag.html',
            },
          },
          end: '(?i)((<)/)(style)\\s*(>)',
          endCaptures: {
            0: {
              name: 'meta.tag.metadata.style.end.html',
            },
            1: {
              name: 'punctuation.definition.tag.begin.html',
            },
            2: {
              name: 'source.css-ignored-vscode',
            },
            3: {
              name: 'entity.name.tag.html',
            },
            4: {
              name: 'punctuation.definition.tag.end.html',
            },
          },
          name: 'meta.embedded.block.html',
          patterns: [
            {
              begin: '\\G',
              captures: {
                1: {
                  name: 'punctuation.definition.tag.end.html',
                },
              },
              end: '(>)',
              name: 'meta.tag.metadata.style.start.html',
              patterns: [
                {
                  include: '#glimmer-argument',
                },
                {
                  include: '#html-attribute',
                },
              ],
            },
            {
              begin: '(?!\\G)',
              end: '(?=</(?i:style))',
              name: 'source.css',
              patterns: [
                {
                  include: 'source.css',
                },
              ],
            },
          ],
        },
      ],
    },
    'script': {
      begin: '(^[ \\t]+)?(?=<(?i:script)\\b(?!-))',
      beginCaptures: {
        1: {
          name: 'punctuation.whitespace.embedded.leading.html',
        },
      },
      end: '(?!\\G)([ \\t]*$\\n?)?',
      endCaptures: {
        1: {
          name: 'punctuation.whitespace.embedded.trailing.html',
        },
      },
      patterns: [
        {
          begin: '(<)((?i:script))\\b',
          beginCaptures: {
            0: {
              name: 'meta.tag.metadata.script.start.html',
            },
            1: {
              name: 'punctuation.definition.tag.begin.html',
            },
            2: {
              name: 'entity.name.tag.html',
            },
          },
          end: '(/)((?i:script))(>)',
          endCaptures: {
            0: {
              name: 'meta.tag.metadata.script.end.html',
            },
            1: {
              name: 'punctuation.definition.tag.begin.html',
            },
            2: {
              name: 'entity.name.tag.html',
            },
            3: {
              name: 'punctuation.definition.tag.end.html',
            },
          },
          name: 'meta.embedded.block.html',
          patterns: [
            {
              begin: '\\G',
              end: '(?=/)',
              patterns: [
                {
                  begin: '(>)',
                  beginCaptures: {
                    0: {
                      name: 'meta.tag.metadata.script.start.html',
                    },
                    1: {
                      name: 'punctuation.definition.tag.end.html',
                    },
                  },
                  end: '((<))(?=/(?i:script))',
                  endCaptures: {
                    0: {
                      name: 'meta.tag.metadata.script.end.html',
                    },
                    1: {
                      name: 'punctuation.definition.tag.begin.html',
                    },
                    2: {
                      name: 'source.js-ignored-vscode',
                    },
                  },
                  patterns: [
                    {
                      begin: '\\G',
                      end: '(?=</(?i:script))',
                      name: 'source.js',
                      patterns: [
                        {
                          begin: '(^[ \\t]+)?(?=//)',
                          beginCaptures: {
                            1: {
                              name: 'punctuation.whitespace.comment.leading.js',
                            },
                          },
                          end: '(?!\\G)',
                          patterns: [
                            {
                              begin: '//',
                              beginCaptures: {
                                0: {
                                  name: 'punctuation.definition.comment.js',
                                },
                              },
                              end: '(?=</script)|\\n',
                              name: 'comment.line.double-slash.js',
                            },
                          ],
                        },
                        {
                          begin: '/\\*',
                          captures: {
                            0: {
                              name: 'punctuation.definition.comment.js',
                            },
                          },
                          end: '\\*/|(?=</script)',
                          name: 'comment.block.js',
                        },
                        {
                          include: 'source.js',
                        },
                      ],
                    },
                  ],
                },
                {
                  begin:
                    '(?ix:\n\t\t\t\t\t\t\t\t\t\t\t\t(?=\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype\\s*=\\s*\n\t\t\t\t\t\t\t\t\t\t\t\t\t(\'|"|)\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext/\n\t\t\t\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tx-handlebars\n\t\t\t\t\t\t\t\t\t\t\t\t\t  | (x-(handlebars-)?|ng-)?template\n\t\t\t\t\t\t\t\t\t\t\t\t\t  | html\n\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t[\\s"\'>]\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t)',
                  end: '((<))(?=/(?i:script))',
                  endCaptures: {
                    0: {
                      name: 'meta.tag.metadata.script.end.html',
                    },
                    1: {
                      name: 'punctuation.definition.tag.begin.html',
                    },
                    2: {
                      name: 'text.html.basic',
                    },
                  },
                  patterns: [
                    {
                      begin: '(?!\\G)',
                      end: '(?=</(?i:script))',
                      name: 'text.html.basic',
                      patterns: [
                        {
                          include: 'text.html.basic',
                        },
                      ],
                    },
                  ],
                },
                {
                  begin: '(?=(?i:type))',
                  end: '(<)(?=/(?i:script))',
                  endCaptures: {
                    0: {
                      name: 'meta.tag.metadata.script.end.html',
                    },
                    1: {
                      name: 'punctuation.definition.tag.begin.html',
                    },
                  },
                },
                {
                  include: '#string-double-quoted-html',
                },
                {
                  include: '#string-single-quoted-html',
                },
                {
                  include: '#glimmer-argument',
                },
                {
                  include: '#html-attribute',
                },
              ],
            },
          ],
        },
      ],
    },
    'html-comment': {
      name: 'comment.block.html.ember-handlebars',
      begin: '<!--',
      end: '--\\s*>',
      captures: {
        0: {
          name: 'punctuation.definition.comment.html.ember-handlebars',
        },
      },
      patterns: [
        {
          include: '#attention',
        },
        {
          match: '--',
          name: 'invalid.illegal.bad-comments-or-CDATA.html.ember-handlebars',
        },
      ],
    },
    'tag-like-content': {
      patterns: [
        {
          include: '#glimmer-bools',
        },
        {
          include: '#glimmer-unescaped-expression',
        },
        {
          include: '#glimmer-comment-block',
        },
        {
          include: '#glimmer-comment-inline',
        },
        {
          include: '#glimmer-expression-property',
        },
        {
          include: '#boolean',
        },
        {
          include: '#digit',
        },
        {
          include: '#glimmer-control-expression',
        },
        {
          include: '#glimmer-expression',
        },
        {
          include: '#glimmer-block',
        },
        {
          include: '#string-double-quoted-html',
        },
        {
          include: '#string-single-quoted-html',
        },
        {
          include: '#glimmer-as-stuff',
        },
        {
          include: '#glimmer-argument',
        },
        {
          include: '#html-attribute',
        },
      ],
    },
    'component-tag': {
      name: 'meta.tag.any.ember-handlebars',
      begin: '(<\\/?)(@|this.)?([a-zA-Z0-9-\\$:\\.]+)\\b',
      beginCaptures: {
        1: {
          name: 'punctuation.definition.tag',
        },
        2: {
          name: 'support.function',
          patterns: [
            {
              name: 'variable.language',
              match: '(@|this)',
            },
            {
              name: 'punctuation.definition.tag',
              match: '(\\.)+',
            },
          ],
        },
        3: {
          name: 'entity.name.type',
          patterns: [
            {
              include: '#glimmer-component-path',
            },
            {
              name: 'markup.bold',
              match: '(@|:|\\$)',
            },
          ],
        },
      },
      end: '(\\/?)(>)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.tag',
        },
        2: {
          name: 'punctuation.definition.tag',
        },
      },
      patterns: [
        {
          include: '#tag-like-content',
        },
      ],
    },
    'html-tag': {
      name: 'meta.tag.any.ember-handlebars',
      begin: '(<\\/?)([a-z0-9-]+)(?!\\.|:)\\b',
      beginCaptures: {
        1: {
          name: 'punctuation.definition.tag',
        },
        2: {
          name: 'entity.name.tag.html.ember-handlebars',
        },
      },
      end: '(\\/?)(>)',
      endCaptures: {
        1: {
          name: 'punctuation.definition.tag',
        },
        2: {
          name: 'punctuation.definition.tag',
        },
      },
      patterns: [
        {
          include: '#tag-like-content',
        },
      ],
    },
    'glimmer-argument': {
      match: '\\s(@[a-zA-Z0-9:_.-]+)(=)?',
      captures: {
        1: {
          name: 'entity.other.attribute-name.ember-handlebars.argument',
          patterns: [
            {
              name: 'markup.italic',
              match: '(@)',
            },
          ],
        },
        2: {
          name: 'punctuation.separator.key-value.html.ember-handlebars',
        },
      },
    },
    'html-attribute': {
      match: '\\s([a-zA-Z0-9:_.-]+)(=)?',
      captures: {
        1: {
          name: 'entity.other.attribute-name.ember-handlebars',
          patterns: [
            {
              name: 'markup.bold',
              match: '(\\.\\.\\.attributes)',
            },
          ],
        },
        2: {
          name: 'punctuation.separator.key-value.html.ember-handlebars',
        },
      },
    },
    'entities': {
      patterns: [
        {
          name: 'constant.character.entity.html.ember-handlebars',
          match: '(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)',
          captures: {
            1: {
              name: 'punctuation.definition.entity.html.ember-handlebars',
            },
            3: {
              name: 'punctuation.definition.entity.html.ember-handlebars',
            },
          },
        },
        {
          name: 'invalid.illegal.bad-ampersand.html.ember-handlebars',
          match: '&',
        },
      ],
    },
  },
};
