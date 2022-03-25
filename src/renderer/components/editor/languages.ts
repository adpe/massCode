import type { Language, LanguageOption } from './types'

export const languages: LanguageOption[] = [
  { name: 'ABAP', value: 'abap' },
  { name: 'ABC', value: 'abc' },
  { name: 'ActionScript', value: 'actionscript' },
  { name: 'ADA', value: 'ada' },
  { name: 'Alda', value: 'alda' },
  { name: 'Apache Conf', value: 'apache_conf' },
  { name: 'Apex', value: 'apex' },
  { name: 'AQL', value: 'aql' },
  { name: 'AsciiDoc', value: 'asciidoc' },
  { name: 'ASL', value: 'asl' },
  { name: 'Assembly x86', value: 'assembly_x86' },
  { name: 'AutoHotkey / AutoIt', value: 'autohotkey' },
  { name: 'Bash', value: 'sh' },
  { name: 'BatchFile', value: 'batchfile' },
  { name: 'C and C++', value: 'c_cpp' },
  { name: 'C#', value: 'csharp' },
  { name: 'C9 Search Results', value: 'c9search' },
  { name: 'Cirru', value: 'cirru' },
  { name: 'Clojure', value: 'clojure' },
  { name: 'Cobol', value: 'cobol' },
  { name: 'CoffeeScript', value: 'coffee' },
  { name: 'ColdFusion', value: 'coldfusion' },
  { name: 'Crystal', value: 'crystal' },
  { name: 'Csound Document', value: 'csound_document' },
  { name: 'Csound Score', value: 'csound_score' },
  { name: 'Csound Orchestra', value: 'csound_orchestra' },
  { name: 'CSS', value: 'css' },
  { name: 'Curly', value: 'curly' },
  { name: 'D', value: 'd' },
  { name: 'Dart', value: 'dart' },
  { name: 'Diff', value: 'diff' },
  { name: 'Django', value: 'django' },
  { name: 'Dockerfile', value: 'dockerfile' },
  { name: 'Dot', value: 'dot' },
  { name: 'Drools', value: 'drools' },
  { name: 'Edifact', value: 'edifact' },
  { name: 'Eiffel', value: 'eiffel' },
  { name: 'EJS', value: 'ejs' },
  { name: 'Elixir', value: 'elixir' },
  { name: 'Elm', value: 'elm' },
  { name: 'Erlang', value: 'erlang' },
  { name: 'Forth', value: 'forth' },
  { name: 'Fortran', value: 'fortran' },
  { name: 'F#', value: 'fsharp' },
  { name: 'FSL', value: 'fsl' },
  { name: 'Gcode', value: 'gcode' },
  { name: 'Gherkin', value: 'gherkin' },
  { name: 'Gitignore', value: 'gitignore' },
  { name: 'Glsl', value: 'glsl' },
  { name: 'Go', value: 'golang' },
  { name: 'Gobstones', value: 'gobstones' },
  { name: 'GraphQLSchema', value: 'graphqlschema' },
  { name: 'Groovy', value: 'groovy' },
  { name: 'HAML', value: 'haml' },
  { name: 'Handlebars', value: 'handlebars' },
  { name: 'Haskell Cabal', value: 'haskell_cabal' },
  { name: 'Haskell', value: 'haskell' },
  { name: 'haXe', value: 'haxe' },
  { name: 'Hjson', value: 'hjson' },
  { name: 'HTML (Elixir)', value: 'html_elixir' },
  { name: 'HTML (Ruby)', value: 'html_ruby' },
  { name: 'HTML', value: 'html' },
  { name: 'INI', value: 'ini' },
  { name: 'Io', value: 'io' },
  { name: 'Jack', value: 'jack' },
  { name: 'Jade', value: 'jade' },
  { name: 'Java', value: 'java' },
  { name: 'JavaScript', value: 'javascript' },
  { name: 'JSON', value: 'json' },
  { name: 'JSON5', value: 'json5' },
  { name: 'JSONiq', value: 'jsoniq' },
  { name: 'JSP', value: 'jsp' },
  { name: 'JSSM', value: 'jssm' },
  { name: 'JSX', value: 'jsx' },
  { name: 'Julia', value: 'julia' },
  { name: 'Kotlin', value: 'kotlin' },
  { name: 'LaTeX', value: 'latex' },
  { name: 'Latte', value: 'latte' },
  { name: 'LESS', value: 'less' },
  { name: 'Liquid', value: 'liquid' },
  { name: 'Lisp', value: 'lisp' },
  { name: 'LiveScript', value: 'livescript' },
  { name: 'LogiQL', value: 'logiql' },
  { name: 'LSL', value: 'lsl' },
  { name: 'Lua', value: 'lua' },
  { name: 'LuaPage', value: 'luapage' },
  { name: 'Lucene', value: 'lucene' },
  { name: 'Makefile', value: 'makefile' },
  { name: 'Markdown', value: 'markdown' },
  { name: 'Mask', value: 'mask' },
  { name: 'MATLAB', value: 'matlab' },
  { name: 'Maze', value: 'maze' },
  { name: 'MediaWiki', value: 'mediawiki' },
  { name: 'MEL', value: 'mel' },
  { name: 'MIPS', value: 'mips' },
  { name: 'MIXAL', value: 'mixal' },
  { name: 'MUSHCode', value: 'mushcode' },
  { name: 'MySQL', value: 'mysql' },
  { name: 'Nginx', value: 'nginx' },
  { name: 'Nim', value: 'nim' },
  { name: 'Nix', value: 'nix' },
  { name: 'NSIS', value: 'nsis' },
  { name: 'Nunjucks', value: 'nunjucks' },
  { name: 'Objective-C', value: 'objectivec' },
  { name: 'OCaml', value: 'ocaml' },
  { name: 'Pascal', value: 'pascal' },
  { name: 'Perl', value: 'perl' },
  { name: 'pgSQL', value: 'pgsql' },
  { name: 'PHP (Blade Template)', value: 'php_laravel_blade' },
  { name: 'PHP', value: 'php' },
  { name: 'Pig', value: 'pig' },
  { name: 'Plain Text', value: 'plain_text' },
  { name: 'Powershell', value: 'powershell' },
  { name: 'Praat', value: 'praat' },
  { name: 'Prisma', value: 'prisma' },
  { name: 'Prolog', value: 'prolog' },
  { name: 'Properties', value: 'properties' },
  { name: 'Protobuf', value: 'protobuf' },
  { name: 'Puppet', value: 'puppet' },
  { name: 'Python', value: 'python' },
  { name: 'QML', value: 'qml' },
  { name: 'R', value: 'r' },
  { name: 'Raku', value: 'raku' },
  { name: 'Razor', value: 'razor' },
  { name: 'RDoc', value: 'rdoc' },
  { name: 'Red', value: 'red' },
  { name: 'Redshift', value: 'redshift' },
  { name: 'RHTML', value: 'rhtml' },
  { name: 'RST', value: 'rst' },
  { name: 'Ruby', value: 'ruby' },
  { name: 'Rust', value: 'rust' },
  { name: 'SASS', value: 'sass' },
  { name: 'SCAD', value: 'scad' },
  { name: 'Scala', value: 'scala' },
  { name: 'Scheme', value: 'scheme' },
  { name: 'Scrypt', value: 'scrypt' },
  { name: 'SCSS', value: 'scss' },
  { name: 'SJS', value: 'sjs' },
  { name: 'Slim', value: 'slim' },
  { name: 'Smarty', value: 'smarty' },
  { name: 'Smithy', value: 'smithy' },
  { name: 'Soy Template', value: 'soy_template' },
  { name: 'Space', value: 'space' },
  { name: 'SQL', value: 'sql' },
  { name: 'SQLServer', value: 'sqlserver' },
  { name: 'Stylus', value: 'stylus' },
  { name: 'SVG', value: 'svg' },
  { name: 'Swift', value: 'swift' },
  { name: 'Tcl', value: 'tcl' },
  { name: 'Terraform', value: 'terraform' },
  { name: 'Tex', value: 'tex' },
  { name: 'Text', value: 'text' },
  { name: 'Textile', value: 'textile' },
  { name: 'Toml', value: 'toml' },
  { name: 'TSX', value: 'tsx' },
  { name: 'Twig', value: 'twig' },
  { name: 'Typescript', value: 'typescript' },
  { name: 'Vala', value: 'vala' },
  { name: 'VBScript', value: 'vbscript' },
  { name: 'Velocity', value: 'velocity' },
  { name: 'Verilog', value: 'verilog' },
  { name: 'VHDL', value: 'vhdl' },
  { name: 'Visualforce', value: 'visualforce' },
  { name: 'Wollok', value: 'wollok' },
  { name: 'XML', value: 'xml' },
  { name: 'XQuery', value: 'xquery' },
  { name: 'YAML', value: 'yaml' },
  { name: 'Zeek', value: 'zeek' }
]

// TODO: убрать в будущих релизах
export const oldLanguageMap: Record<any, Language> = {
  azcli: 'plain_text',
  bat: 'sh',
  cameligo: 'plain_text',
  coffeescript: 'coffee',
  c: 'c_cpp',
  csp: 'plain_text',
  go: 'golang',
  graphql: 'graphqlschema',
  msdax: 'plain_text',
  'objective-c': 'objectivec',
  pascaligo: 'plain_text',
  postiats: 'plain_text',
  powerquery: 'plain_text',
  pug: 'jade',
  redis: 'plain_text',
  sb: 'plain_text',
  shell: 'sh',
  sol: 'plain_text',
  aes: 'plain_text',
  st: 'plain_text',
  vb: 'vbscript'
}