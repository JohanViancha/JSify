export interface dictionary {
    token: string,
    description:string,
    value:string
}

export enum TypeToken {
    reserved ="palabra reservada",
    numericalSeparators = "separador numerico",
    literalObjects = "objetos literales",
    literalArray = "arreglos literales",
    literalString = "cadena literal",
    arithmeticOperator = "operador aritmetico",
    assignmentOperator = "operador de asignación",
    decrementIncrementOperator ="operador de incremento y decremento",
    comparisonOperator = "operador de comparación"

}



