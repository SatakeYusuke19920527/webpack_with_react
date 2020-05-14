import _ from 'lodash'
import {ham as NAME_OF_HAM }  from './utilities';

import Tiger from './utilities'

console.log(NAME_OF_HAM)

console.log(Tiger.say())

function component() {
    const element = document.createElement('div')
    const array = ['hello', 'webpack', '!!!']
    element.innerHTML = _.join(array, ' ')
    return element
}

document.body.appendChild(component())