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

class SootheJS { // eslint-disable-line
  shell: SJShell
  util: SJUtil
  data: SJData
  builder: SJBuilder
  componentManager: SJComponentManager
  message: SJMessage
  template: SJTemplate
  router: SJRouter

  constructor () {
    this.shell = new SJShell()
    this.util = new SJUtil()
    this.data = new SJData()
    this.builder = new SJBuilder()
    this.componentManager = new SJComponentManager()
    this.message = new SJMessage()
    this.template = new SJTemplate()
    this.router = new SJRouter()
  }
}
