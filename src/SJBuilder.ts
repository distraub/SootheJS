/*
MIT License

Copyright (c) 2024 Alex Matheu and Calais Galbraith

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class SJBuilder { // eslint-disable-line
  id: string
  constructor () {
    this.id = 'builder'
    console.log(`Builder Class ID = ${this.id}`)
  }

  /**
   * This builds a NodeList from a single HTMLElement and returns the list
   * @param  {HTMLElement} element single HTMLElement
   * @returns NodeList
   */
  private buildNodeListFromElement (element: HTMLElement): NodeList {
    const nodeList = document.createDocumentFragment().childNodes
    const newNodeList = Object.create(nodeList, {
      0: { value: element, enumerable: true },
      length: { value: 1 },
      item: {
        value (i: number) {
          return this[!isNaN(i) ? +i : 0]
        },
        enumerable: true
      }
    })
    return newNodeList
  }

  /**
   * This builds a NodeList from an array of HTMLElements and returns the list
   * @param  {HTMLElement} elements array of HTMlElements
   * @returns NodeList
   */
  private buildNodeListFromElements (elements: HTMLElement[]): NodeList {
    const nodeList = document.createDocumentFragment().childNodes
    const nodeListObject: { [k: string]: any } = {}

    elements.forEach((el, index) => {
      nodeListObject[index] = {
        value: el,
        enumerable: true
      }
    })

    nodeListObject.item = {
      value (i: number) {
        return this[!isNaN(i) ? +i : 0]
      },
      enumerable: true
    }
    return Object.create(nodeList, nodeListObject)
  }

  /**
   * This returns the Element for a valid css selector string, will also return the selector if it is already an Element
   * @param  {any} selector
   * @returns Element
   */
  getTargetBySelector = (selector: any): Element => {
    if (selector instanceof window.HTMLElement) {
      return selector
    }
    return document.querySelector(selector)
  }

  /**
   * This returns a NodeList of all the targets that match the selector. If the selector is an HTMLElement it will return a NodeList with that selector.
   * @param  {string} selector
   * @returns NodeList
   */
  getTargetsBySelector = (selector: any): NodeList => {
    if (selector instanceof window.HTMLElement) {
      return this.buildNodeListFromElement(selector)
    }
    return document.querySelectorAll(selector)
  }

  /**
   * Alias for getTargetsBySelector for convenience
   * @param  {any} selector
   * @returns NodeList
   */
  $$ = (selector: any): NodeList => {
    return this.getTargetsBySelector(selector)
  }

  /**
   * This is used to get the parent element of a a target element using selectors for the elements
   * @param  {any} target target selector.
   * @param  {string} selector parent selector, must be a valid css selector string.
   * @returns any
   */
  getParentBySelector = (target: any, selector: string): any => {
    return this.getTargetBySelector(target).closest(selector)
  }

  /**
   * This is used to get the first sibling element of a target by a sibling selector
   * @param  {any} target target selector.
   * @param  {string} selector sibling selector, must be a valid css selector string.
   * @returns Element :this can be Null
   */
  getSiblingBySelector = (target: any, selector: string): HTMLElement => {
    let element: any = this.getTargetBySelector(target)

    while (element !== null) {
      element = element.nextElementSibling
      const selectors = this.getTargetsBySelector(selector)
      for (const key in selectors) {
        if (element === selectors[key]) {
          return element
        }
      }
    }

    element = this.getTargetBySelector(target)

    while (element !== null) {
      element = element.previousElementSibling
      const selectors = this.getTargetsBySelector(selector)
      for (const key in selectors) {
        if (element === selectors[key]) {
          return element
        }
      }
    }
    return element
  }

  /**
   * This is used to get the siblings as a Nodelist of a target by a sibling selector
   * @param  {any} target target selector.
   * @param  {string} selector sibling selector, must be a valid css selector string.
   * @returns NodeList
   */
  getSiblingsBySelector = (target: any, selector: string): NodeList => {
    let element: any = this.getTargetBySelector(target)
    const elementArray: HTMLElement[] = []

    while (element !== null) {
      element = element.nextElementSibling
      const selectors = this.getTargetsBySelector(selector)
      for (const key in selectors) {
        if (element === selectors[key]) {
          elementArray.push(element)
        }
      }
    }

    element = this.getTargetBySelector(target)

    while (element !== null) {
      element = element.previousElementSibling
      const selectors = this.getTargetsBySelector(selector)
      for (const key in selectors) {
        if (element === selectors[key]) {
          elementArray.push(element)
        }
      }
    }
    return this.buildNodeListFromElements(elementArray)
  }

  /**
   * Append HTML Content after an the target element
   * @param  {any} target target element or selector
   * @param  {string} content HTML content as a string
   * @returns void
   */
  append = (target: any, content: string): void => {
    this.getTargetsBySelector(target).forEach((node) => {
      const element: HTMLElement = (node as HTMLElement)
      element.insertAdjacentHTML('beforeend', content)
    })
  }

  /**
   * Prepend HTML Content before an the target element
   * @param  {any} target target element or selector
   * @param  {string} content HTML content as a string
   * @returns void
   */
  prepend = (target: any, content: string): void => {
    this.getTargetsBySelector(target).forEach((node) => {
      const element: HTMLElement = (node as HTMLElement)
      element.insertAdjacentHTML('afterbegin', content)
    })
  }

  /**
   * Remove target html element
   * @param  {any} target target element or selector
   * @returns void
   */
  remove = (target: any): void => {
    this.getTargetsBySelector(target).forEach((node) => {
      const element: HTMLElement = (node as HTMLElement)
      element.remove()
    })
  }

  /**
   * Set innerHTML for target
   * @param  {any} target target element or selector
   * @param  {string} content HTML content
   * @returns void
   */
  html = (target: any, content: string): void => {
    this.getTargetsBySelector(target).forEach((node) => {
      const element: HTMLElement = (node as HTMLElement)
      element.innerHTML = content
    })
  }

  /**
   * Utility method to get the px value from a value
   * @param  {any} value
   * @returns string the px value
   */
  getPx = (value: any): string => {
    const hasPX: boolean = value.includes('px')
    const hasPercent: boolean = value.includes('%')
    if (!isNaN(value) || (!hasPercent && !hasPX)) {
      if (typeof value === 'string' && isNaN(parseInt(value))) {
        value = 0
      }
      const numValue: number = value as number
      return `${numValue}px`
    } else {
      if (typeof value === 'string') {
        if (hasPX) {
          const testValue = value.replace('px', '')
          if (isNaN(parseInt(testValue))) {
            return '0px'
          }
          return value
        }
        if (hasPercent) {
          const testValue = value.replace('%', '')
          if (isNaN(parseInt(testValue))) {
            value = '0%'
          }
        }
        return value
      }
    }
    return value
  }

  /**
   * Set width for target
   * @param  {any} target target element or selector
   * @param  {number} value width as a number
   * @returns void
   */
  setWidth = (target: any, value: number): void => {
    this.getTargetsBySelector(target).forEach((node) => {
      const element: HTMLElement = (node as HTMLElement)
      element.style.width = this.getPx(value)
    })
  }
}
