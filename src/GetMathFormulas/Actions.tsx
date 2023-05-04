import { areaOfRectangle, areaOfSquare, areaOfTriangle } from '../GetMathFormulas/FormulaTypes'
export function AreaOfTriangle() {
    return {
        type: areaOfTriangle,
        payLoad: '1/2 * 40 (base) * 30 (height)'
    }
}
export function AreaOfSquare() {
    return {
        type: areaOfSquare,
        payLoad: 'side * side => 100 * 100'
    }
}
export function AreaOfRectangle() {
    return {
        type: areaOfRectangle,
        payLoad: 'length * breadth =>  90 * 50 '
    }
}