var Default = (function () {
  'use strict';

  class Accordion {
    /**
     * @param  {object}  settings  This could be some configuration options.
     *                             for the pattern module.
     * @param  {object}  data      This could be a set of data that is needed
     *                             for the pattern module to render.
     * @constructor
     */
    constructor(settings, data) {
      this.data = data;

      this.settings = settings;

      return this;
    }
  }

  /** @param  {String}  selector  The main selector for the pattern */
  Accordion.selector = '[data-js*="accordion"]';

  class Default {
    constructor() {
      console.dir('@pttrn Development Mode');

      return this;
    }

    accordion() {
      return new Accordion();
    }
  }

  return Default;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIi4uLy4uL3NyYy9qcy9kZWZhdWx0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQWNjb3JkaW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSAge29iamVjdH0gIHNldHRpbmdzICBUaGlzIGNvdWxkIGJlIHNvbWUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBwYXR0ZXJuIG1vZHVsZS5cbiAgICogQHBhcmFtICB7b2JqZWN0fSAgZGF0YSAgICAgIFRoaXMgY291bGQgYmUgYSBzZXQgb2YgZGF0YSB0aGF0IGlzIG5lZWRlZFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBwYXR0ZXJuIG1vZHVsZSB0byByZW5kZXIuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLyoqIEBwYXJhbSAge1N0cmluZ30gIHNlbGVjdG9yICBUaGUgbWFpbiBzZWxlY3RvciBmb3IgdGhlIHBhdHRlcm4gKi9cbkFjY29yZGlvbi5zZWxlY3RvciA9ICdbZGF0YS1qcyo9XCJhY2NvcmRpb25cIl0nO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247IiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24nO1xuXG5jbGFzcyBEZWZhdWx0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9ICdwcm9kdWN0aW9uJylcbiAgICAgIGNvbnNvbGUuZGlyKCdAcHR0cm4gRGV2ZWxvcG1lbnQgTW9kZScpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhY2NvcmRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBBY2NvcmRpb24oKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdDsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBRUEsTUFBTSxTQUFTLENBQUM7RUFDaEI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFO0VBQzlCLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDckI7RUFDQSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQzdCO0VBQ0EsSUFBSSxPQUFPLElBQUksQ0FBQztFQUNoQixHQUFHO0VBQ0gsQ0FBQztBQUNEO0VBQ0E7RUFDQSxTQUFTLENBQUMsUUFBUSxHQUFHLHdCQUF3Qjs7RUNsQjdDLE1BQU0sT0FBTyxDQUFDO0VBQ2QsRUFBRSxXQUFXLEdBQUc7RUFDaEIsSUFDTSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDN0M7RUFDQSxJQUFJLE9BQU8sSUFBSSxDQUFDO0VBQ2hCLEdBQUc7QUFDSDtFQUNBLEVBQUUsU0FBUyxHQUFHO0VBQ2QsSUFBSSxPQUFPLElBQUksU0FBUyxFQUFFLENBQUM7RUFDM0IsR0FBRztFQUNIOzs7Ozs7OzsifQ==
