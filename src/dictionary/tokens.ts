import { TypeToken, dictionary } from "./dictionary.interface";

export const dictonary: Map<string, dictionary> = new Map<string, dictionary>([
    ["await", {
        token: "await",
        description: "Utilizado en funciones asincrónicas para esperar la resolución de una promesa.",
        type: TypeToken.reserved
     }],
    ["continue", {
       token: "continue",
       description: "Utilizado para saltar a la siguiente iteración de un bucle.",
       type: TypeToken.reserved
    }],
    ["debugger", {
       token: "debugger",
       description: "Utilizado para detener la ejecución y depurar el código en el navegador.",
       type: TypeToken.reserved
    }],
    ["default", {
       token: "default",
       description: "Utilizado en una declaración switch como caso predeterminado cuando ningún otro caso coincide.",
       type: TypeToken.reserved
    }],
    ["delete", {
       token: "delete",
       description: "Utilizado para eliminar propiedades de un objeto o elementos de un arreglo.",
       type: TypeToken.reserved
    }],
    ["do", {
       token: "do",
       description: "Utilizado para crear un bucle do...while.",
       type: TypeToken.reserved
    }],
    ["else", {
       token: "else",
       description: "Utilizado en una estructura condicional if para especificar un bloque de código alternativo.",
       type: TypeToken.reserved
    }],
    ["enum", {
       token: "enum",
       description: "No se usa actualmente en JavaScript. Reservado para futuras versiones del lenguaje.",
       type: TypeToken.reserved
    }],
    ["export", {
       token: "export",
       description: "Utilizado para exportar funciones, objetos o valores desde un módulo.",
       type: TypeToken.reserved
    }],
    ["extends", {
       token: "extends",
       description: "Utilizado para crear una clase hija que hereda de otra clase en JavaScript.",
       type: TypeToken.reserved
    }],
    ["false", {
       token: "false",
       description: "Representa el valor booleano falso.",
       type: TypeToken.reserved
    }],
    ["finally", {
       token: "finally",
       description: "Utilizado en bloques try...catch para especificar un bloque de código que se ejecutará siempre, sin importar si se lanzó una excepción o no.",
       type: TypeToken.reserved
    }],
    ["for", {
       token: "for",
       description: "Utilizado para crear bucles for.",
       type: TypeToken.reserved
    }],
    ["function", {
       token: "function",
       description: "Utilizado para definir una función en JavaScript.",
       type: TypeToken.reserved
    }],
    ["if", {
       token: "if",
       description: "Utilizado para crear una estructura condicional if.",
       type: TypeToken.reserved
    }],
    ["implements", {
       token: "implements",
       description: "No se usa actualmente en JavaScript. Reservado para futuras versiones del lenguaje.",
       type: TypeToken.reserved
    }],
    ["import", {
       token: "import",
       description: "Utilizado para importar funciones, objetos o valores desde un módulo.",
       type: TypeToken.reserved
    }],
    ["in", {
       token: "in",
       description: "Utilizado para comprobar si una propiedad existe en un objeto.",
       type: TypeToken.reserved
    }],
    ["instanceof", {
       token: "instanceof",
       description: "Utilizado para comprobar si un objeto es una instancia de una clase o constructor específico.",
       type: TypeToken.reserved
    }],
    ["interface", {
       token: "interface",
       description: "No se usa actualmente en JavaScript. Reservado para futuras versiones del lenguaje.",
       type: TypeToken.reserved
    }],
    ["let", {
       token: "let",
       description: "Utilizado para declarar una variable local en JavaScript.",
       type: TypeToken.reserved
    }],
    ["new", {
       token: "new",
       description: "Utilizado para crear una instancia de un objeto o constructor.",
       type: TypeToken.reserved
    }],
    ["null", {
       token: "null",
       description: "Representa la ausencia de un valor o un objeto vacío.",
       type: TypeToken.reserved
    }],
    ["package", {
       token: "package",
       description: "No se usa actualmente en JavaScript. Reservado para futuras versiones del lenguaje.",
       type: TypeToken.reserved
    }],
    ["private", {
       token: "private",
       description: "No se usa actualmente en JavaScript. Reservado para futuras versiones del lenguaje.",
       type: TypeToken.reserved
    }],
    ["protected", {
       token: "protected",
       description: "No se usa actualmente en JavaScript. Reservado para futuras versiones del lenguaje.",
       type: TypeToken.reserved
    }],
    ["public", {
       token: "public",
       description: "No se usa actualmente en JavaScript. Reservado para futuras versiones del lenguaje.",
       type: TypeToken.reserved
    }],
    ["return", {
       token: "return",
       description: "Utilizado para devolver un valor desde una función.",
       type: TypeToken.reserved
    }],
    ["static", {
       token: "static",
       description: "Utilizado para definir métodos estáticos en una clase en JavaScript.",
       type: TypeToken.reserved
    }],
    ["super", {
       token: "super",
       description: "Utilizado para llamar a métodos en la clase padre desde una clase hija.",
       type: TypeToken.reserved
    }],
    ["switch", {
       token: "switch",
       description: "Utilizado para crear una declaración switch para múltiples casos.",
       type: TypeToken.reserved
    }],
    ["this", {
       token: "this",
       description: "Hace referencia al objeto actual en el contexto de ejecución.",
       type: TypeToken.reserved
    }],
    ["throw", {
       token: "throw",
       description: "Utilizado para lanzar una excepción.",
       type: TypeToken.reserved
    }],
    ["true", {
       token: "true",
       description: "Representa el valor booleano verdadero.",
       type: TypeToken.reserved
    }],
    ["try", {
       token: "try",
       description: "Utilizado para crear un bloque de código try...catch para manejar excepciones.",
       type: TypeToken.reserved
    }],
    ["typeof", {
       token: "typeof",
       description: "Utilizado para obtener el tipo de una variable u objeto.",
       type: TypeToken.reserved
    }],
    ["var", {
       token: "var",
       description: "Utilizado para declarar una variable en JavaScript (forma antigua).",
       type: TypeToken.reserved
    }],
    ["void", {
       token: "void",
       description: "Utilizado para indicar que una función no devuelve un valor.",
       type: TypeToken.reserved
    }],
    ["while", {
       token: "while",
       description: "Utilizado para crear un bucle while.",
       type: TypeToken.reserved
    }],
    ["with", {
       token: "with",
       description: "No se usa generalmente en JavaScript debido a problemas de rendimiento y legibilidad. Evita su uso.",
       type: TypeToken.reserved
    }],
    ["yield", {
       token: "yield",
       description: "Utilizado en funciones generadoras para pausar la ejecución y devolver un valor.",
       type: TypeToken.reserved
    }]

]
)

