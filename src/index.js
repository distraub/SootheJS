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

class SJShell { // This is the main orchestrator
  constructor () {
    this.id = 'SJShell'
  }
}

class SJComponentManager { // class for managing components
  constructor () {
    this.id = 'SootheJS'
  }

  showId () {
    console.log(this.id)
  }
}

class SJBuilder { // this class abstracts js functions for dom manipulation
  constructor () {
    this.id = 'SJBuilder'
  }

  showId () {
    console.log(this.id)
  }
}

class SJUtil { // general utility class
  constructor () {
    this.id = 'SJUtil'
  }

  showId () {
    console.log(this.id)
  }
}

class SJData { // class for getting, setting, and handling data
  constructor () {
    this.id = 'SJData'
  }

  showId () {
    console.log(this.id)
  }

  /**
 * Get json data from a url, this can be local or an external api
 * @param  {} url the url to get data from
 * @returns JSON response
 * @throws error if not response.ok or error // TODO: add error handler support
 */
  async getData (url) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const json = await response.json()
      return json
    } catch (error) {
      console.error(error.message)
      throw new Error(error.message)
    }
  }
}

class SJMessage { // messaging class for communication between components and classes
  constructor () {
    this.id = 'SJMessage'
  }

  showId () {
    console.log(this.id)
  }
}

class SJTemplate { // templating class for templating render code
  constructor () {
    this.id = 'SJTemplate'
  }

  showId () {
    console.log(this.id)
  }
}

class SJMenu { // class to handle menus and navigation
  constructor () {
    this.id = 'SJMenu'
  }

  showId () {
    console.log(this.id)
  }
}

const sjShell = new SJShell()
sjShell.showId()

const sjComponentManager = new SJComponentManager()
sjComponentManager.showId()

const sjBuilder = new SJBuilder()
sjBuilder.showId()

const sjUtil = new SJUtil()
sjUtil.showId()

const sjData = new SJData()
sjData.showId()

const sjMessage = new SJMessage()
sjMessage.showId()

const sjTemplate = new SJTemplate()
sjTemplate.showId()

const sjMenu = new SJMenu()
sjMenu.showId()
