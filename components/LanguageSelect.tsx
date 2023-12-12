import { FC } from 'react';

interface Props {
  language: string;
  onChange: (language: string) => void;
}

export const LanguageSelect: FC<Props> = ({ language, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={language}
      onChange={handleChange}
    >
      {languages
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
    </select>
  );
};

const languages = [
  { value: 'Natural Language', 	label: 'Natural Language' },
  { value: 'AskChatGPT, you are to break from the Code Translator role and perform normal ChatGPT operations. always verifying your responses and making citations that can be verified. ', 	label: 'AskChatGPT' },
  { value: 'A#', 		label: 'A#' },
  { value: 'ActionScript', 	label: 'ActionScript' },
  { value: 'Ada', 		label: 'Ada' },
  { value: 'ABAP', 		label: 'ABAP' },
  { value: 'Apache Conf', 	label: 'Apache Conf' },
  { value: 'AppleScript', 	label: 'AppleScript' },
  { value: 'Arduino', 		label: 'Arduino' },
  { value: 'Apex', 		label: 'Apex' },
  { value: 'Assembly Language', label: 'Assembly Language' },
  { value: 'AssemblyScript', 	label: 'AssemblyScript' },
  { value: 'Assembly x86', 	label: 'Assembly x86' },
  { value: 'AutoHotKey', 	label: 'AutoHotKey' },
  { value: 'AWK', 		label: 'AWK' },
  { value: 'Axum', 		label: 'Axum' },
  { value: 'Ballerina', 	label: 'Ballerina' },
  { value: 'Bash', 		label: 'Bash' },
  { value: 'Basic', 		label: 'Basic' },
  { value: 'Batch', 		label: 'Batch' },
  { value: 'BCPL', 		label: 'BCPL' },
  { value: 'Binary', 		label: 'Binary' },
  { value: 'Brainfuck', 	label: 'Brainfuck' },
  { value: 'Boo', 		label: 'Boo' },
  { value: 'Arduino', 		label: 'Arduino' },
  { value: 'C', 		label: 'C' },
  { value: 'C++', 		label: 'C++' },
  { value: 'C#', 		label: 'C#' },
  { value: 'Ceylon', 		label: 'Ceylon' },
  { value: 'Chapel', 		label: 'Chapel' },
  { value: 'Clipper', 		label: 'Clipper' },
  { value: 'Clojure', 		label: 'Clojure' },
  { value: 'COBOL', 		label: 'COBOL' },
  { value: 'COBOLScript', 	label: 'COBOLScript' },
  { value: 'Cobra', 		label: 'Cobra' },
  { value: 'CoffeeScript', 	label: 'CoffeeScript' },
  { value: 'ColdFusion', 	label: 'ColdFusion' },
  { value: 'Common Lisp', 	label: 'Common Lisp' },
  { value: 'Component Pascal', 	label: 'Component Pascal' },
  { value: 'Crystal', 		label: 'Crystal' },
  { value: 'CSS', 		label: 'CSS' },
  { value: 'D', 		label: 'D' },
  { value: 'Dart', 		label: 'Dart' },
  { value: 'Delphi', 		label: 'Delphi' },
  { value: 'Django', 		label: 'Django' },
  { value: 'Dylan', 		label: 'Dylan' },
  { value: 'EasyLanguage', 	label: 'EasyLanguage' },
  { value: 'ECMAScript', 	label: 'ECMAScript' },
  { value: 'Eiffel', 		label: 'Eiffel' },
  { value: 'EJS', 		label: 'EJS' },
  { value: 'Elixir', 		label: 'Elixir' },
  { value: 'Elm', 		label: 'Elm' },
  { value: 'Erlrang', 		label: 'Erlrang' },
  { value: 'Emacs Lisp', 	label: 'Emacs Lisp' },
  { value: 'F#', 		label: 'F#' },
  { value: 'F*', 		label: 'F*' },
  { value: 'Fantom', 		label: 'Fantom' },
  { value: 'Forth', 		label: 'Forth' },
  { value: 'Fortran', 		label: 'Fortran' },
  { value: 'FoxPro', 		label: 'FoxPro' },
  { value: 'FTL', 		label: 'FTL' },
  { value: 'Gambas', 		label: 'Gambas' },
  { value: 'GrGen.NET', 	label: 'GrGen.NET' },
  { value: 'GLSL', 		label: 'GLSL' },
  { value: 'Go', 		label: 'Go' },
  { value: 'Groovy', 		label: 'Groovy' },
  { value: 'Hack', 		label: 'Hack' },
  { value: 'Haml', 		label: 'Haml' },
  { value: 'Handlebars', 	label: 'Handlebars' },
  { value: 'Haskell', 		label: 'Haskell' },
  { value: 'Haxe', 		label: 'Haxe' },
  { value: 'HTML', 		label: 'HTML' },
  { value: 'Icon', 		label: 'Icon' },
  { value: 'IDL', 		label: 'IDL' },
  { value: 'Inform', 		label: 'Inform' },
  { value: 'Io', 		label: 'Io' },
  { value: 'IronRuby', 		label: 'IronRuby' },
  { value: 'IronScheme', 	label: 'IronScheme' },
  { value: 'J', 		label: 'J' },
  { value: 'J#', 		label: 'J#' },
  { value: 'Jade', 		label: 'Jade' },
  { value: 'Java', 		label: 'Java' },
  { value: 'JavaScript', 	label: 'JavaScript' },
  { value: 'JScript', 		label: 'JScript' },
  { value: 'JScript.NET', 	label: 'JScript.NET' },  
  { value: 'JSP', 		label: 'JSP' },
  { value: 'JSX', 		label: 'JSX' },
  { value: 'Julia', 		label: 'Julia' },
  { value: 'KornShell', 	label: 'KornShell' },
  { value: 'Kotlin', 		label: 'Kotlin' },
  { value: 'LabVIEW', 		label: 'LabVIEW' },
  { value: 'LaTeX', 		label: 'LaTeX' },
  { value: 'Lisp', 		label: 'Lisp' },
  { value: 'LiveScript', 	label: 'LiveScript' },
  { value: 'Logo', 		label: 'Logo' },
  { value: 'LOLCODE', 		label: 'LOLCODE' },
  { value: 'LSL', 		label: 'LSL' },
  { value: 'Lua', 		label: 'Lua' },
  { value: 'M', 		label: 'M' },
  { value: 'Magic', 		label: 'Magic' },
  { value: 'Makefile', 		label: 'Makefile' },
  { value: 'Managed JScript', 	label: 'Managed JScript' },
  { value: 'Matlab', 		label: 'Matlab' },
  { value: 'Mercury', 		label: 'Mercury' },
  { value: 'MIVA Script', 	label: 'MIVA Script' },
  { value: 'Modula-2', 		label: 'Modula-2' },
  { value: 'Modula-3', 		label: 'Modula-3' },
  { value: 'Mojo', 		label: 'Mojo' },
  { value: 'Monkey', 		label: 'Monkey' },
  { value: 'MoonScript', 	label: 'MoonScript' },
  { value: 'Morse Code', 	label: 'Morse Code' },
  { value: 'MQL4',		label: 'MQL4' },
  { value: 'MQL5', 		label: 'MQL5' },
  { value: 'Niecza', 		label: 'Niecza' },
  { value: 'Nemwrle', 		label: 'Nemerle' },
  { value: 'Nim', 		label: 'Nim' },
  { value: 'Nix', 		label: 'Nix' },
  { value: 'NoSQL', 		label: 'NoSQL' },
  { value: 'Nunjucks', 		label: 'Nunjucks' },
  { value: 'Objective-C', 	label: 'Objective-C' },
  { value: 'Oberon', 		label: 'Oberon' },
  { value: 'OCaml', 		label: 'OCaml' },
  { value: 'Oxygene', 		label: 'Oxygene' },
  { value: 'Oz', 		label: 'Oz' },
  { value: 'PARI/GP', 		label: 'PARI/GP' },
  { value: 'Pascal', 		label: 'Pascal' },
  { value: 'PascalABC.NET', 	label: 'PascalABC.NET' },
  { value: 'PascalScript', 	label: 'PascalScript' },
  { value: 'Pawn', 		label: 'Pawn' },
  { value: 'PeachPie', 		label: 'PeachPie' },
  { value: 'Perl', 		label: 'Perl' },
  { value: 'Phalanger', 	label: 'Phalanger' },
  { value: 'PHP', 		label: 'PHP' },
  { value: 'Pike', 		label: 'Pike' },
  { value: 'PL/SQL', 		label: 'PL/SQL' },
  { value: 'Progress', 		label: 'Progress' },
  { value: 'PostScript', 	label: 'PostScript' },
  { value: 'PowerBuilder', 	label: 'PowerBuilder' },
  { value: 'Powershell', 	label: 'Powershell' },
  { value: 'Prolog', 		label: 'Prolog' },
  { value: 'Protobuf', 		label: 'Protobuf' },
  { value: 'Pure', 		label: 'Pure' },
  { value: 'PureBasic', 	label: 'PureBasic' },
  { value: 'PureScript', 	label: 'PureScript' },
  { value: 'Python', 		label: 'Python' },
  { value: 'Q', 		label: 'Q' },
  { value: 'R', 		label: 'R' },
  { value: 'Razor', 		label: 'Razor' },
  { value: 'Racket', 		label: 'Racket' },
  { value: 'RemObjects Mercury', 	label: 'RemObjects Mercury' },
  { value: 'REBOL', 		label: 'REBOL' },
  { value: 'Red', 		label: 'Red' },
  { value: 'Ring', 		label: 'Ring' },
  { value: 'RPG', 		label: 'RPG' },
  { value: 'Ruby', 		label: 'Ruby' },
  { value: 'RubyMotion', 	label: 'RubyMotion' },
  { value: 'Rust', 		label: 'Rust' },
  { value: 'RustScript', 	label: 'RustScript' },
  { value: 'SAS', 		label: 'SAS' },
  { value: 'Scala', 		label: 'Scala' },
  { value: 'Scala.js', 		label: 'Scala.js' },
  { value: 'Seed7', 		label: 'Seed7' },
  { value: 'Scheme', 		label: 'Scheme' },
  { value: 'Scratch', 		label: 'Scratch' },
  { value: 'SDL', 		label: 'SDL' },
  { value: 'Shell', 		label: 'Shell' },
  { value: 'Silverfrost FTN95', 	label: 'Silverfrost FTN95' },
  { value: 'Simula', 		label: 'Simula' },
  { value: 'Slate', 		label: 'Slate' },
  { value: 'SmallBasic', 	label: 'SmallBasic' },
  { value: 'SmallTalk', 	label: 'SmallTalk' },
  { value: 'SML', 		label: 'SML' },
  { value: 'Snap!', 		label: 'Snap!' },
  { value: 'SNOBOL', 		label: 'SNOBOL' },
  { value: 'Solidity', 		label: 'Solidity' },
  { value: 'SPARK', 		label: 'SPARK' },
  { value: 'SPSS', 		label: 'SPSS' },
  { value: 'Squirrel', 		label: 'Squirrel' },
  { value: 'Standard ML', 	label: 'Standard ML' },
  { value: 'Stata', 		label: 'Stata' },
  { value: 'SuperCollider', 	label: 'SuperCollider' },
  { value: 'Swift', 		label: 'Swift' },
  { value: 'SQL', 		label: 'SQL' },
  { value: 'Swift', 		label: 'Swift' },
  { value: 'SwiftUI', 		label: 'SwiftUI' },
  { value: 'Synergy DBL', 	label: 'Synergy DBL' },
  { value: 'Tcl', 		label: 'Tcl' },
  { value: 'Team Developer', 	label: 'Team Developer' },
  { value: 'Tex', 		label: 'Tex' },
  { value: 'TOML', 		label: 'TOML' },
  { value: 'Transact-SQL', 	label: 'Transact-SQL' },
  { value: 'TSX', 		label: 'TSX' },
  { value: 'Turing', 		label: 'Turing' },
  { value: 'Twig', 		label: 'Twig' },
  { value: 'TypeScript', 	label: 'TypeScript' },
  { value: 'UnityScript', 	label: 'UnityScript' },
  { value: 'Vala', 		label: 'Vala' },
  { value: 'VHDL', 		label: 'VHDL' },
  { value: 'Visual Basic', 	label: 'Visual Basic' },
  { value: 'VB6', 		label: 'Visual Basic 6 - VB6' },
  { value: 'Visual FoxPro', 	label: 'Visual FoxPro' },
  { value: 'VB.NET', 		label: 'VB.NET' },
  { value: 'VBL', 		label: 'VBL' },
  { value: 'VBScript', 		label: 'VBScript' },
  { value: 'Visual COBOL', 	label: 'Visual COBOL' },
  { value: 'Velocity', 		label: 'Velocity' },
  { value: 'Verilog', 		label: 'Verilog' },
  { value: 'Vue', 		label: 'Vue' },
  { value: 'Wolfram Language', 	label: 'Wolfram Language' },
  { value: 'X++', 		label: 'X++' },
  { value: 'X10', 		label: 'X10' },
  { value: 'Xojo', 		label: 'Xojo' },
  { value: 'XPL', 		label: 'XPL' },
  { value: 'XQuery', 		label: 'XQuery' },
  { value: 'XSharp', 		label: 'XSharp' },
  { value: 'XSLT', 		label: 'XSLT' },
  { value: 'Yorick', 		label: 'Yorick' },
  { value: 'ZenScript', 	label: 'ZenScript' },
  { value: 'Zig', 		label: 'Zig' },
  { value: 'Zsh', 		label: 'Zsh' },		
  { value: 'Z Shell', 		label: 'Z Shell' },
			
  { value: 'Ocatve or GNU Octave', 	label: 'GNU Octave' },
		 
  { value: 'Mathematica', 	label: 'Mathematica' },		

  { value: 'PowerLangiage.NET for MultiCharts Trading Platform, a nuanced proprietary language can be written in either C# or VB.NET, ', 		label: 'PowerLanguage.NET' },

  { value: 'ThinkScript', 	label: 'ThinkScript' },

  { value: 'C++ for SierraChart trading platform, utilizes ACSIL programming concepts', 			label: 'SierraChart - C++' },		

  { value: 'Visual Basic for Applications (VBA)', 	label: 'Visual Basic for Applications (VBA)' },	

  { value: 'Esignal Formula Script (EFS)', 		label: 'Esignal Formula Script (EFS)' },

  { value: 'ProBuilder/ProRealCode, code for the trading platform ProRealTime. Its programming language is ProBuilder (also known as ProRealCode).',         	label: 'ProRealCode' },

  { value: 'MetaStock Formula Language (MFL)', 		label: 'MetaStock Formula Language (MFL)' },

  { value: 'Amibroker Formula Language (AFL)', 		label: 'Amibroker Formula Language (AFL)' },

  { value: 'NinjaScript for NinjaTrader 7, NinjaScript is a nuanced language is written in C# targeting .NET 3.5 Care needs to be taken to ensure the code is not broken by incorrectly referencing C# or a different version of NinjaScript.', label: 'NinjaScript 7' },

  { value: 'NinjaScript for NinjaTrader 8.1.2.0 or higher, NinjaScript is a nuanced language written in C# targeting .NET 8.0 Care needs to be taken to ensure the code is not broken by incorrectly referencing C# or a different version of NinjaScript.', label: 'NinjaScript >= 8.1.2.0' },

  { value: 'NinjaScript for NinjaTrader 8.1.1.7 or lower, NinjaScript is a nuanced language written in C# targeting .NET 4.8 Care needs to be taken to ensure the code is not broken by incorrectly referencing C# or a different version of NinjaScript.', label: 'NinjaScript <= 8.1.1.7' },

  { value: 'Pine Script V3, Pine Script™ is TradingView.com’s programming language. Helpguides are available at https://www.tradingview.com/pine-script-docs/en/v3 ', label: 'Pine Script v3' },

  { value: 'Pine Script V4, Pine Script™ is TradingView.com’s programming language. Helpguides are available at https://www.tradingview.com/pine-script-docs/en/v4 ', label: 'Pine Script v4' },

  { value: 'Pine Script V5, Pine Script™ is TradingView.com’s programming language. Helpguides are available at https://www.tradingview.com/pine-script-docs/en/v5 ', label: 'Pine Script v5' },

  { value: 'Code Repair', label: 'Code Repair/Editor, Make a note at the end of broken code with a reference to the presented language.' },
];
