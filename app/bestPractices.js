/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
    globals: function() {
        var myObject = {
            name: 'Jory'
        };

        return myObject;
    },

    parseInt: function(num) {
        //oh no, misunderstood. Change my code after checking answers

        // var result = '';
        // var i = 0;
        // while(!isNaN(num.charAt(i)) && i < num.length) {
        //     result = result + num.charAt(i);
        //     i++;
        // }
        // return +result;

        return(parseInt(num, 10));
    },

    identity: function(val1, val2) {
        return val1 === val2;
    }
};

exports.bestPracticesAnswers.parseInt('012');