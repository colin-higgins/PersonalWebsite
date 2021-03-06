(function (ng) {
    'use strict';

    var readingApiInstance = function ($http) {

        return {
            getReadings: function () {
                var readings = [];
                var addReading = function (title) {
                    readings.push({
                        title: title,
                        templateUrl: "/readings/" + title + ".html",
                    });
                };

                addReading("the-mythical-man-month");
                addReading("quiet-the-power-of-introverts");
                addReading("the-software-craftsman");
                addReading("implementing-domain-driven-design");
                addReading("being-geek");
                addReading("clean-code");
                addReading("csharp-in-depth");
                addReading("why-a-students-work-for-c-students");
                addReading("the-new-kingmakers");
                addReading("the-pragmatic-programmer");
                addReading("algorithms-in-a-nutshell");
                addReading("mastering-regular-expressions");
                addReading("effective-programming-more-than-writing-code");
                addReading("javascript-the-good-parts");

                return readings;
            },
        };
    };

    ng.module('SpikeBytes').factory('readingApi', ['$http', readingApiInstance]);

}(angular));