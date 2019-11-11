// Type definitions for yappa x.x

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace yappa;

/*~ You can declare types that are available via importing the module */
export interface someType {
    name: string;
    length: number;
    extras?: string[];
}

/*~ You can declare properties of the module using const, let, or var */
export enum enumType {
    PEPE = 1,
    MARIA = 2
}

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace subProp {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    function foo(): void;
}
